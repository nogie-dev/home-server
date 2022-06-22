const db=require("../db/init_db")
const redis=require("../model/redis")

describe("MySQL",()=>{
    describe("MySQL Connection 확인",()=>{
        it("MySQL DB와 제대로 연결되어 있는지 확인",()=>{
            expect(db.mysql_connectionCheck()).toEqual("success")
        })
    })
})

describe("Redis",()=>{
    describe("Redis Connection 확인",()=>{
        it("Redis DB와 제대로 연결되어 있는지 확인",()=>{
            expect(db.redis_connectionCheck()).toEqual("success")
        })
    })

    describe("Query 테스트",()=>{
        it("Token 존재 시",()=>{
            expect(redis.isExistToken()).toBeFalsy()
            
            it("Token Value 집어넣기",async()=>{
                expect(await redis.setToken(key,value)).toBeCalledTimes(1)
            })
        })

        it("Token 비존재 시",()=>{
            expect(redis.isExistToken()).toBeTruthy()
            
            it("Token Value 뽑아오기",async()=>{
                expect(await redis.getToken(key))
            })
        })
    })
})