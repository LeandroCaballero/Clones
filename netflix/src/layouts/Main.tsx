import { ReactNode, useEffect, useState } from "react";
import { Icon } from "@iconify/react";

type Props = {
  children: ReactNode;
};

const MainLoyout = ({ children }: Props) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScroll(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`grid grid-cols-11 px-14 h-[68px] fixed items-center justify-center transition-all duration-300 ease-linear ${
          scroll
            ? "bg-gradient-to-b from-[#060606] to-[#141414]"
            : "bg-gradient-to-b from-[#060606] to-transparent"
        } w-full text-white`}
      >
        <img src="/logo.png" alt="" className="col-span-1 w-10/12" />
        <div className="col-span-8 flex gap-x-5 text-sm px-5">
          <p>Inicio</p>
          <p>Series</p>
          <p>Peliculas</p>
          <p>Novedades populares</p>
          <p>Mi lista</p>
          <p>Explora por idiomas</p>
        </div>
        <div className="col-span-2 h-full flex items-center gap-x-5 justify-end">
          <Icon icon="iconamoon:search" width={25} />
          <p>Niños</p>
          <Icon icon="bi:bell" width={25} />
          <div className="flex gap-x-1 items-center">
            <img src="/accounts/2.png" alt="" className="w-8 h-8 rounded-md" />
            <Icon icon="mdi:arrow-down-drop" width={25} />
          </div>
        </div>
      </header>
      {children}
      {/* <div>footer</div> */}
    </>
  );
};

export default MainLoyout;
