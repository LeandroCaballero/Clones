import { Swiper, SwiperRef, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import History from "../components/home/History"
import { useRef, useState } from "react"
import { Icon } from "@iconify/react/dist/iconify.js"
import clarin from "../assets/imagesHistory/clarin.jpg"
import infobae from "../assets/imagesHistory/infobae.jpg"
import todonoticias from "../assets/imagesHistory/todonoticias.jpg"
import clarinLogo from "../assets/imagesHistory/clarin-logo.jpg"
import infobaeLogo from "../assets/imagesHistory/infobae-logo.jpg"
import fulanoLogo from "../assets/imagesHistory/valdes-logo.jpg"
import profile from "../assets/perfil.jpg"

const Home = () => {
  const swiperRef = useRef<SwiperRef>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [
    { name: "Clarin", image: clarin, logo: clarinLogo },
    { name: "Infobae", image: infobae, logo: infobaeLogo },
    { name: "Fulano", image: todonoticias, logo: fulanoLogo },
    { name: "Clarin", image: clarin, logo: clarinLogo },
    { name: "Infobae", image: infobae, logo: infobaeLogo },
    { name: "Fulano", image: todonoticias, logo: fulanoLogo },
    { name: "Clarin", image: clarin, logo: clarinLogo },
    { name: "Infobae", image: infobae, logo: infobaeLogo },
    { name: "Fulano", image: todonoticias, logo: fulanoLogo },
  ]

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
    <div className="border text-white bg-[#18191A] flex justify-center">
      <Swiper
        ref={swiperRef}
        spaceBetween={5}
        // slidesPerView={"auto"}
        allowTouchMove={false}
        slidesPerView={4}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        // modules={[Navigation]}
        className="w-[82%] mt-6 relative"
      >
        <SwiperSlide>
          <div className="group/history relative rounded-xl h-full overflow-hidden ">
            <img
              src={profile}
              alt=""
              className="h-3/4 transition-all duration-200 ease-in-out group-hover/history:scale-[1.02]"
            />
            <div className="h-1/4 bg-[#242526] flex flex-col items-center">
              <div className="bg-[#075CE5] rounded-full p-1 h-fit w-fit -translate-y-4 border-4 border-[#242526]">
                <Icon icon="ic:baseline-plus" className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold -mt-1">Crear historia</p>
            </div>
          </div>
        </SwiperSlide>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <History data={slide} />
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
          className="absolute bg-[#3E4042] rounded-full p-2 right-4 top-1/2 -translate-y-1/2 right-0 z-10 transition-all duration-200 ease-linear hover:bg-[#525355]"
        >
          <Icon icon="mingcute:right-line" className="w-7 h-7" />
        </button>
      </Swiper>
    </div>
  )
}

export default Home
