const Database = require('../shared/database');
const db = require('../shared/database2');


const uuid = ()=>
{
    return new Promise((success,reject)=>{
            db.execute('select UUID() as uuid').then(data=>{
                success(data[0].uuid);
            }).catch(err=>reject(err));
    });
}

module.exports.getUUID = uuid;