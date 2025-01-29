import { useEffect, useState } from "react";
import style from "./topAlbum.module.css";
import Card from "./Card";
import getNewAlbum from "../services/getNewAlbum";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";
const NewAlbums = () => {
  const [albumList, setAlbumList] = useState([]);
  const [isCollapse, setIsCollapse] = useState(false);

  const fetchAlbum = async () => {
    const result = await getNewAlbum();
    setAlbumList(result.data);
  };
  useEffect(() => {
    fetchAlbum();
  }, []);
  return (
    <div className={style.albumWrapper}>
      <div className={style.header}>
        <div className={style.subHeadingWrapper}>
          <h4 className={style.heading}>New Albums</h4>
          <span
            className={style.showAll}
            onClick={() => setIsCollapse((prev) => !prev)}
          >
            Show all
          </span>
        </div>
      </div>
      {!isCollapse ? (
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
          {albumList?.map((item) => (
            <SwiperSlide key={item.id}>
              <Card
                title={item.title}
                image={item.image}
                likes={`${item.follows} Follows`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={style.cardWrapper}>
          {albumList?.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                image={item.image}
                likes={`${item.follows} Follows`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NewAlbums;
