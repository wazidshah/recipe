const Database = require('../shared/database');
const uuid = require('../shared/uuid');
let db;
const I_ID = 'i_id';
const R_ID = 'r_id';
const PATH = 'path';
const IMAGE_TABLE = 'recipe_image';


const registerImage = (path,r_id)=>{
    db = new Database();

    return new Promise((success,reject)=>{
        uuid.getUUID()
        .then((uuid)=>{
            let query = `insert into ${IMAGE_TABLE} values('${uuid}','${r_id}','${path}')`;

            db.query(query,(err,result)=>{
                if(err)
                {
                    reject(err);
                }
                else
                {
                    success({path:path});
                }
            })
        });
    })
}

const getImage = (r_id)=>{
    db = new Database();

    return new Promise((success,reject)=>{
        let query = `select ${PATH} from ${IMAGE_TABLE} where ${R_ID}='${r_id}'`;

        db.query(query,(err,result,fields)=>{
            if(err)
            {
                reject(err);
            }
            else
            {
                success(result);
            }
        });
    });
}

module.exports.registerImage = registerImage;
module.exports.getImage = getImage;