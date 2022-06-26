const mysql=require('mysql2')
const redis=require('redis')

require("dotenv").config()

const info={
    host:process.env.HOST,
    port:process.env.MYSQL_PORT,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
};

// await redis_client.connect();

//await redis_client.
// await redis_client.set('key', 'value');
// const value = await redis_client.get('key');

module.exports={
    redis_createClient: function(){
        return redis.createClient();
    }
}