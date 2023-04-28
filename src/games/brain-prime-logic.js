#!/usr/bin/env node
import { gameEngine, generateGameRoundWithAnswerStr as generateRound } from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  let divisorsCount = 0;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      divisorsCount += 1;
    }
  }

  if (divisorsCount > 0) return false;
  return true;
};

const generatePrimeRound = () => generateRound(isPrime);

export default () => gameEngine(task, generatePrimeRound, 'str');
