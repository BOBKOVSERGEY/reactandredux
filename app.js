var bs = require("browser-sync").create();

bs.watch(['peremennyees6/*.*', 'peremennyees6/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./peremennyees6"
});