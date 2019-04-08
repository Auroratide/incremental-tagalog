import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.string,
  tagalog: PropTypes.string,
  english: PropTypes.arrayOf(PropTypes.string),
  definition: PropTypes.string,
  partOfSpeech: PropTypes.string,
  set: PropTypes.arrayOf(PropTypes.number)
});