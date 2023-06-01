const mongoose = require('mongoose')

const Schema = mongoose.Schema({


  sender: { type: mongoose.Schema.Types.objectID, ref: "User" },
  content: { type: String, trim: true },
  Chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" }

},{timestamps: true});


const messageModel = mongoose.Model('Message', Schema);

module.exports = messageModel;