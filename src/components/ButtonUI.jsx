import PropTypes from 'prop-types';

const ButtonUI = ({ className, buttonName ,handleClickOpen}) => {
    return (
        <div>
            <button className={className} onClick={()=>handleClickOpen()}>{buttonName}</button>
        </div>
    );
}
ButtonUI.propTypes = {
    className: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired,
    handleClickOpen: PropTypes.func.isRequired,
};

export default ButtonUI;
