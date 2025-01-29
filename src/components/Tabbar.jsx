import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import style from "./tabbar.module.css";
import CustomTabPanel from "./CustomTabPanel";
import getGenres from "../services/getGenres";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card from "./Card";
import getSongs from "../services/getSongs";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Tabbar = () => {
  const [value, setValue] = useState(0);
  const [genersList, setGenersList] = useState([]);
  const [songs, setSongs] = useState([]);
  const [jazzSongs, setJazzSongs] = useState([]);
  const [rockSongs, setRockSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [bluesSongs, setBluesSongs] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const getGenersData = async () => {
    const data = await getGenres();
    setGenersList(data?.data);
    const songsData = await getSongs();
    setSongs(songsData);
    setJazzSongs(songsData.filter((item) => item.genre.label === "Jazz"));
    setRockSongs(songsData.filter((item) => item.genre.label === "Rock"));
    setPopSongs(songsData.filter((item) => item.genre.label === "Pop"));
    setBluesSongs(songsData.filter((item) => item.genre.label === "Blues"));
  };
  useEffect(() => {
    getGenersData();
  }, []);
  return (
    <div className={style.tabWrapper}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: " #34c94b",
            },
          }}
        >
          <Tab label="All" {...a11yProps(0)} className={style.tabName} />
          {genersList?.map((item, index) => (
            <Tab
              key={item.key}
              label={item.label}
              {...a11yProps(index + 1)}
              className={style.tabName}
            />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={60} // 2rem gap
          slidesPerView={8}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
          style={{
            backgroundColor: "var(--secondary-color)",
            padding: "0 2rem",
          }}
        >
          {songs?.map((item) => (
            <SwiperSlide key={item.id}>
              <Card
                title={item.title}
                image={item.image}
                likes={`${item.likes} Likes`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={60} // 2rem gap
          slidesPerView={8}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
          style={{
            backgroundColor: "var(--secondary-color)",
            padding: "0 2rem",
          }}
        >
          {jazzSongs?.map((item) => (
            <SwiperSlide key={item.id}>
              <Card
                title={item.title}
                image={item.image}
                likes={`${item.likes} Likes`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={60} // 2rem gap
          slidesPerView={8}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
          style={{
            backgroundColor: "var(--secondary-color)",
            padding: "0 2rem",
          }}
        >
          {rockSongs?.map((item) => (
            <SwiperSlide key={item.id}>
              <Card
                title={item.title}
                image={item.image}
                likes={`${item.likes} Likes`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={60} // 2rem gap
          slidesPerView={8}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
          style={{
            backgroundColor: "var(--secondary-color)",
            padding: "0 2rem",
          }}
        >
          {popSongs?.map((item) => (
            <SwiperSlide key={item.id}>
              <Card
                title={item.title}
                image={item.image}
                likes={`${item.likes} Likes`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={60} // 2rem gap
          slidesPerView={8}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
          style={{
            backgroundColor: "var(--secondary-color)",
            padding: "0 2rem",
          }}
        >
          {bluesSongs?.map((item) => (
            <SwiperSlide key={item.id}>
              <Card
                title={item.title}
                image={item.image}
                likes={`${item.likes} Likes`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CustomTabPanel>
    </div>
  );
};

export default Tabbar;
