import PropTypes from 'prop-types';
const IconButton = ({ image, text, handleClick, className }) => {
  return (
    <button
      className={className}
      onClick={handleClick}
    >
      <img src={image} alt="image" />
      <span>{text}</span>
    </button>
  );
};
IconButton.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
export default IconButton