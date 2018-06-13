const config = require('./config/config');
const mysql = require('mysql');


const connection =  function()
{
    
    const  con =  mysql.createConnection({
        host: "localhost",
        user:config.DATABASE_USERNAME,
        password:config.DATABSE_PASSWORD,
        database:config.DATABASE_NAME
    });

   
    
 
    con.connect((err)=>{
        if(err)throw(err);
    });

    return con;
}

module.exports=connection;
