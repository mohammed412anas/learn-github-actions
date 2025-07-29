import { takeInput } from "./calculator";

export function manageOperendsAndOperations(oper:string,
    callBack:(a:number,b:number)=>number
):number{
    
    var index : number = 1;
    var initialSum : number = 0;
    let input :string = takeInput(`Input ${index} to perform ${oper} : `);
    performOperation()
    function performOperation(){
        if(!isNaN(Number(input))){
            let validatedResult : number|string = validateOprends(input,oper,index,initialSum);
            let value :number = validatedResult as number;
            console.log(`Result obtained by performing ${oper}`,
                ` between ${initialSum} and ${value} : `,
                `${initialSum = callBack(initialSum,value)}`);
            index++;
            input = takeInput(`Input ${index} to perform ${oper} : `);
            return performOperation()
        }else if(input.toLowerCase() === "exit"){
            return initialSum;
        }else{
            input = takeInput(`Input ${index} to perform ${oper} : `);
            return performOperation();
        }
    }
    return initialSum;
}
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
