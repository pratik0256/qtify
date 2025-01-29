import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import getSongs from "../services/getSongs";
import style from "./autoComplete.module.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const AutoCompleteUI = () => {
  const navigate = useNavigate();
  const [songsList, setSongsList] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const getSongsList = async () => {
    const songsData = await getSongs();
    setSongsList(songsData);
  };
  useEffect(() => {
    getSongsList();
  }, []);
  useEffect(() => {
    if (selectedSong != null) {
      navigate("/songs");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSong]);

  return (
    <Autocomplete
      value={selectedSong}
      onChange={(event, newValue) => {
        setSelectedSong(newValue);
        console.log("Selected song:", newValue); // To see the selected value
      }}
      sx={{
        width: 550,
        backgroundColor: "#fff",
        color: "#121212",
        borderColor: "#121212",
      }}
      options={songsList}
      getOptionLabel={(option) => option.title}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={key}
            component="li"
            sx={{
              "& > img": {
                mr: 2,
                flexShrink: 0,
                backgroundColor: "#000",
              },
            }}
            {...optionProps}
          >
            <div className={style.searchWrapper}>
              <div className={style.wrapper}>
                <img
                  className={style.img}
                  loading="lazy"
                  srcSet={option.image}
                  src={option.image}
                  alt="album image"
                />
              </div>
              <div className="">
                <h5>{option.title}</h5>
                <span>{option.artists}</span>
              </div>
              <div className={style.follows}>
                <p>{option.likes} Follows</p>
              </div>
            </div>
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search a album of your choice"
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: "new-password",
            },
          }}
        />
      )}
    />
  );
};
AutoCompleteUI.propTypes = {
  key: PropTypes.string.isRequired,
};
export default AutoCompleteUI;
