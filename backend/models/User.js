const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



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



// Document middleware is supported for the following document functions. In Mongoose, a document is an instance of a Model class. In document middleware functions, this refers to the document. To access the model, use this.constructor.

// Note: The create() function fires save() hooks.

// Note: Query middlewares are not executed on subdocuments.

// Pre middleware functions are executed one after another, when each middleware calls next.

//it is a document middleware
Schema.pre("save", async function (next) {

  //hashing the passsord for document
  //and then saving it inisde it
  const hashPassword = await bcrypt.hash(this.password, 10);
  //  saving hashed passworrd in documnets/
  this.password = hashPassword;
  next();
})



// jwt toekn genrator using  schema instance methods
Schema.methods.getJwtToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
}


Schema.methods.comparePassword = async function (password) {
  // console.log(this.password);
  return await bcrypt.compare(password, this.password);
}



const userModel = mongoose.model('User', Schema);

module.exports = userModel;