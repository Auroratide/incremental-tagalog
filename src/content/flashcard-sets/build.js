/* eslint-disable no-console */
const path = require('path');
const build = require('./steps');

const PATH = path.join('content', 'flashcard-sets');
const PUBLIC_PATH = path.join('public', 'api', 'flashcard-sets');

const startTime = new Date().getTime();
console.log('Starting to build flashcard sets...');

build(PATH, PUBLIC_PATH).then(() => {
  const endTime = new Date().getTime();
  const elapsedMilliseconds = endTime - startTime;
  console.log(`Successfully build flashcard sets in ${elapsedMilliseconds / 1000} seconds!`);  
}).catch(error => {
  console.error('ERROR: Flashcard sets could not be built.', error);
  process.exit(1);
});
