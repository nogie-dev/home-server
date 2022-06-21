const Router=require("koa-router")
const route=new Router()

//const tmp=require("../middleware/verify_session")

route.all('/',(ctx)=>{
    ctx.body="haha"
    console.log(ctx.params)
})

module.exports=route