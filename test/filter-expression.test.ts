import {filterExpression} from "../src/filter-expression";

describe("filterExpression function",()=>{
    test("should return expression by removing white spaces and replace \^ and sqrt with proper mathematical operations",()=>{
        let inputExpression : string = " 1   0 + 2    0   / 1    0 +  sqrt   (4) ^     2";
        
        let result : string = filterExpression(inputExpression);

        expect(result).toEqual("10+20/10+Math.sqrt(4)**2")
    });
})