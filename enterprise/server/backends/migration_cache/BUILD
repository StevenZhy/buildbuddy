load("@io_bazel_rules_go//go:def.bzl", "go_library", "go_test")

go_library(
    name = "migration_cache",
    srcs = [
        "config.go",
        "migration_cache.go",
    ],
    importpath = "github.com/buildbuddy-io/buildbuddy/enterprise/server/backends/migration_cache",
    visibility = ["//visibility:public"],
    deps = [
        "//enterprise/server/backends/pebble_cache",
        "//proto:remote_execution_go_proto",
        "//server/backends/disk_cache",
        "//server/cache/config",
        "//server/environment",
        "//server/interfaces",
        "//server/remote_cache/digest",
        "//server/util/background",
        "//server/util/disk",
        "//server/util/flagutil",
        "//server/util/log",
        "//server/util/status",
        "@com_github_pkg_errors//:errors",
        "@org_golang_x_sync//errgroup",
    ],
)

go_test(
    name = "migration_cache_test",
    size = "small",
    srcs = ["migration_cache_test.go"],
    deps = [
        ":migration_cache",
        "//proto:remote_execution_go_proto",
        "//server/backends/disk_cache",
        "//server/environment",
        "//server/interfaces",
        "//server/remote_cache/digest",
        "//server/testutil/testauth",
        "//server/testutil/testdigest",
        "//server/testutil/testenv",
        "//server/testutil/testfs",
        "//server/util/prefix",
        "//server/util/status",
        "@com_github_stretchr_testify//require",
        "@org_golang_x_sync//errgroup",
    ],
)
