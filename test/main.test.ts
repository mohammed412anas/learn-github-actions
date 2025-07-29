import {mathOpreations} from "../src/main" ;
import PromptSync from "prompt-sync";
import { validateOprends } from "../src/manage-operands-and-operations";

jest.mock("prompt-sync")
let mockedPrompt : jest.Mock = jest.fn();
(PromptSync as jest.Mock).mockReturnValue(mockedPrompt);


describe("test suit of main.ts module",()=>{
    test("should take first mocked prompt value as '1' and perform addition between '0' and mocked prompt value '5' and return '5'",()=>{
        mockedPrompt
            .mockReturnValueOnce("1")
            .mockReturnValueOnce("5")
            .mockReturnValueOnce("exit");

        let sum : number = mathOpreations();

        expect(sum).toEqual(5);
    });

    test("should validateOperends take input value 5 as string  and check input is number and return 5 as number",()=>{
        let input : string = "5";

        let result : number = validateOprends(input,"addition",1,0) as number;

        expect(result).not.toEqual("5");
        expect(result).toEqual(5);
    });

    test("should not accept non integer like 'hi', 'hello', contiuously prompt user to give valid input '5' and return 5 as number.",()=>{
        let initialInput : string = 'hi';
        mockedPrompt    
            .mockReturnValueOnce("hello")
            .mockReturnValueOnce("5");

        let result : number = validateOprends(initialInput,"addition",1,0) as number;

        expect(result).toEqual(5);
            
    })
})