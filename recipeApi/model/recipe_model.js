const Database = require('../shared/database');
const uuid = require('../shared/uuid');
let db;
const R_ID = 'r_id';
const U_ID = 'u_id';
const DESCRIPTION = 'description';
const INGRIDIENTS = 'ingridients';
const RECIPE_TABLE = 'recipes';

const COMMENT_TABLE = 'comments';
const C_ID = 'c_id';
const C_R_ID = 'r_id';
const COMMENT = 'comment';
const FROM_USER = 'from_user';


const getAll = ()=>{
    db = new Database();

    // let query = `SELECT r.r_id,r.u_id,r.description,r.ingridients,p.path FROM recipes r, (SELECT r_id,path from recipe_images) p where r.r_id = p.r_id`; //needs improvement
    //let query = `select * from ${RECIPE_TABLE}`;
    let query = `SELECT * FROM recipes LEFT JOIN recipe_images ON recipes.r_id=recipe_images.r_id`;
   return new Promise((success,reject)=>{
        db.query(query,(err,result,fields)=>{
            if(err)
            {
                //db.end();
                reject(err);
            }
            else
            {
                //db.end();
                success(result);
            }
        });
   });
}

const addRecipe = (u_id,description,ingridients)=>{
    db = new Database();

    return new Promise((success,reject)=>{
            uuid.getUUID().then((uuid)=>{
                let query = `insert into ${RECIPE_TABLE} values('${uuid}','${u_id}','${description}','${ingridients}')`;

                db.query(query,(err,result)=>{
                    if(err)
                    {
                        //db.end();
                        reject(err);
                    }
                    else
                    {
                        //db.end();
                        success({"uuid":uuid});
                        
                        
                    }
                });
        });

    });
    
}

const addComment = (r_id,comment,from_user)=>{
    db = new Database();

    return new Promise((success,reject)=>{
        uuid.getUUID().then((uuid)=>{
            let query = `insert into ${COMMENT_TABLE} values('${uuid}','${r_id}','${comment}','${from_user}')`;

            db.query(query,(err,result)=>{
                if(err)
                {
                    //db.end();
                    reject(err);
                }
                else
                {
                    //db.end();
                    console.log(uuid);
                    success({"uuid":uuid});
                    
                    
                }
                });
            });

        });

}

const getAllComments = ()=>{
    db = new Database();
    return new Promise((success,reject)=>{
        uuid.getUUID().then((uuid)=>{
            let query = `select ${C_R_ID},${COMMENT} from ${COMMENT_TABLE}`;

            db.query(query,(err,result)=>{
                if(err)
                {
                    //db.end();
                    reject(err);
                    
                }
                else
                { 
                    //db.end();
                    console.log(uuid);
                    success(result);
                   
                    
                }
                });
            });

        });
}

module.exports.addComment = addComment;
module.exports.getAllComments = getAllComments;
module.exports.getAll = getAll;
module.exports.addRecipe = addRecipe;