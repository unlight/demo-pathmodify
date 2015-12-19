var browserify = require("browserify");
var pathmodify = require("pathmodify");
var path = require("path");
var pkgUp = require("pkg-up");

var root = path.dirname(pkgUp.sync());

var b = browserify({
	debug: false,
	entries: "src/main.js",
	bundleExternal: false,
	cache: {},
	packageCache: {},
});

b.plugin(pathmodify(), {
	mods: [
		pathmodify.mod.dir("~", path.join(root, "./src"))
	]
});

b.bundle(function(err, buffer) {
	var code = buffer.toString('utf8');
	console.log('// ----- ' + new Date() + ' -----');
	console.log(code);
});
