package flagz

import (
	"context"
	"flag"
	"net/http"
	"os"
	"strings"
	"sync"

	"github.com/bazelbuild/rules_go/go/tools/bazel"
	"github.com/buildbuddy-io/buildbuddy/server/environment"
	"github.com/buildbuddy-io/buildbuddy/server/interfaces"
	// "github.com/buildbuddy-io/buildbuddy/server/util/perms"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"gopkg.in/yaml.v3"

	fzpb "github.com/buildbuddy-io/buildbuddy/proto/flagz"
	flagyaml "github.com/buildbuddy-io/buildbuddy/server/util/flagutil/yaml"
)

var enableFlagz = flag.Bool("app.enable_flagz", false, "If true, enables the flagz endpoint for viewing and changing the configuration flags of the running server ** Enterprise only **")

func Register(env environment.Env) error {
	env.SetFlagzEndpoint(&endpoint{})
	subMux := http.NewServeMux()
	subMux.Handle("/flagz/", serveRunfileHandler(
		"enterprise/server/flagz/web/index.html",
		func(d []byte) []byte { return d },
	))
	subMux.Handle("/flagz/editor.js", serveRunfileHandler(
		"enterprise/server/flagz/web/app_bundle/editor.js",
		func(d []byte) []byte { return d },
	))
	subMux.Handle("/flagz/style.css", serveRunfileHandler(
		"enterprise/server/flagz/web/style.css",
		func(d []byte) []byte { return d },
	))
	env.GetMux().Handle("/flagz/", subMux)
	return nil
}

func serveRunfileHandler(path string, transform func([]byte) []byte) http.HandlerFunc {
	var once sync.Once
	var data []byte
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var err error
		once.Do(func() {
			if data, err = readRunfile(path); err == nil {
				data = transform(data)
			}
		})
		if err != nil {
			// retry read on error
			once = sync.Once{}
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		s := strings.Split(path, ".")
		switch s[len(s)-1] {
		case "js":
			w.Header().Set("Content-Type", "text/javascript")
		case "css":
			w.Header().Set("Content-Type", "text/css")
		case "html":
			w.Header().Set("Content-Type", "text/html")
		}
		w.Write(data)
	})
}

func readRunfile(path string) ([]byte, error) {
	runfilePath, err := bazel.Runfile(path)
	if err != nil {
		return nil, err
	}
	data, err := os.ReadFile(runfilePath)
	if err != nil {
		return nil, err
	}
	return data, err
}

type endpoint struct{}

func (e *endpoint) GetFlagz(ctx context.Context, env interfaces.Environment, req *fzpb.GetFlagzRequest) (*fzpb.GetFlagzResponse, error) {
	if !*enableFlagz {
		return nil, status.UnavailableError("The flagz endpoint is not curently enabled.")
	}
	/*
	if u, err := perms.AuthenticatedUser(ctx, env); err != nil {
		return nil, err
	} else if !u.IsAdmin() {
		return nil, status.PermissionDeniedError("The flagz endpoint requires admin privileges.")
	}
	*/
	b, err := flagyaml.SplitDocumentedYAMLFromFlags(yaml.TaggedStyle, yaml.LiteralStyle)
	if err != nil {
		return nil, err
	}
	return &fzpb.GetFlagzResponse{YamlConfig: b}, nil
}

func (e *endpoint) SetFlagz(ctx context.Context, env interfaces.Environment, req *fzpb.SetFlagzRequest) (*fzpb.SetFlagzResponse, error) {
	if !*enableFlagz {
		return nil, status.UnavailableError("The flagz endpoint is not currently enabled.")
	}
	/*
	if u, err := perms.AuthenticatedUser(ctx, env); err != nil {
		return nil, err
	} else if !u.IsAdmin() {
		return nil, status.PermissionDeniedError("The flagz endpoint requires admin privileges.")
	}
	*/
	if err := flagyaml.OverrideFlagsFromData(req.YamlUpdate); err != nil {
		return nil, err
	}
	return &fzpb.SetFlagzResponse{}, nil
}