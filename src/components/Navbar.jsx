import brandLogo from "/BrandLogo.svg";
import style from "./navbar.module.css"
import ButtonUI from "./ButtonUI";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import AutoCompleteUI from "./AutoCompleteUI";
const Navbar = ({handleClickOpen}) => {
  const navigate = useNavigate();
  return (
    <div className={style.navbarWrapper}>
      <div className={style.logoSection} onClick={() => navigate("/")}>
        <img src={brandLogo} alt="brandLogo" />
      </div>
      <AutoCompleteUI/>
      <div className={style.feedbackSection}>
        <ButtonUI
          className={style.feedbackBtn}
          buttonName={"Give Feedback"}
          handleClickOpen={handleClickOpen}
        />
      </div>
    </div>
  );
};
Navbar.propTypes = {
    handleClickOpen: PropTypes.func.isRequired,
};
export default Navbar;
