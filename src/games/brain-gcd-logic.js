#!/usr/bin/env node
import { gameEngine, randomNum } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const brainGCD = () => {
  const randomNumber1 = randomNum(100);
  const randomNumber2 = randomNum(100);

  const minNumber = randomNumber1 > randomNumber2 ? randomNumber2 : randomNumber1;
  let gcd = 1;

  for (let i = 2; i <= minNumber; i += 1) {
    if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
      gcd = i;
    }
  }

  const expression = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = gcd;
  return [expression, correctAnswer];
};
export default () => gameEngine(task, brainGCD, 'num');
