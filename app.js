var bs = require("browser-sync").create();

bs.watch(['chistye-function/*.*', 'chistye-function/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./chistye-function"
});