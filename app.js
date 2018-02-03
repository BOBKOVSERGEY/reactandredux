var bs = require("browser-sync").create();

bs.watch(['imperativnost-declarativnost/*.*', 'imperativnost-declarativnost/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./imperativnost-declarativnost"
});