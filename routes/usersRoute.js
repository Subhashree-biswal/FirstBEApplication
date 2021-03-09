const { json } = require('body-parser');
const express = require('express');
const { FailedDependency } = require('http-errors');

const router = express.Router();
const User = require('../models/userSchema');

router.get('/', async(request, response) =>{
    try{
        const users = await User.find()
        response.json(users)

    }catch(err){
        response.status(500).send('Error' + err)
    }
})

router.post('/', async(request, response) =>{
    const user = new User({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.email,
        password: request.body.password,
        phone: request.body.phone
    })
    /*
    if (first_name == "" || last_name == "" || email == "" || password == "" || phone == "" ){
        response.json({
            status: "FAILED",
            message: "Empty mandatory field!"
        });
    }*/
    try{
        const userSaved = await user.save()
        //response.status(200).send(userSaved)
        response.status(200).send('Created')
    }catch(err){
        response.status(500).send('Could not register user')
    }
})
//change the last name for the user
//router.patch('/:id', async(request, response)=>{


//})

//delete instaed of save use remove
module.exports = router