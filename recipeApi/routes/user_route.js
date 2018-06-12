const user = require('express').Router();
const user_model = require('../model/user_model');
const uuid = require('../shared/uuid');
// const bodyParser = require('body-parser');

// user.use(bodyParser.json()); 
// user.use(bodyParser.urlencoded({ extended: true })); 


user.post('/login',(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    
    
    
    // if(username.trim()=="")
    // {
    //     res.status(400).send('Username Cannot Be empty');
    // }

    // if(typeof username == 'undefined')
    // {
    //     res.status(400).send('Username Cannot Be empty');
    // }

    // if((typeof password=="undefined" ))
    // {
    //     res.status(400).send('Passowrd Cannot Be empty');
    // }

    // if(password.trim()=="")
    // {
    //     res.status(400).send('Passowrd Cannot Be empty');
    // }



    user_model.userExists(username,password)
    .then((data)=>{
        if(data.length==0)
        {
            res.status(404).send('User Not Found');
            return;
        }

        res.status(200).json(data[0].token);
    })

   
});

user.post('/signup',(req,res)=>{
    
    let username = req.body.username;
    let password = req.body.password;
    
    
    if(username.trim()=="")
    {
        res.status(400).send('Username Cannot Be empty');
    }

    if(typeof username == 'undefined')
    {
        res.status(400).send('Username Cannot Be empty');
    }

    if((typeof password=="undefined" ))
    {
        res.status(400).send('Passowrd Cannot Be empty');
    }

    if(password.trim()=="")
    {
        res.status(400).send('Passowrd Cannot Be empty');
    }

    user_model.getUserByUserName(username)
    .then((data)=>{

        if(data.length>0)
        {
            res.status(409).send('Username Already Exists');
            return;
        }

        uuid.getUUID()
        .then((token)=>{
            user_model.signUp(username,password,token)
            

            res.status(200).json("User Created");
        });
        

    });

});

module.exports=user;