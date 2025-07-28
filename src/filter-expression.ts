
export function removeQuotes(expression : string):string{
    expression = expression.replace(/["'`]/g,"")
    return expression;
}


