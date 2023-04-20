# rollup-terser-worker-threads

This is forked from https://github.com/rollup/rollup-starter-app to show a bug in @rollup/plugin-terser version 0.4.

Run a simple rollup build (including @rollup/plugin-terser):

    $ node tools/build.js

That works fine. Then run the same build inside a Node.js worker thread:

    $ node tools/build-worker.js

That also works, except the process hangs and never terminates.

Probably this is related to https://github.com/rollup/plugins/pull/1409 because the bug appeared after that PR was merged (if you downgrade to @rollup/plugin-terser version 0.3 the bug goes away) and that PR is also related to worker threads.
