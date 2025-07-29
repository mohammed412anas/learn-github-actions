import { takeInput } from "./calculator";
import { manageOperendsAndOperations } from "./manage-operands-and-operations";
import { Operations } from "./utils/operations";


console.log
(`
Welcome to simple calculator the app have the following features.
 Basic Operations
  1.Addition.
  2.Subtraction.
  3.Multiplication.
  4.Division.
  5.Modulus.
  6.Power.

 Scientific Functions
  7.Square Root (sqrt).
  8.Factorial (!).

 Expression Evaluation
  9.Evaluate math expression.

(Enter 'exit' to exit from app)
`);

export function mathOpreations():number{
    let operations = new Operations()
    let userChoice : string = takeInput(`Enter 1-9 to perform corresponding operations or 'exit': `);
    switch(userChoice){
        case '1':
            return manageOperendsAndOperations("addition",operations.addition);
        case '2':
            return manageOperendsAndOperations("substraction",operations.substraction);
        default:
            return 0;
            
    };
};


