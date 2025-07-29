import { takeInput } from "./calculator";


export function validateOprends(input:string,oper:string,index : number,initialSum:number):number|string{
    if(isNaN(Number(input))){
        if(input.toLowerCase() === "exit"){
            console.log(`Result obtained by performing ${oper} : ${initialSum}`);
            return ("exit")
        }
        return validateOprends(takeInput(`Input ${index} to perform ${oper} : `),oper,index,initialSum);
    }
    else {
        return Number(input);
    }
}
