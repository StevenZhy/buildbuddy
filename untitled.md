--build_metadata=COMMIT_SHA=$(git rev-parse HEAD)

print "hello world!"

//test cache//

//I'm steven zhu//
- 

# Start a new shell inside the workflows environment (requires docker)
docker run --rm -it "gcr.io/flame-public/buildbuddy-ci-runner:latest"

# Clone your repo and test it
git clone https://github.com/acme-inc/acme
cd acme
bazel test //...