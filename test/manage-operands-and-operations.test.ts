import { manageOperendsAndOperations, validateOprends } from "../src/manage-operands-and-operations";
import PromptSync from "prompt-sync";

jest.mock("prompt-sync")
let mockedPrompt : jest.Mock = jest.fn();
(PromptSync as jest.Mock).mockReturnValue(mockedPrompt);

describe("test suit of manage-operands-and-operations.test.ts module",()=>{
    test("should validateOperends take input value 5 as string  and check input is number and return 5 as number",()=>{
        let input : string = "5";

        let result : number = validateOprends(input,"no operations will be performed",1,0) as number;

        expect(result).not.toEqual("5");
        expect(result).toEqual(5);
    });

    test("should not accept non integer like 'hi', 'hello', contiuously prompt user to give valid input '5' and return 5 as number.",()=>{
        let initialInput : string = 'hi';
        mockedPrompt    
            .mockReturnValueOnce("hello")
            .mockReturnValueOnce("5");

        let result : number = validateOprends(initialInput,"no operations will be performed",1,0) as number;

        expect(result).toEqual(5);
            
    });

    test("should should take input value as 'exit' and return 'exit'",()=>{
        let input : string = "exit";

        let result : string = validateOprends(input,"no operations will be performed",1,0) as string;

        expect(result).toEqual("exit");
    });

    test("should take multiple invalid inputs 'Anas' and 'Mohammed' and take valid input 'exit' and return 'exit'",()=>{
        let initialInput : string = 'Anas';
        mockedPrompt
            .mockReturnValueOnce("Mohammed")
            .mockReturnValueOnce("exit");

        let result : string = validateOprends(initialInput,"no operations will be performed",1,0) as string;

        expect(result).toEqual("exit");
    });
});