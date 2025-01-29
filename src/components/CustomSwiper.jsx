import Card from './Card';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import PropTypes from 'prop-types';
const CustomSwiper = ({data}) => {
    console.log(data, "data");
    
  return (
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
      {data?.map((item) => (
        <SwiperSlide key={item.id}>
          <Card title={item.title} image={item.image} follows={item.follows} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
CustomSwiper.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      follows: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default CustomSwiper