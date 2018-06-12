const user_model = require('../model/user_model');

 module.exports= (req,res,next)=>{
    

    if(typeof req.body.X_API_KEY =="undefined")
    {
        console.log(req.body.X_API_KEY);
        res.status(401).json({error:"Invalid Api Key"});
        
    }
    else
    {
        user_model.tokenExists(req.body.X_API_KEY)
        .then(data=>{
            if(data.length>0)
            {
                next(); 
            }
            else
            {
                res.status(401).json({error:"Invalid Api Key"});
            }
        })
       
    }
    
    
}

