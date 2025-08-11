import {mathOpreations} from "../src/main" ;
import PromptSync from "prompt-sync";

jest.mock("prompt-sync")
let mockedPrompt : jest.Mock = jest.fn();
(PromptSync as jest.Mock).mockReturnValue(mockedPrompt);


describe("test suit of main.ts module",()=>{
    test("should take first mocked prompt value as '1' and perform addition between '0' and mocked prompt value '5' and return '5' and come back from specific operation.",()=>{
        mockedPrompt
            .mockReturnValueOnce("1")
            .mockReturnValueOnce("5")
            .mockReturnValueOnce("back");

        let sum : number = mathOpreations();

        expect(sum).toEqual(5);
    });

    test("should take first mocked prompt value as '2' and perform substraction between mocked prompt value '10' and mocked prompt value '5' and return '5'",()=>{
        mockedPrompt
            .mockReturnValueOnce("2")
            .mockReturnValueOnce("10")
            .mockReturnValueOnce("5")
            .mockReturnValueOnce("back");

        let difference : number = mathOpreations();

        expect(difference).toEqual(5);
    });

    test("should take first prompt value as 3 and perform multiplication between '4' and '2' and return result '8' and come back from specific operation.",()=>{
        mockedPrompt
            .mockReturnValueOnce("3")
            .mockReturnValueOnce("4")
            .mockReturnValueOnce("2")
            .mockReturnValueOnce("back")

        let multiply : number = mathOpreations();

        expect(multiply).toEqual(8);
    });

    test("should take first prompt value as 4 and perform division between '12' and '2' and return result '6' and come back from specific operation.",()=>{
        mockedPrompt
            .mockReturnValueOnce("4")
            .mockReturnValueOnce("12")
            .mockReturnValueOnce("2")
            .mockReturnValueOnce("back")

        let division : number = mathOpreations();

        expect(division).toEqual(6);
    });

    test("should take first prompt value as 5 and perform modulo division between '12' and '2' and return result '0' and come back from specific operation.",()=>{
        mockedPrompt
            .mockReturnValueOnce("5")
            .mockReturnValueOnce("12")
            .mockReturnValueOnce("2")
            .mockReturnValueOnce("back")

        let division : number = mathOpreations();

        expect(division).toEqual(0);
    });

    test("should take first prompt value as 6 and perform exponential multiplication between '4' and '2' and return result as '16' and come back from specific operation.",()=>{
        mockedPrompt
            .mockReturnValueOnce("6")
            .mockReturnValueOnce("4")
            .mockReturnValueOnce("2")
            .mockReturnValueOnce("back")

        let exponent : number = mathOpreations();

        expect(exponent).toEqual(16);
    });

    test("should take first prompt value as 7 and perform square root operation for '4' and return 2 as result and come back from specific operation.",()=>{
        mockedPrompt
            .mockReturnValueOnce("7")
            .mockReturnValueOnce("4")
            .mockReturnValueOnce("back");

        let square_root : number = mathOpreations();

        expect(square_root).toEqual(2);
    });

    test("should take first prompt value as 8 and perform factorial operation for '4' and return 24 as result and come back from specific operation.",()=>{
        mockedPrompt
            .mockReturnValueOnce("8")
            .mockReturnValueOnce("4")
            .mockReturnValueOnce("back");

        let factorialResult : number = mathOpreations();

        expect(factorialResult).toEqual(24);
    });

    test("should take first prompt value as 9 and perform mathematical calculation of expression '10 + 30 * (4 ^ 2) - sqrt(49)' and return result as 483 and come back from specific operation.",()=>{
        mockedPrompt
            .mockReturnValueOnce("9")
            .mockReturnValueOnce("10 + 30 * (4 ^ 2) - sqrt(49)")
            .mockReturnValueOnce("back");

        let expressionResult : number = mathOpreations();

        expect(expressionResult).toEqual(483);
    });

    test("should take first prompt value as 9 and perform mathematical calculation of invalid expression '10 + 30 * (4 ^ 2) - sqrt(49'<-- missed a paranthesis here and return result as 0 and come back from specific operation.",()=>{
        mockedPrompt
            .mockReturnValueOnce("9")
            .mockReturnValueOnce("10 + 30 * (4 ^ 2) - sqrt(49")
            .mockReturnValueOnce("back");

        let expressionResult : number = mathOpreations();

        expect(expressionResult).toEqual(0);
    });

    test("should take three invalid prompts(which specifies mathematical operations) and continuosly ask for valid prompt and take '2+5' as expression and return result as '7' and come back from specific operation.",()=>{
        mockedPrompt
            .mockReturnValueOnce("invalid 1")
            .mockReturnValueOnce("invalid 2")
            .mockReturnValueOnce("invalid 3")
            .mockReturnValueOnce("9")
            .mockReturnValueOnce("2+5")
            .mockReturnValueOnce("back")

        let expressionResult : number = mathOpreations();

        expect(expressionResult).toEqual(7);
    });

    test("should take mocked prompt as 'exit' and the function mathOperations throw message as 'Came out of app' and the app should  exit.",()=>{
        mockedPrompt
            .mockReturnValueOnce("exit")
            
        expect(()=>mathOpreations()).toThrow()
    });

});