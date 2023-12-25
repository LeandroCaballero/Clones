import Avatar from "../../assets/perfil.jpg";
import { Icon } from "@iconify/react";

const Perfil = () => {
  return (
    <div className="overflow-y-scroll sticky h-[calc(100vh-110px)]">
      <div className="flex items-center justify-center py-6 relative">
        {/* Image */}
        <div className="relative rounded-full w-[200px] h-[200px] cursor-pointer overflow-hidden">
          <div className="absolute flex flex-col justify-center items-center gap-y-1 text-white bg-[#404A4F] opacity-0 transition-opacity hover:opacity-80 z-20 w-full h-full">
            <Icon icon="fluent:camera-16-filled" width={28} />
            <p className="w-1/2 text-xs text-center">CAMBIAR FOTO DE PERFIL</p>
          </div>
          <img src={Avatar} alt="" />
        </div>
      </div>

      {/* Name */}
      <div className="px-7 flex flex-col gap-y-5 mt-5">
        <p className="text-[#008069] text-sm">Tu nombre</p>
        <div className="flex justify-between text-[#e9edef]">
          <p>Leandro</p>
          <button>
            <Icon icon="ic:baseline-edit" width={22} color="#8696a0" />
          </button>
        </div>
        <p className="text-[#8696a0] text-sm">
          Este no es tu nombre de usuario o PIN. Este nombre será visible para
          tus contactos de WhatsApp.
        </p>
      </div>

      <div className="px-7 flex flex-col gap-y-5 mt-12">
        <p className="text-[#008069] text-sm">Info .</p>
        <div className="flex justify-between text-[#e9edef]">
          <p>Disponible</p>
          <button>
            <Icon icon="ic:baseline-edit" width={22} color="#8696a0" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
