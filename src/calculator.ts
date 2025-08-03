import promptSync from "prompt-sync";
import {evaluate} from "mathjs"
import { removeQuotes } from "./filter-expression";

export function takeInput(description : string):string{
    const prompt = promptSync();
    return prompt(description)
}
export function calculate(expression:string):number|string|object{
    let result : number | string;
    try{
        result  = evaluate(expression) as number;  
        return result; 
    }
    catch(err){
        result = `Invalid expression : ${(err as Error).message}` as string;
        return result;
    }
}

export function calculateExpression(result:number = 0):number{  
    while(true){
        let expression = removeQuotes(takeInput(`Enter the expression to calculate : `));
        if(expression.toLowerCase()!="back"){
            calculate(expression);
            if(!isNaN(calculate(expression) as number)){
                result = calculate(expression) as number;
                console.log(`Result : ${result}`);
            }else{
                let error : string = calculate(expression) as string;
                console.log(`${error}`);
            }
        }else{
            return result;
        };
    };
};

