var Mongoose = require('mongoose');

const DSchema = Mongoose.Schema({
  userID: String,
  history: Number,
  historypday: Number,
})

module.exports = Mongoose.model("DataB", DSchema);
