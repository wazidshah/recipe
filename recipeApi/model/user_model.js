const Database = require('../shared/database');
const uuid = require('../shared/uuid');
let db;
const U_ID = 'u_id';
const USERNAME = 'username';
const PASSWORD = 'password';
const TOKEN = 'token';
const USER_TABLE = 'user';

const getUserByUserName=(username)=>{
     db = new Database();
     let f_result="";
     let query = `select ${U_ID},${PASSWORD},${TOKEN} from ${USER_TABLE} where ${USERNAME}='${username}'`;
     return new Promise((success,reject)=>{
        
        db.query(query,(err,results,fields)=>{
                                        if(err)
                                         {
                                            //db.end();
                                            reject(err);
                                         }
                                        else 
                                        {
                                             //db.end();
                                            success(results);
                                        }
            });
    });
    
}


const userExists = (username,password)=>{
    db = new Database();
    let f_result="";
    let query = `select ${U_ID},${TOKEN} from ${USER_TABLE} where ${USERNAME}='${username}' and ${PASSWORD}='${password}'`;
    
    return new Promise((success,reject)=>{
        db.query(query,(err,results,fields)=>{
                if(err)
                {
                    //db.end();
                    reject(err);
                }
                else 
                {
                    //db.end();
                    success(results);
                }
            });
        });
}


const signUp = (username,password,token) =>{
    uuid.getUUID().then((uuid)=>{
    
    db = new Database();
    let f_result="";
    let query = `insert into ${USER_TABLE} (${U_ID},${USERNAME},${PASSWORD},${TOKEN}) values('${uuid}','${username}','${password}','${token}')`;
    
    return new Promise((success,reject)=>{
        db.query(query,(err,results)=>{
                if(err)
                {
                    //db.end();
                    reject(err);
                }
                else 
                {
                    //db.end();
                    success(results);
                }
            });
        });

    });

}

const tokenExists = (token)=>{
    db = new Database();
    let query = `select ${USERNAME},${U_ID} from ${USER_TABLE} where ${TOKEN} = '${token}'`;
    console.log(token);
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

    })
    
}

module.exports.getUserByUserName = getUserByUserName;
module.exports.userExists = userExists;
module.exports.signUp = signUp;
module.exports.tokenExists = tokenExists;