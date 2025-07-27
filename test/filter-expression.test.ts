import {removeQuotes} from "../src/filter-expression";

describe("filter-expression",()=>{
    test("should remove quotes from the expression",()=>{
        let input : string = `"10 + 2"0'/10''-""10`

        let result : string = removeQuotes(input);

        expect(result).toEqual("10 + 20/10-10")
    })
})