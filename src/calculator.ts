import promptSync from "prompt-sync";
import {evaluate} from "mathjs"
import { printMessage, removeQuotes } from "./filter-expression";

export function takeInput(description : string):string{
    const prompt = promptSync();
    return prompt(description)
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
        let expression = removeQuotes(takeInput(`Enter the expression to calculate : `));
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