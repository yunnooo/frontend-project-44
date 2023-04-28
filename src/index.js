import readlineSync from 'readline-sync';
import greetings from './cli.js';

export const randomNum = (range) => Math.floor(Math.random() * range);

const begin = (task) => {
  const name = greetings();
  console.log(task);
  return name;
};

const endGame = (countOfCorrectAnswers, name) => {
  if (countOfCorrectAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export const generateGameRoundWithAnswerStr = (func) => {
  const expression = randomNum(100);
  const answer = func(expression) ? 'yes' : 'no';
  return [expression, answer];
};

const gameWithAnswerNum = (expression, answer) => {
  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (Number(userAnswer) === answer) {
    console.log('Correct!');
    return true;
  }
  if (Number.isNaN(userAnswer) || userAnswer === '') {
    console.log('Sorry, only number are allowed :(.');
    return false;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

const gameWithAnswerStr = (expression, answer) => {
  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const possibleAnswers = ['yes', 'no'];
  if (userAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  if (!possibleAnswers.includes(userAnswer)) {
    console.log('Sorry only "yes" and "no" answers are allowed ;(.');
    return false;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

export const gameEngine = (rules, generateRound, typeOfAnswer) => {
  const name = begin(rules);
  let countOfCorrectAnswers = 0;

  for (let gamesCount = 1; gamesCount <= 3; gamesCount += 1) {
    const [question, answer] = generateRound();

    if (typeOfAnswer === 'str') {
      if (gameWithAnswerStr(question, answer)) {
        countOfCorrectAnswers += 1;
      } else break;
    }

    if (typeOfAnswer === 'num') {
      if (gameWithAnswerNum(question, answer)) {
        countOfCorrectAnswers += 1;
      } else break;
    }
  }
  endGame(countOfCorrectAnswers, name);
};
