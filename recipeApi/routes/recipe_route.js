const recipe = require('express').Router();
const recipe_model = require('../model/recipe_model');
const user_model = require('../model/user_model');
const image_model = require('../model/image_model');
const uuid = require('../shared/uuid');
const auth = require('../shared/AUTHmiddleWare');


recipe.use(auth);
recipe.post('/getAll',(req,res)=>{

     recipe_model.getAll()
     .then((result)=>{
        if(result.length>0)
        {
            res.status(200).json(result);
        }
        else
        {
            res.status(404).json({message:"No Recipes Found"});
        }   
     });
    
});


recipe.post('/add',(req,res)=>{
    
    const api_key = req.body.X_API_KEY;
    const description = req.body.description;
    const ingridients = req.body.ingridients;
    const fileName = req.body.fileName;
    user_model.tokenExists(api_key)
    .then((data)=>{
       const u_id = data[0].u_id;

            recipe_model.addRecipe(u_id,description,ingridients)
            .then((uuid)=>{
                console.log(uuid);
                image_model.registerImage(fileName,uuid).
                then(filepath=>{

                    res.status(200).json({
                        r_id:data.uuid,
                        description: description,
                        ingridients:ingridients,
                        fileName:filepath
                    });

                });

                
            });
    });
    
});


recipe.post('/comment',(req,res)=>{

    const api_key = req.body.X_API_KEY;
    const r_id = req.body.recipe_id;
    const comment = req.body.comment;

    user_model.tokenExists(api_key)
    .then((data)=>{
        const u_id = data[0].u_id;
        const from_user_name = data[0].username;
        recipe_model.addComment(r_id,comment,u_id)
        .then(data=>{
            res.status(200).json({
                recipe_id:data.uuid,
                comment: comment,
                from_user : from_user_name
            });
        })
    });
});

recipe.post('/getComments',(req,res)=>{
    recipe_model.getAllComments()
    .then(data=>{
       
        res.status(200).json(data);
    });
});




module.exports=recipe;