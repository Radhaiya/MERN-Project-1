//modules
const dotenv = require('dotenv')
const  mongoose = require('mongoose')
const express = require('express')
const app = express();


//config.env
dotenv.config({path:'./config.env'})

//Database
require('./database/connection')

//INPUT AS JSON
app.use(express.json())


//Router and Authentication
app.use(require('./router/auth'));



//Middleware
const middleware = (req,res,next)=>{ 
    console.log(`This is middleware`);  
    next(); 
  
}


//Port
const PORT= process.env.PORT
app.listen(PORT, () => { 
    console.log(`Server is running at port ${PORT}`);
}) 
