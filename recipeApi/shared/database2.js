const config = require('./config/config');
const mysql = require('mysql');

const  con =  mysql.createPool({
    connectionLimit:10,
    host: "localhost",
    user:config.DATABASE_USERNAME,
    password:config.DATABSE_PASSWORD,
    database:config.DATABASE_NAME
});

const execute = (query)=>
{
    return new Promise((success,reject)=>{
        con.getConnection((err,connection)=>{
            if(err)
            {
                connection.release();
                reject(err);
            }
            else
            {
                success(connection);
            }
        })
    }).then((connection)=>{
        return new Promise((success,reject)=>{
            connection.query(query,(err,result)=>{
                if(err)
                {
                    connection.release();
                    reject(err);
                }
                else
                {
                    connection.release();
                    success(result);
                }
            });
        });
    });
    
}

module.exports.execute=execute;