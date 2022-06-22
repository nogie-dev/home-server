const jwt_auth=require("../middleware")
const ticket_manage=require("../auth/jwt_manager")
const token_manage=require("../auth/token_manager")

describe("JWT 관리",()=>{
    describe("jwt Cookie 관리",()=>{
        it("로그인의 경우",()=>{
            expect(ctx.request.header.authorization).not.toBeUndefined()
        })
        it("비로그인의 경우",()=>{
            expect(ctx.request.header.authorization).toBeUndefined()
        })
    })

    describe("jwt 인증 관리 ",()=>{
        it("인증 성공의 경우 true를 반환해야 함",()=>{
            expect(jwt_auth.isAuthorized(ticket)).toEqual(true)
        })

        it("인증 실패의 경우 false를 반환해야 함",()=>{
            expect(jwt_auth.isAuthorized(ticket)).toEqual(false)
        })
    })

    describe("jwt Ticket 관리",()=>{
        const meta_data={
            auth:"false",
            expiration:"30m",
            hidden:"" //관리자만 알고있음
        }

        it("jwt Ticket Sign",()=>{
            expect(ticket_manage.make_ticket(meta_data,'secret',{expiration:meta_data.expiration})).not.toThrow()
        })
    })
})

describe("uuid-token-generator 관리",()=>{
    describe("토큰 생성",()=>{
        it("토큰이 존재해야 함",()=>{
            expect(token_manage.genToken()).not.toBeNull

            it("토큰 길이는 64글자",()=>{
                expect(token_manage.genToken()).toHaveLength(64)
            })
        })
    })
})