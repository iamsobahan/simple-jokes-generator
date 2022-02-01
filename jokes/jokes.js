/**
 * Title : getting Jokes
 * Descript: getting Jokes from another file
 * Author : Sobahan Al Tahsin
 * Date : 1/2/2022
 *
 */

// Dependencies
const fs = require('fs');

// module Scaffolding
const JokesApp = {};

JokesApp.allJokes = () => {
  const fileContent = fs.readFileSync(`${__dirname}/joke.txt`, 'utf-8');

  const jokeInArray = fileContent.split(/\r?\n/);
  return jokeInArray;
};

module.exports = JokesApp;
