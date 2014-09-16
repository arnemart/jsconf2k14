These are slides and some code from my JSConf EU 2014 talk on esoteric programming languages.

Play around with befunge at <http://befungius.aurlien.net>.

To test the Thue interpreter, run `node thue.js hello.thue` (or try `beers.thue`).

To see the slides, run `npm install` and then `make it happen`.

If running the slides gives you a segfault, open the file `node_modules/slid.js/node_modules/picture-tube/node_modules/png-js/png-node.js` and insert a no-op (something like `if (1==1) {}`) below line 294. Don't ask me why.
