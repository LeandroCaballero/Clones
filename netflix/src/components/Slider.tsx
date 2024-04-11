import { Swiper, SwiperSlide } from "swiper/react";
import { series } from "../utils/info";
// Import Swiper styles
import "swiper/css";

interface Props {
  content: {};
}

const Slider = ({}) => {
  return (
    <div className="-translate-y-20 text-white pl-[4%]">
      <p className="mb-2">Series</p>
      <Swiper className="" slidesPerView={5.2} spaceBetween={5}>
        {series.map((slide, index) => (
          <SwiperSlide
            className=" h-[140px] rounded overflow-hidden"
            key={index}
          >
            <img src={`/series/${slide.miniature}`} alt="" className="h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
