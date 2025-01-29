import Tabbar from "./Tabbar";
import style from "./songs.module.css";

const Songs = () => {
  return (
    <div className={style.tabWrapper}>
      <h4 className={style.heading}>Songs</h4>
      <Tabbar />
    </div>
  );
};

export default Songs;
