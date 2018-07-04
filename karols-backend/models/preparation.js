const mongoose = require("mongoose")

const preparationSchema = mongoose.Schema({
  id: Number,
  selected: Boolean,
  image: String,
  info: String,
  titlePreparation: String
})

module.exports = mongoose.model("Preparation", preparationSchema)
