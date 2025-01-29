import playbtn from "/playbtn.png";
import playMusic from "/playMusic.png";
import songImg from "/songImg.png";
import style from "./player.module.css";
import { useState } from "react";
const Player = () => {
  const [isMusicPlay, setIsMusicPlay] = useState(false);

  return (
    <div className={style.playerWrapper}>
      <div className={style.songImgSection}>
        <img src={songImg} alt="songImg" />
        <div className={style.songDetails}>
          <p className={style.songName}>Song name</p>
          <span className={style.albumName}>Album name</span>
        </div>
      </div>
      <div className={style.playSection}>
        <div className={style.playBtnWrapper}>
          <img
            onClick={()=>setIsMusicPlay((prev) => !prev)}
            className={style.plyBtn}
            src={isMusicPlay?playMusic:playbtn}
            alt="playbtn"
          />
        </div>
        <div className={style.songTime}>
          <span className={style.startTime}>0.38</span>
          <div className={style.songWrapper}>
            <span className={style.startingTime}></span>
            <span className={style.remainingTime}></span>
          </div>
          <span className={style.endTime}>3.38</span>
        </div>
      </div>
    </div>
  );
};

export default Player;
