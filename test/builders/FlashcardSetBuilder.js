import zaha, { is } from 'zaha';

export default zaha({
  id: is.string(),
  name: is.string(),
  words: is.arrayOf(is.string())
});