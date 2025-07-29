import { Operations } from "../../src/utils/operations";

describe("test suit of operation.ts module",()=>{
    let calculation : Operations;
    beforeEach(()=>{
        calculation = new Operations;
    })
    test("should addition method of class Operations add '2' and '3' and return '5'",()=>{
        let add : number = calculation.addition(2,3);

        expect(add).toEqual(5)
    });

    test("should substraction method of class Operations substract '3' from '2' and return '1'",()=>{
        let add : number = calculation.substraction(2,3);

        expect(add).toEqual(-1);
    });
});