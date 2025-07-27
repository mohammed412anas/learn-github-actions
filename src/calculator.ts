import promptSync from "prompt-sync";
import {evaluate} from "mathjs"
import { printMessage, removeQuotes } from "./filter-expression";

export function takeInput():string{
    const prompt = promptSync();
    return prompt(`Enter the expression to calculate : `)
}
export function calculate(expression:string):number|string|object{
    
    try{
        let result :number =evaluate(expression);
        console.log(`Result : ${result}`)
        return result; 
    }
    catch(err){
        console.log(`Invalid expression : ${(err as Error).message}`)
        return `Invalid expression : ${(err as Error).message}`;
    }
}

export function runApp():boolean{
    printMessage();
    while(true){
        let expression = removeQuotes(takeInput());
        if(expression.toLowerCase()!="exit"){
            calculate(expression);
        }else{
            return false;
        }
    }
}

if(require.main===module){
    runApp()
}