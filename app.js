var bs = require("browser-sync").create();

bs.watch(['promise/*.*', 'promise/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./promise"
});