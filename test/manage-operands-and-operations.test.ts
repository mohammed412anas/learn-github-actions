import { manageOperendsAndOperations, setupInitialResult, validateOprends } from "../src/manage-operands-and-operations";
import PromptSync from "prompt-sync";
import { Operations } from "../src/utils/operations";

jest.mock("prompt-sync")
let mockedPrompt : jest.Mock = jest.fn();
(PromptSync as jest.Mock).mockReturnValue(mockedPrompt);

describe("test suit of manage-operands-and-operations.test.ts module",()=>{
    let operation: Operations;
    beforeEach(()=>{
        operation = new Operations;
    })
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

    test("should perform addition by prompting user for the series of inputs '2', '3' and '4' and take 'exit' as prompt and return the '5' ", ()=>{
        mockedPrompt
            .mockReturnValueOnce("2")
            .mockReturnValueOnce("3")
            .mockReturnValueOnce("4")
            .mockReturnValueOnce("exit");

        let result : number = manageOperendsAndOperations("addition",operation.addition);

        expect(result).toEqual(9);
    });

    test("should take input value 'exit' and return '0'",()=>{
        mockedPrompt.mockReturnValueOnce("exit");

        let result : number = manageOperendsAndOperations("no operation is performed ",operation.addition);
        
        expect(result).toEqual(0);
    });

    test("should take series of valid inputs '2', '3' and '4' and invalid inputs 'hi' and 'hello' and take 'exit' as final prompt return '9'",()=>{  
        mockedPrompt
            .mockReturnValueOnce("2")
            .mockReturnValueOnce("3")
            .mockReturnValueOnce("4")
            .mockReturnValueOnce("hi")
            .mockReturnValueOnce("hello")
            .mockReturnValueOnce("exit");

        let result : number = manageOperendsAndOperations("addition",operation.addition);

        expect(result).toEqual(9);
    });

    test("should take 'multiplication' as argument and return '1'",()=>{
        let operation : string = "multiplication";
        
        let result : number = setupInitialResult(operation,"0");

        expect(result).toEqual(1)
    });
});