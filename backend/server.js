const express = require('express');
const  {connectDB } = require('../backend/config/database');
const ErrorMiddleware = require('./middlewares/Error');
require('dotenv').config();

const user = require('./routes/userRoutes.js')

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
  res.send('WElcome to Chat Application')
})

app.use("/api/user",user)





connectDB();

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}  `);
})

app.use(ErrorMiddleware);
//using it at last so that it get called when there is
 //no middleware left to be called in routes