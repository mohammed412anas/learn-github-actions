import { takeInput } from "./calculator";

export function manageOperendsAndOperations(oper:string,
    callBack:(a:number,b:number)=>number
):number{
    
    var index : number = 1;
    
    var input :string = takeInput(`Input ${index} to perform ${oper} : `);
    var initialResult : number = 0;
    performOperation()
    function performOperation(){
        if(!isNaN(Number(input))){
            let validatedResult : number|string = validateOprends(input,oper,index,initialResult);
            let value :number = validatedResult as number;

            if(oper === "square root" || oper === "factorial"){
                initialResult = callBack(value,initialResult);
                console.log(`Result of ${oper} of ${value} is : ${initialResult}`);
            }else if(initialResult === 0 && index ===1 ){
                initialResult  = setupInitialResult(oper, input);
                if(oper === "modulo"){ value += 1}
                else if (oper === "exponintial operation" ){value = 1}
                console.log(`Initial operand obtained to perform ${oper} is : `,
                `${initialResult = callBack(initialResult,value)}`);
            }else{
                console.log(`Result obtained by performing ${oper}`,
                    ` between ${initialResult} and ${value} is : `,
                    `${initialResult = callBack(initialResult,value)}`);
            };

            index++;
            input = takeInput(`Input ${index} to perform ${oper} : `);
            return performOperation();
        }else if(input.toLowerCase() === "back"){
            return initialResult;
        }else{
            input = takeInput(`Input ${index} to perform ${oper} : `);
            return performOperation();
        }
    }
    return initialResult;
}
export function validateOprends(input:string,oper?:string,index ?: number,initialResult?:number):number|string{
    if(isNaN(Number(input)) || input.length === 0){
        if(input.toLowerCase() === "back"){
            console.log(`Result obtained by performing ${oper} : ${initialResult}`);
            return ("back")
        }
        return validateOprends(takeInput(`Input ${index} to perform ${oper} : `),oper,index,initialResult);
    }
    else {
        return Number(input);
    };
};

export function setupInitialResult(oper:string, firstValue:string):number{
    switch(oper){
        case "multiplication" :
            return 1;
        case "division":
            return ((validateOprends(firstValue)as number) ** 2);
        case "modulo":
            return ((validateOprends(firstValue)as number));
        case "exponintial operation":
            return (validateOprends(firstValue)as number);
        default:
            return 0;
    };
};
