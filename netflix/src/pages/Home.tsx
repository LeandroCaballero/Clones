import { Icon } from "@iconify/react/dist/iconify.js";
import MainLoyout from "../layouts/Main";
import PeliPortada from "../assets/peli.webp";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <MainLoyout>
      <div className="h-screen relative">
        <video
          className="w-full h-full object-fill
      "
          muted
          autoPlay
          loop
        >
          <source
            src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta el elemento de video.
        </video>
        <div
          className="w-full h-screen absolute top-0 bg-gradient-to-b from-transparent via-transparent to-[#141414]"
          // [calc(100vh+5%)]
        ></div>

        <div className="flex flex-col gap-y-5 absolute top-[23%] left-[4%] text-white">
          <img src={PeliPortada} alt="" className="w-[485px]" />
          <p
            className="w-2/5 font-normal leading-tight "
            style={{ textShadow: "1px 1px 5px black" }}
          >
            Con la imponente grandeza de las Tierras Altas de Escocia, la
            rebelión y el romance enardecen cuando un guerrero medieval lidera a
            su pueblo en la lucha por la libertad.
          </p>
          <div className="flex gap-x-2">
            <button className="py-[2px] pl-4 pr-6 transition-colors duration-100 ease-linear hover:bg-[#C8CDCF] bg-white text-black flex items-center h-fit rounded">
              <Icon icon="mdi:play" width={35} />
              <p className="font-medium">Reproducir</p>
            </button>
            <button className="py-[5px] pl-4 pr-5 transition-colors duration-100 ease-linear hover:bg-[#465457] bg-[#5B6264] flex items-center h-fit rounded gap-x-2">
              <Icon icon="material-symbols:info-outline" width={29} />
              <p className="font-medium">Más información</p>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#141414]">
        <Slider />
      </div>
    </MainLoyout>
  );
};

export default Home;
