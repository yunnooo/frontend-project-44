#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const randomNumb = Math.round(Math.random() * 100);
    const question = `Question: ${randomNumb}`;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');

    if ((randomNumb % 2 === 0 && answer === 'yes') || (randomNumb % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      i += 1;
    } else if (randomNumb % 2 === 0 && answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      return console.log(`Let's try again, ${name}!`);
    } else if (randomNumb % 2 !== 0 && answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      return console.log(`Let's try again, ${name}!`);
    } else {
      return console.log("You can type only 'yes' or 'no'. Please let's try again!");
    }

    if (i === 3) {
      return console.log(`Congratulations, ${name}!`);
    }
  }
  return null;
};
