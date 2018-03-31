var bs = require("browser-sync").create();

bs.watch(['example/*.*', 'example/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./example"
});