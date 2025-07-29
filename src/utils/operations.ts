
export class Operations {
    addition(a: number, b: number): number {
        return a + b;
    };

    substraction(a: number, b: number): number {
        if(a === 0){
            return b-a;
        };
        return a - b;
    };

    multiplication(a: number, b: number): number {
        return a * b;
    };
};
