import PromptSync from "prompt-sync";
import { calculate, takeInput } from "../src/calculator";
import { removeQuotes } from "../src/filter-expression";


jest.mock("prompt-sync");
let mockedPrompt : jest.Mock = jest.fn();
(PromptSync as jest.Mock).mockReturnValue(mockedPrompt);

describe("calculator",()=>{
    test("should fail",()=>{
        mockedPrompt.mockReturnValueOnce("10+20");

        let input : string = takeInput();

        expect(input).toEqual("10+20");
    
    });

    test("should calculate function return sum of two numbers",()=>{
        let input : string = "10+20";
        
        let result : number = calculate(removeQuotes(input)) as number;

        expect(result).toEqual(30)
    });

    test("should calculate function return difference of two numbers",()=>{
        let input : string = "10-20";
        
        let result : number = calculate(removeQuotes(input)) as number;

        expect(result).toEqual(-10)
    });

    test("should calculate function return multiplication of three numbers",()=>{
        let input : string = "2*3*4";
        
        let result : number = calculate(removeQuotes(input)) as number;

        expect(result).toEqual(24)
    });

    test("should calculate function return multiplication of three numbers",()=>{
        let input : string = "2*3*4";
        
        let result : number = calculate(removeQuotes(input)) as number;

        expect(result).toEqual(24)
    });

    test("should calculate function calculate the expression ",()=>{
        let input : string = "2-3```+4*`5/2^(`2%4)'!+sqrt(4'`')";     
        
        let result : number = calculate(removeQuotes(input)) as number;

        expect(result).toEqual(6)
    });
    
    test("should calculate function return the error contain in the expression ",()=>{
        let input1 : string = "2 - 3+ 4 * 5/ 2^ (2 % 4)! + sqrt(4 ";
        let result1 : string = calculate(removeQuotes(input1)) as string;

        let input2 : string = "2 - 3+ 4 + * + 5/ 2^ (2 % 4)! + sqrt(4)"; 
        let result2 : string = calculate(removeQuotes(input2)) as string

        expect(result1).toEqual("Invalid expression : Parenthesis ) expected (char 36)");
        expect(result2).toEqual("Invalid expression : Value expected (char 12)")

    });
});