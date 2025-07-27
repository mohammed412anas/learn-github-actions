import promptSync from "prompt-sync";

export function takeInput():string{
    const prompt = promptSync();
    console.log(`Welcome to simple calculator app`)
    return prompt(`Enter the expression to calculate : `)
}
