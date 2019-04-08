export default class Query {
  constructor(words = []) {
    this.words = words;
  }

  word(word) {
    return this.words.find(w => w.id === word);
  }
}