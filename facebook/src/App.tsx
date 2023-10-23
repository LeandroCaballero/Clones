import MainLayout from "./layouts/MainLayout"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper/modules"
import History from "./components/home/History"

function App() {
  return (
    <MainLayout>
      <div className="border text-white bg-[#18191A] flex justify-center h-72">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="w-[82%] mt-6"
        >
          <SwiperSlide>
            <History />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </MainLayout>
  )
}

export default App
