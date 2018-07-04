"use strict"

const allPreparations = require("../public/shopsPrestations.json")

module.exports.id = "CREATE-PREPARATIONS"

module.exports.up = function(done) {
  // use this.db for MongoDB communication, and this.log() for logging
  const preparations = this.db.collection("preparations")

  allPreparations.preparations.forEach(preparation => {
    preparations.insert(preparation, done)
  })
}

module.exports.down = function(done) {
  // use this.db for MongoDB communication, and this.log() for logging
  const preparations = this.db.collection("preparations")
  preparations.remove({}, done)
}
