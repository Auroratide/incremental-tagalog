/* eslint-disable no-console */
const path = require('path');
const build = require('./steps');

const PATH = path.join('content', 'words');
const PUBLIC_PATH = path.join('public', 'api', 'words');

const startTime = new Date().getTime();
console.log('Starting to build words...');

build(PATH, PUBLIC_PATH).then(() => {
  const endTime = new Date().getTime();
  const elapsedMilliseconds = endTime - startTime;
  console.log(`Successfully build words in ${elapsedMilliseconds / 1000} seconds!`);  
}).catch(error => {
  console.error('ERROR: Words could not be built.', error);
  process.exit(1);
});
