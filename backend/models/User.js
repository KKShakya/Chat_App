const mongoose = require('mongoose')

const Schema = mongoose.Schema({


  name: {
    type: String,
    required: [true, "Please Enter Your name"]
  },

  email: {
    type: String,
    required: [true, "Please Enter Your Email"]

  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
  },

  avatar: {
    type: String,
    default: "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
  }

},{timestamps: true});


const userModel = mongoose.Model('User', Schema);

module.exports = userModel;