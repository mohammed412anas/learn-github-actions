import { takeInput } from "./calculator";

export function manageOperendsAndOperations(oper:string,
    callBack:(a:number,b:number)=>number
):number{
    
    var index : number = 1;
    
    let input :string = takeInput(`Input ${index} to perform ${oper} : `);
    var initialResult : number = setupInitialResult(oper);
    performOperation()
    function performOperation(){
        if(!isNaN(Number(input))){
            let validatedResult : number|string = validateOprends(input,oper,index,initialResult);
            let value :number = validatedResult as number;
            console.log(`Result obtained by performing ${oper}`,
                ` between ${initialResult} and ${value} is : `,
                `${initialResult = callBack(initialResult,value)}`);
            index++;
            input = takeInput(`Input ${index} to perform ${oper} : `);
            return performOperation()
        }else if(input.toLowerCase() === "exit"){
            return initialResult;
        }else{
            input = takeInput(`Input ${index} to perform ${oper} : `);
            return performOperation();
        }
    }
    return initialResult;
}
export function validateOprends(input:string,oper:string,index : number,initialResult:number):number|string{
    if(isNaN(Number(input)) || input.length === 0){
        if(input.toLowerCase() === "exit"){
            console.log(`Result obtained by performing ${oper} : ${initialResult}`);
            return ("exit")
        }
        return validateOprends(takeInput(`Input ${index} to perform ${oper} : `),oper,index,initialResult);
    }
    else {
        return Number(input);
    };
};

export function setupInitialResult(oper:string):number{
    switch(oper){
        case "multiplication" :
            return 1;
        default:
            return 0;
    };
};
