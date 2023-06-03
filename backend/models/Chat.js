const mongoose = require('mongoose')

const Schema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },

  isGroupChat: {
    type: Boolean,
    default: false,
  },

  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],

  latestMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message"
  },

  groupAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

},
  {
    timestamps: true
  }
);


const ChatModel = mongoose.model('Chat', Schema);

module.exports = ChatModel;