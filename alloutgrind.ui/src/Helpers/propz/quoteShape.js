import PropTypes from 'prop-types';

const QuoteShapes = PropTypes.shape({
    id: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    songName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired
});

export default { QuoteShapes };