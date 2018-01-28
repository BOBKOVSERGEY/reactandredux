var bs = require("browser-sync").create();

bs.watch(['classes/*.*', 'classes/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./classes"
});