const express = require('express');
require('dotenv').config();

const  {connectDB } = require('../backend/config/database');
const ErrorMiddleware = require('./middlewares/Error');
const user = require('./routes/userRoutes.js')
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser);


app.get('/',(req,res)=>{
  res.send('WElcome to Chat Application')
})



app.use("/api/user",user)


// app.use("/api/chat",authentication,Chats)






connectDB();

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}  `);
})

//using it at last so that it get called when there is
//no middleware left to be called in routes
app.use(ErrorMiddleware);