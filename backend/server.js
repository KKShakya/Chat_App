const express = require('express');
const  {connectDB } = require('../backend/config/database');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3500;



app.use(express.json())


app.get('/',(req,res)=>{
  res.send('WElcome to Chat Application')
})



connectDB();

app.listen(PORT,()=>{

  console.log(`server is running on port ${PORT}  `);


})