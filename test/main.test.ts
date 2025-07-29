import {mathOpreations} from "../src/main" ;
import PromptSync from "prompt-sync";

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

})