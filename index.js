/**
 * Title : Simple Node Project
 * Description : random Jokes will Print in Terminal
 * Author : Sobahan Al Tahsin
 * Date : 1/2/2022
 */
// Dependencies
const jokeLibrary = require('./jokes/jokes.js');
const randomNumberLibrary = require('./randomNumber/randomNumGen');
const http = require('http');
//  app object - module Scaffolding
const app = {};

app.config = {
  timeBetweenJokes: 1000,
};

app.printJokes = () => {
  const allJokes = jokeLibrary.allJokes();
  const numberOfAllJokes = allJokes.length;
  const randomNumber = randomNumberLibrary.randomNumber(1, numberOfAllJokes);
  const selectedJokes = allJokes[randomNumber - 1];
  console.log(selectedJokes);
};

app.infiniteLoop = () => {
  setInterval(app.printJokes, app.config.timeBetweenJokes);
};

app.infiniteLoop();
