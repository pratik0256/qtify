import style from "./playlist.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import library from "/library.svg";
import shuffle from "/shuffle.png";
import album from "/album.png";
import IconButton from "../components/IconButton";
import SongsTable from "../components/SongsTable";
import { useNavigate } from "react-router-dom";
const PlayList = () => {
  const navigate = useNavigate();
  const handleShuffle = () => {};
  const handleAddToLibrary = () => {};
  return (
    <div>
      <div className={style.iconSection} onClick={()=>navigate("/")}>
        <KeyboardBackspaceIcon className={style.backIcon}/>
      </div>
      <div className={style.main}>
        <div className={style.albumImageSection}>
          <img src={album} alt="album image" />
        </div>
        <div className={style.detilsSectionWrapper}>

        <div className={style.details}>
          <h3 className={style.heading}>Best of Punjabi Bae in 2022</h3>
          <p className={style.subHeading}>Catch the most romantic punjabi tracks of 2022 #SpotifyWrapped</p>
          <span className={style.year}>2022</span>
          <ul className={style.songDetails}>
            <li>75 songs</li>
            <li>3 hr 45 min</li>
            <li>100 Follows</li>
          </ul>
        </div>
        <div className={style.buttons}>
          <IconButton
            image={shuffle}
            text={"Shuffle"}
            handleClick={handleAddToLibrary}
            className={style.shuffleBtn}
          />
          <IconButton
            image={library}
            text={"Add to library"}
            handleClick={handleShuffle}
            className={style.libraryBtn}
          />
        </div>
        </div>
      </div>
      <SongsTable/>
    </div>
  );
};

export default PlayList;
