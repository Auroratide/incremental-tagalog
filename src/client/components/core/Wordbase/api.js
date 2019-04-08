import axios from 'axios';

const map = raw => ( {
  id: raw.id,
  tagalog: raw.tagalog,
  english: raw.english,
  definition: raw.definition,
  partOfSpeech: raw.part_of_speech,
  set: raw.set
} );

export const get = () => axios.get('/api/words/index.json')
  .then(res => res.data)
  .then(data => data.words.map(map));