import {removeQuotes} from "../src/filter-expression";

describe("test suit of filter-expression.ts module",()=>{
    test("should removeQuote function remove quotes from the expression `10 + 2`''`0'/10''-`10` and return '10 + 20/10-10'",()=>{
        let input : string = `"10 + 2"0'/10''-""10`;

        let result : string = removeQuotes(input);

        expect(result).toEqual("10 + 20/10-10");
    });

})