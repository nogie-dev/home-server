const db=require("./init_db")

//init
const redis_client=db.redis_createClient()
;(function(){
    redis_client.on('ready',()=>console.log("started"))
    redis_client.on('error', (err) => console.log('Redis Client Error', err));

    redis_client.connect()
})()

// ;(async function(){
//     await redis_client.set("test",1)
//     console.log(await redis_client.set("1","1"))
// })()

module.exports={
    isExistToken:async function(key){
        return await redis_client.exists(key)===1?true:false
    },

    getToken:async function(key){
        return await redis_client.get(key)
    },

    setToken:async function(key,value){
        return await redis_client.get(key,value)
    }
}