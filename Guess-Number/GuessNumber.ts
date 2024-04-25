#! /usr/bin/env node  
import inquirer from 'inquirer'
import chalk  from 'chalk';

//1. computer generate random number    
//2. user input for guessing number    
//3. compare user input and computer generated number and show result 
const randomNumber :number = Math.floor(Math.random()*6+1);
console.log(chalk.bgCyan.bold("\n WELCOME TO NUMBER GUESSING GAME"))
const answer = await inquirer.prompt([

{name: 'GuessedNumber',
type: 'number',
message: chalk.blue("Kindly, guess any number between 1-7 ?")
   }
  ]
);

if(answer.GuessedNumber===randomNumber){
    console.log(chalk.green("Congratulations you guessed the right number"))
}else {
    console.log(chalk.redBright("Oops! you guess the wrong number"))
}