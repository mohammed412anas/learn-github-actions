import { takeInput } from "./calculator";

export function printMessage():boolean{
console.log(`
Welcome to simple calculator the app have the following features.
 Basic Operations
  1.Addition.
  2.Subtraction.
  3.Multiplication.
  4.Division.
  5.Modulus.
  6.Power.

 Scientific Functions
  1.Square Root (sqrt).
  2.Factorial (!).

 Expression Evaluation
  1.Evaluate math expression.
`
    )
    return true
};

export function removeQuotes(expression : string):string{
    expression = expression.replace(/["'`]/g,"")
    return expression;
}


