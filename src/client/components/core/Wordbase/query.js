export default class Query {
  constructor(words = []) {
    this.words = words;
  }

  word(word) {
    return this.words.find(w => w.id === word);
  }

  startingWith(letter) {
    return new Query(this.words.filter(word => word.id[0] === letter));
  }

  all() {
    return this.words;
  }
}