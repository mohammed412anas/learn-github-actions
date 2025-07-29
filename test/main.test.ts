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

    test("should take first mocked prompt value as '2' and perform substraction between mocked prompt value '10' and mocked prompt value '5' and return '5'",()=>{
        mockedPrompt
            .mockReturnValueOnce("2")
            .mockReturnValueOnce("10")
            .mockReturnValueOnce("5")
            .mockReturnValueOnce("exit");

        let difference : number = mathOpreations();

        expect(difference).toEqual(5);
    });

})