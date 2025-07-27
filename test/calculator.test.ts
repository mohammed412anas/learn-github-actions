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

    test("should calculator function return sum of two numbers",()=>{
        let input : string = "10+20";
        
        let result : number = calculate(removeQuotes(input)) as number;

        expect(result).toEqual(30)
    })

    test("should calculator function return difference of two numbers",()=>{
        let input : string = "10-20";
        
        let result : number = calculate(removeQuotes(input)) as number;

        expect(result).toEqual(-10)
    })
});