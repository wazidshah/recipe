const Database = require('../shared/database');
let db;


const uuid = ()=>
{
    return new Promise((success,reject)=>{
        db = new Database();
            db.query('select UUID() as uuid',(err,result,fields)=>{
                    if(err)
                    {
                        reject(err);
                    }
                    else
                    {
                        db.end();
                        success(result[0].uuid);
                    }
            });
    });
}

module.exports.getUUID = uuid;