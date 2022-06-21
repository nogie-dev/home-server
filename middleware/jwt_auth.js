module.exports={
    checksession:((ctx,next)=>{
        if (ctx.cookies.get('sess')){
            next()
        }
        ctx.throw(400)
    })
}