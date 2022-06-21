const db=require("../db/init_db")

describe("DB",()=>{
    describe("DB Connection 확인",()=>{
        it("DB와 제대로 연결되어 있는지 확인",()=>{
            expect(db.connectionCheck()).toEqual("success")
        })
    })

    describe("Query 테스트",()=>{
        it("DB에서 select로 얻어온 token값만 뽑아옴",()=>{
            expect(typeof authModel.getToken()).not.toBe("Object")
        })
    })
})