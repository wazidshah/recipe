const Database = require('../shared/database');
const uuid = require('../shared/uuid');
const db = require('../shared/database2');
const U_ID = 'u_id';
const USERNAME = 'username';
const PASSWORD = 'password';
const TOKEN = 'token';
const USER_TABLE = 'user';

const getUserByUserName=(username)=>{
     //db = new Database();
    
     let f_result="";
     let query = `select ${U_ID},${PASSWORD},${TOKEN} from ${USER_TABLE} where ${USERNAME}='${username}'`;
     return new Promise((success,reject)=>{
        
        db.execute(query).then(data=>{
            success(data);
        }).catch(err=>reject(err));
    });
    
}


const userExists = (username,password)=>{
    //db = new Database();
    
    let f_result="";
    let query = `select ${U_ID},${TOKEN} from ${USER_TABLE} where ${USERNAME}='${username}' and ${PASSWORD}='${password}'`;
    
    return new Promise((success,reject)=>{
        db.execute(query).then(data=>{
            success(data);
        }).catch(err=>reject(err));
    });
}


const signUp = (username,password,token) =>{
    uuid.getUUID().then((uuid)=>{
   
    let f_result="";
    let query = `insert into ${USER_TABLE} (${U_ID},${USERNAME},${PASSWORD},${TOKEN}) values('${uuid}','${username}','${password}','${token}')`;
    
    return new Promise((success,reject)=>{
        db.execute(query).then(data=>{
                success(data);
            }).catch(err=>reject(err));
        });

    });

}

const tokenExists = (token)=>{
    //db = new Database();
    
    let query = `select ${USERNAME},${U_ID} from ${USER_TABLE} where ${TOKEN} = '${token}'`;
    console.log(token);
    return new Promise((success,reject)=>{
        
        db.execute(query).then(data=>{
            success(data);
        }).catch(err=>reject(err));

    })
    
}

module.exports.getUserByUserName = getUserByUserName;
module.exports.userExists = userExists;
module.exports.signUp = signUp;
module.exports.tokenExists = tokenExists;