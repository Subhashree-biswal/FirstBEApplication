const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const url = 'mongodb://localhost/shopkart';

const mongoose = require('mongoose');
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
//get handle to db connection
const con = mongoose.connection;
con.on('open', () =>{
     console.log('DB connected...');
 })

const userRoute = require('./routes/usersRoute')
app.use('/signup', userRoute)  //req for users send to userRouter

const loginRoute = require('./routes/userLogin')
app.use('/login', loginRoute)  //req for login send to userLogin Routes

 app.listen(3000, () =>{
    console.log("Server started on port 3000  ....")
 });