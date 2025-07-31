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

    test("should take first prompt value as 3 and perform multiplication between '4' and '2' and return result '8' and exit from app.",()=>{
        mockedPrompt
            .mockReturnValueOnce("3")
            .mockReturnValueOnce("4")
            .mockReturnValueOnce("2")
            .mockReturnValueOnce("exit")

        let multiply : number = mathOpreations();

        expect(multiply).toEqual(8);
    });

    test("should take first prompt value as 4 and perform division between '12' and '2' and return result '6' and exit from app.",()=>{
        mockedPrompt
            .mockReturnValueOnce("4")
            .mockReturnValueOnce("12")
            .mockReturnValueOnce("2")
            .mockReturnValueOnce("exit")

        let division : number = mathOpreations();

        expect(division).toEqual(6);
    });

    test("should take first prompt value as 5 and perform modulo division between '12' and '2' and return result '0' and exit from app.",()=>{
        mockedPrompt
            .mockReturnValueOnce("5")
            .mockReturnValueOnce("12")
            .mockReturnValueOnce("2")
            .mockReturnValueOnce("exit")

        let division : number = mathOpreations();

        expect(division).toEqual(0);
    });

    test("should take first prompt value as 6 and perform exponential multiplication '4' and '2' and return result as '16' and exit from app.",()=>{
        mockedPrompt
            .mockReturnValueOnce("6")
            .mockReturnValueOnce("4")
            .mockReturnValueOnce("2")
            .mockReturnValueOnce("exit")

        let exponent : number = mathOpreations();

        expect(exponent).toEqual(16);
    });


})