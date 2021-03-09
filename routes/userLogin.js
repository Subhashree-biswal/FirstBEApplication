const express = require('express');


const router = express.Router();
const Login = require('../models/loginSchema');

router.post('/', async(request, response)=>{
    const login = new Login({
        email : request.body.email,
        password : request.body.password
    })
    try{
        
        response.status(200).send("Successfully Logged In")

    }catch(err){
        response.status(500).send('Could not login')
    }
    
    
});

module.exports = router;
