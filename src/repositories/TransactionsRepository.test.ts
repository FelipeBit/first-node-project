import * as TransactionsRepository from "./TransactionsRepository"
// @ponicode
describe("all", () => {
    let inst: any

    beforeEach(() => {
        inst = new TransactionsRepository.default()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.all()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getBalance", () => {
    let inst: any

    beforeEach(() => {
        inst = new TransactionsRepository.default()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.getBalance()
        }
    
        expect(callFunction).not.toThrow()
    })
})
