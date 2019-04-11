#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const { exec } = require('child_process');
const program = require('commander');

let word = null;

program
  .version('0.1.0')
  .arguments('<slug>')
  .action(s => word = s)
  .parse(process.argv);

if(!word) {
  console.error('ERROR: Word is required');
  process.exit(1);
}

const ENCODING = { encoding: 'utf-8' };
const TEMPLATE_PATH = path.join(__dirname, 'templates', 'meta.json');
const WORD_PATH = path.join('content', 'words', word);

if(fs.existsSync(WORD_PATH)) {
  console.error('ERROR: Word with this name already exists');
  process.exit(1);
}

const wordTemplate = fs.readFileSync(TEMPLATE_PATH, ENCODING);

const replaceNames = content => content
  .replace(/\$ID\$/g, word);

const wordContent = replaceNames(wordTemplate);

mkdirp.sync(WORD_PATH);
fs.writeFileSync(path.join(WORD_PATH, 'meta.json'), wordContent);

if(!fs.existsSync(WORD_PATH)) {
  console.error('ERROR: Word failed to save');
  process.exit(1);
}

console.log(`Word ${word} created successfully!`);

exec(`open ${WORD_PATH}/meta.json`);