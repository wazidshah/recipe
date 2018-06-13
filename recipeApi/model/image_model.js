const Database = require('../shared/database');
const uuid = require('../shared/uuid');
const db = require('../shared/database2');
const I_ID = 'i_id';
const R_ID = 'r_id';
const PATH = 'path';
const IMAGE_TABLE = 'recipe_images';


const registerImage = (path,r_id)=>{
   
    return new Promise((success,reject)=>{
        uuid.getUUID()
        .then((uuid)=>{
            let query = `insert into ${IMAGE_TABLE} values('${uuid}','${r_id}','${path}')`;

            db.execute(query).then(data=>{
                success(path);
            }).catch(err=>reject(err));
        });
    })
}

const getImage = (r_id)=>{
    
    return new Promise((success,reject)=>{
        let query = `select ${PATH} from ${IMAGE_TABLE} where ${R_ID}='${r_id}'`;

        db.execute(query).then(data=>{
            success(data);
        }).catch(err=>reject(err));
    });
}

module.exports.registerImage = registerImage;
module.exports.getImage = getImage;