#!/usr/bin/env node
import { gameEngine } from '../index.js';

const task = 'What is the result of the expression?';

const brainCalcGame = () => {
  const signsOfCalculations = ['+', '-', '*'];
  const randMathSignIndex = Math.floor(Math.random() * 3);
  const mathSign = signsOfCalculations[randMathSignIndex];

  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);

  const expression = `${firstNumber} ${mathSign} ${secondNumber}`;

  let correctAnswer;

  if (mathSign === '+') {
    correctAnswer = firstNumber + secondNumber;
  } else if (mathSign === '-') {
    correctAnswer = firstNumber - secondNumber;
  } else {
    correctAnswer = firstNumber * secondNumber;
  }
  return [expression, correctAnswer];
};

export default () => gameEngine(task, brainCalcGame, 'num');
