module.exports={
    ErrorHandler:(ctx)=>{
        switch(ctx.status){
            case 400:
                ctx.body={
                    "msg":"Bad Request",
                    "status":ctx.status
                }
                break
            case 401:
                ctx.body={
                    "msg":"Not Authorization",
                    "status":ctx.status
                }
                break
            //일부로 400과 동일하게 처리함
            case 403:
                ctx.body={
                    "msg":"Bad Request",
                    "status":ctx.status
                }
                break
            case 404:
                ctx.body={
                    "msg":"Not Found",
                    "status":ctx.status
                }
                break
            case 500:
                ctx.body={
                    "msg":"Server Side Error",
                    "status":ctx.status
                }
                break
        }
    }
}