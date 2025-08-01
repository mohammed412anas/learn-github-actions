import PromptSync from "prompt-sync";
import { calculate, calculateExpression, takeInput } from "../src/calculator";
import { removeQuotes } from "../src/filter-expression";


jest.mock("prompt-sync");
let mockedPrompt : jest.Mock = jest.fn();
(PromptSync as jest.Mock).mockReturnValue(mockedPrompt);

describe("test suit of calculator.ts module",()=>{
    test("should mock prompt-sync and return prompt input value as '10+20'",()=>{
        mockedPrompt.mockReturnValueOnce("10+20");

        let input : string = takeInput(`Enter the expression to calculate : `);

        expect(input).toEqual("10+20");
    
    });

    test("should calculate function add '10+20' and return '30'",()=>{
        let input : string = "10+20";
        
        let result : number = calculate(removeQuotes(input)) as number;

        expect(result).toEqual(30)
    });

    test("should calculate function calculate the difference of two numbers '10-20' and return '-10'",()=>{
        let input : string = "10-20";
        
        let result : number = calculate(removeQuotes(input)) as number;

        expect(result).toEqual(-10)
    });

    test("should calculate function multipliply '2*3*4' and return 24",()=>{
        let input : string = "2*3*4";
        
        let result : number = calculate(removeQuotes(input)) as number;

        expect(result).toEqual(24)
    });

    test("should calculate function divide '24/3' and return 8",()=>{
        let input : string = "24/3";
        
        let result : number = calculate(removeQuotes(input)) as number;

        expect(result).toEqual(8)
    });

    test("should calculate function remove quotes from this expression 2-3```+4*`5/2^(`2%4)'!+sqrt(4'`') calculate the expression and return '6'",()=>{
        let input : string = "2-3```+4*`5/2^(`2%4)'!+sqrt(4'`')";     
        
        let result : number = calculate(removeQuotes(input)) as number;

        expect(result).toEqual(6)
    });
    
    test("should calculate function find the unclosed paranthesis in the expression (2+3 return the error message ",()=>{
        let input1 : string = "(2+3 ";

        let result1 : string = calculate(removeQuotes(input1)) as string;

        expect(result1).toEqual("Invalid expression : Parenthesis ) expected (char 6)");
    });

    test("should calculate function return Infinity while calculating large number like 1000!",()=>{
        let input : string = "1000!"

        let result : number = calculate(removeQuotes(input)) as number;

        expect(result).toEqual(Infinity)
    });

    test("should calculate function remove additional quotes in this expression 1`2'3`4`5'6`7'8`9 and return '123456789'",()=>{
        let input : string = "1`2'3`4`5'6`7'8`9";

        let result : number = calculate(removeQuotes(input)) as number;

        expect(result).toEqual(123456789)
    });

    test("should runApp run the app continuously run three times with three mocked expressions and exit the app when the mocked prompt value is 'EXIT'.",()=>{
        mockedPrompt    
            .mockReturnValueOnce("10+20+30")
            .mockReturnValueOnce("40+50+60")
            .mockReturnValueOnce("70+80+90")
            .mockReturnValueOnce("100+200+300")
            .mockReturnValueOnce("EXIT")
            
        let isAppRunning : boolean = calculateExpression()

        expect(isAppRunning).toBeFalsy()
    })
});