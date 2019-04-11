export default class Query {
  constructor(sets = []) {
    this.sets = sets;
  }

  set(id) {
    return this.sets.find(s => s.id === id);
  }

  all() {
    return this.sets;
  }
}