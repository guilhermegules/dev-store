const mongoose = require("mongoose");

mongoose.connect(`mongodb://mongo/devshop`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
