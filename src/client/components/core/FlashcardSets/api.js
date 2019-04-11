import axios from 'axios';

const map = raw => ( {
  id: raw.id,
  name: raw.name,
  words: raw.words
} );

export const get = () => axios.get('/api/flashcard-sets/index.json')
  .then(res => res.data)
  .then(data => data.flashcard_sets.map(map));