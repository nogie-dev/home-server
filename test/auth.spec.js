const jwt_auth=require("../middleware")
const ticket_manage=require("../auth/jwt_manager")

describe("JWT 관리",()=>{
    describe("jwt Cookie 관리",()=>{
        it("로그인의 경우",()=>{
            expect(ctx.cookies.get("ticket")).not.toBeUndefined()
        })
        it("비로그인의 경우",()=>{
            expect(ctx.cookies.get("ticket")).toBeUndefined()
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