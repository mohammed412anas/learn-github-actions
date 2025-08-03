import { Operations } from "../../src/utils/operations";

describe("test suit of operation.ts module",()=>{
    let calculation : Operations;
    beforeEach(()=>{
        calculation = new Operations;
    })
    test("should add '2' and '3' and return '5'",()=>{
        let add : number = calculation.addition(2,3);

        expect(add).toEqual(5);
    });

    test("should substract '3' from '2' and return '-1'",()=>{
        let substract : number = calculation.substraction(2,3);

        expect(substract).toEqual(-1);
    });

    test("should substract '3' from '0' and return '3'",()=>{
        let substract: number = calculation.substraction(0,3);

        expect(substract).toEqual(3);
    });

    test("should multiply '3' and '4' and return '12'",()=>{
        let multiple : number = calculation.multiplication(3,4);

        expect(multiple).toEqual(12);
    });

    test("should divide '14' by '2' and return '7'",()=>{
        let divide : number = calculation.division(14,2);

        expect(divide).toEqual(7);
    });

    test("should not divide '2' by '0' and return '2' ",()=>{
        let divide : number = calculation.division(2,0);

        expect(divide).toEqual(2);
    });

    test("should divide '3' by '2' and return reminader as '1' ",()=>{
        let reminder : number = calculation.modulo(3,2);

        expect(reminder).toEqual(1);
    });

    test("should not divide '3' by '0' and  and return '3' with a console in terminal",()=>{
        let reminder : number = calculation.modulo(3,0);

        expect(reminder).toEqual(3);
    });

    test("should perform power calculation between '3' for '2' and  and return '9' with a console in terminal",()=>{
        let exponent : number = calculation.power(3,2);

        expect(exponent).toEqual(9);
    });

    test("should return the square root of '4' as '2'",()=>{
        let sqrt : number = calculation.square_root(4,2);

        expect(sqrt).toEqual(2);
    });

    test("should return the factorial value of 4 as 24",()=>{
        let factorial : number = calculation.factorial(4,24);

        expect(factorial).toEqual(24);
    });

    test("should return the factorial value as 1 if the operand is '0'",()=>{
        let factorial : number = calculation.factorial(0,1);

        expect(factorial).toEqual(1);
    });

    test("should return the factorial value of -4 as -24",()=>{
        let factorial : number = calculation.factorial(-4,-24);

        expect(factorial).toEqual(-24);
    });
});