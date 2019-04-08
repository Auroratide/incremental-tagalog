import zaha, { is } from 'zaha';

export default zaha({
  id: is.string(),
  tagalog: is.string(),
  english: is.arrayOf(is.string()),
  definition: is.string(),
  part_of_speech: is.string(),
  set: is.arrayOf(is.int())
});