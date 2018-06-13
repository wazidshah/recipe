const express = require('express');
const Database = require('./shared/database');
const user = require('./model/user_model');
const bodyParser = require('body-parser');
const app = express();

//cors
const cors = require('cors');
app.use(cors());


app.use(express.static('public'));
//routes
const userRoute = require('./routes/user_route');
const recipeRoute = require('./routes/recipe_route');
const uploadRoute = require('./routes/upload_route');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/user',userRoute);
app.use('/recipe',recipeRoute);
app.use('/image',uploadRoute);

app.get('/',(req,res)=>{
    res.json('Welcome To Recipe Api');   
});



//Port
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})