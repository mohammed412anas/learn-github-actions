import PromptSync from "prompt-sync";
import { takeInput } from "../src/calculator";


jest.mock("prompt-sync");
let mockedPrompt : jest.Mock = jest.fn();
(PromptSync as jest.Mock).mockReturnValue(mockedPrompt);

describe("calculator",()=>{
    test("should fail",()=>{
        mockedPrompt.mockReturnValueOnce("10+20");

        let input : string = takeInput();

        expect(input).toEqual("10+20");
    
    });
});