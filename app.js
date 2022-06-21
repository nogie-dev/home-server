const Koa=require("koa")
const Router=require("koa-router")

const errorHandler=require("./error/error_handle")

const app=new Koa()
const router=new Router()

const routes=require("./routes/routes")

router.use('/',routes.routes())

app.use(router.routes()).use(router.allowedMethods())
app.use((ctx,next)=>{
    errorHandler.ErrorHandler(ctx)
})

app.listen(3000,()=>{
    console.log('server on')
})



