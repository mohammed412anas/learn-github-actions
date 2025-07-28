import { Operations } from "../src/utils/operations";

describe("test suit of operation.ts module",()=>{
    test("should addition method of class Operations add '2' and '3' and return '5'",()=>{
        let calculation = new Operations()

        let add : number = calculation.addition(2,3);

        expect(add).toEqual(5)
    })
})