import { useEffect, useState } from "react";
import style from "./songsTable.module.css";
import songImg from "/songImg.png";
import getSongs from "../services/getSongs";

const SongsTable = () => {
  const [songsList, setSongsList] = useState([]);
  const getSongsList = async () => {
    const songsData = await getSongs();
    setSongsList(songsData)
  };
  useEffect(() => {
    getSongsList();
  }, []);
  return (
    <table className={style.tableWrapper}>
      <tr>
        <th>Title</th>
        <th>Artist</th>
        <th>Duration</th>
      </tr>
      {songsList.map((item)=>{
        return (
          <tr key={item.id}>
            <td>
              <div className={style.songWrapper}>
                <img src={songImg} className={style.songImg} alt="songImg" />
                <p>{item.title}</p>
              </div>
            </td>
            <td>{item.artists}</td>
            <td>{parseInt(item.durationInMs/60)}</td>
          </tr>
        );
      })}
     
    </table>
  );
};

export default SongsTable;
