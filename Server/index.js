// Environment variables require
const dotenv = require("dotenv");
dotenv.config();

// Cross origin resourse sharing (CORS)
const cors = require('cors');
let corsOptions ={
  origin:`http://localhost:4200`,
}


// Mongodb connect using mongoose
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Db connected"));


// Server Creation
const express = require("express");
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.static(path.join(__dirname, 'Images')));
app.use(express.json());
app.use(cors(corsOptions));


// Logic for routing
const adminRouter = require('./routes/adminRouter');
const userRouter = require('./routes/userRouter');

app.use('/admin',adminRouter);
app.use('/user',userRouter);


app.listen(PORT, 
   () => console.log(`Server is running at port ${PORT}`));
