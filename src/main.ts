import { calculateExpression, takeInput } from "./calculator";
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
(Enter 'back' to come to home.)
(Enter 'exit' to exit from app.)
`);

export function mathOpreations():number{
    let operations = new Operations()
    let userChoice : string = takeInput(`Enter 1-9 to perform corresponding operations or 'exit': `);
    switch(userChoice){
        case '1':
            return manageOperendsAndOperations("addition",operations.addition);
        case '2':
            return manageOperendsAndOperations("substraction",operations.substraction);
        case '3':
            return manageOperendsAndOperations("multiplication",operations.multiplication);
        case '4':
            return manageOperendsAndOperations("division",operations.division);
        case '5':
            return manageOperendsAndOperations("modulo",operations.modulo);
        case '6':
            return manageOperendsAndOperations("exponintial operation",operations.power);
        case '7':
            return manageOperendsAndOperations("square root", operations.square_root);
        case '8':
            return manageOperendsAndOperations("factorial",operations.factorial);
        case '9':
            return calculateExpression();
        default:
            if(userChoice.toLowerCase() === "exit"){
                throw  "Came out of app"
            }else {
                return mathOpreations()
            };
            
    };
};


if(require.main === module){
    while(true){
        mathOpreations();
    };
};