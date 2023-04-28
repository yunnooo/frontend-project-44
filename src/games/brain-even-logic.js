#!/usr/bin/env node
import { gameEngine, generateGameRoundWithAnswerStr as generateRound } from '../index.js';

const task = 'Answer "yes" if number is even otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const generateEvenRound = () => generateRound(isEven);

export default () => gameEngine(task, generateEvenRound, 'str');
