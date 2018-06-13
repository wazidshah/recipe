const Database = require('../shared/database');
const uuid = require('../shared/uuid');
const db = require('../shared/database2');
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
    //db = new Database();
   
    // let query = `SELECT r.r_id,r.u_id,r.description,r.ingridients,p.path FROM recipes r, (SELECT r_id,path from recipe_images) p where r.r_id = p.r_id`; //needs improvement
    //let query = `select * from ${RECIPE_TABLE}`;
    let query = `SELECT * FROM recipes LEFT JOIN recipe_images ON recipes.r_id=recipe_images.r_id`;
//    return new Promise((success,reject)=>{
//         db.query(query,(err,result,fields)=>{
//             if(err)
//             {
//                 //db.end();
//                 reject(err);
//             }
//             else
//             {
//                 success(result);
//             }
//         });
//    });
    return new Promise((success,reject)=>{
        db.execute(query).then((data)=>{
            success(data);
        }).catch(err=>reject(err));
    });
        

}

const addRecipe = (u_id,description,ingridients)=>{
    //db = new Database();
   
    return new Promise((success,reject)=>{
            uuid.getUUID().then((uuid)=>{
            let query = `insert into ${RECIPE_TABLE} values('${uuid}','${u_id}','${description}','${ingridients}')`;
            
            db.execute(query).then((data)=>{
                success(uuid);
            }).catch(err=>reject(err));
        });

    });
    
}

const addComment = (r_id,comment,from_user)=>{
    //db = new Database();
   
    return new Promise((success,reject)=>{
        uuid.getUUID().then((uuid)=>{
            let query = `insert into ${COMMENT_TABLE} values('${uuid}','${r_id}','${comment}','${from_user}')`;

            db.execute(query).then(data=>{
                success(data);
            }).catch(err=>reject(err));
        });

        });

}

const getAllComments = ()=>{
    //db = new Database();
    return new Promise((success,reject)=>{
        uuid.getUUID().then((uuid)=>{
            let query = `select ${C_R_ID},${COMMENT} from ${COMMENT_TABLE}`;

            db.execute(query).then(data=>{
                    success(data);
                }).catch(err=>reject(err));
            });

        });
}

module.exports.addComment = addComment;
module.exports.getAllComments = getAllComments;
module.exports.getAll = getAll;
module.exports.addRecipe = addRecipe;