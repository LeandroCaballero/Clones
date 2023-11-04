import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import History from "../components/home/History"
import { useRef, useState } from "react"
import { Icon } from "@iconify/react/dist/iconify.js"

import profile from "../assets/perfil.jpg"
import liveVideoIcon from "../assets/icons/live-video.png"
import filesIcon from "../assets/icons/files.png"
import feelingIcon from "../assets/icons/feeling.png"
import { histories, posts } from "../utils/infotest"
import Post from "../components/home/Post"

const Home = () => {
  const swiperRef = useRef<SwiperRef>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlides = () => {
    if (swiperRef.current) {
      const newIndex = swiperRef.current?.swiper.activeIndex - 3
      swiperRef.current?.swiper.slideTo(newIndex)
      setCurrentIndex(newIndex)
    }
  }

  const nextSlides = () => {
    if (swiperRef.current) {
      const newIndex = swiperRef.current?.swiper.activeIndex + 3
      swiperRef.current?.swiper.slideTo(newIndex)
      setCurrentIndex(newIndex)
    }
  }

  return (
    <div className="text-white bg-[#18191A] flex flex-col items-center">
      <Swiper
        ref={swiperRef}
        spaceBetween={8}
        // slidesPerView={"auto"}
        allowTouchMove={false}
        slidesPerView={4}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-[80%] mt-6 relative h-[250px]"
      >
        <SwiperSlide>
          <div className="group/history relative rounded-xl h-full overflow-hidden">
            <div className="h-4/5 overflow-hidden">
              <img
                src={profile}
                alt=""
                className="h-full transition-all duration-200 ease-in-out group-hover/history:scale-[1.02]"
              />
            </div>

            <div className="h-1/5 bg-[#242526] flex flex-col items-center">
              <div className="bg-[#075CE5] rounded-full p-1 h-fit w-fit -translate-y-4 border-4 border-[#242526]">
                <Icon icon="ic:baseline-plus" className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold -mt-4">Crear historia</p>
            </div>
          </div>
        </SwiperSlide>
        {histories.map((history, index) => (
          <SwiperSlide key={index}>
            <History data={history} />
          </SwiperSlide>
        ))}

        <button
          onClick={prevSlides}
          className={`absolute bg-[#3E4042] rounded-full p-2 left-4 top-1/2 transition-all duration-200 ease-linear ${
            currentIndex != 0 ? "opacity-100 z-10" : "opacity-0"
          } -translate-y-1/2 hover:bg-[#525355]`}
        >
          <Icon icon="mingcute:left-line" className="w-7 h-7" />
        </button>
        <button
          onClick={nextSlides}
          className="absolute bg-[#3E4042] rounded-full p-2 right-4 top-1/2 -translate-y-1/2 z-10 transition-all duration-200 ease-linear hover:bg-[#525355]"
        >
          <Icon icon="mingcute:right-line" className="w-7 h-7" />
        </button>
      </Swiper>
      <div className="mt-5 w-2/3 bg-[#242526] rounded-lg px-4 py-3">
        <div className="flex gap-x-3">
          <img src={profile} className="rounded-full w-10" alt="" />
          <button className="w-full text-left rounded-full text-[#B0B3B8] bg-[#3A3B3C] hover:bg-[#4E4F50] py-1 px-2">
            ¿Qué estás pensando, Leandro?
          </button>
        </div>
        <hr className="border-[#3A3B3C] mt-3 mb-2" />
        <div className="flex">
          <button className="flex gap-x-2 rounded-md p-2 text-[#B0B3B8] font-semibold text-[15px] hover:bg-[#3A3B3C] transition-all duration-150 ease-in-out">
            <img src={liveVideoIcon} alt="" />
            <p>Video en vivo</p>
          </button>
          <button className="flex gap-x-2 rounded-md p-2 text-[#B0B3B8] font-semibold text-[15px] hover:bg-[#3A3B3C] transition-all duration-150 ease-in-out">
            <img src={filesIcon} alt="" />
            <p>Foto/video</p>
          </button>
          <button className="flex gap-x-2 rounded-md p-2 text-[#B0B3B8] font-semibold text-[15px] hover:bg-[#3A3B3C] transition-all duration-150 ease-in-out">
            <img src={feelingIcon} alt="" />
            <p>Sentimiento/Actividad</p>
          </button>
        </div>
      </div>
      {posts.map((post, index) => (
        <Post data={post} key={index} />
      ))}
    </div>
  )
}

export default Home
