#! /usr/bin/env node

//Number guessing game using typescript language...

import inquirer from "inquirer";
console.log("\n\t>>> CLI Number Guessing Game <---> Created By \'MALIK SHAHMEER\' <<<\n");

let GuessNumber: number = Math.floor(Math.random() * 9 + 1)

while(true){
    let input = await inquirer.prompt
    ({name: "guessNum", type: "number", message:"What's your guess number? (Between 1 to 9)"})
    
let result: number = input.guessNum
if (GuessNumber===result)
{console.log("Wow !  You guess correct number")
break;}
else{console.log("Please try again")}
}