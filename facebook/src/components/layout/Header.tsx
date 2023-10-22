import Logo from "../../assets/logo.png"
import { Icon } from "@iconify/react"
import Perfil from "../../assets/perfil.jpg"

const Header = () => {
  return (
    <div className="grid grid-cols-11 bg-[#242526] py-1 sticky top-0">
      <div className="col-span-3 flex py-1 px-4 gap-x-2">
        <img src={Logo} alt="" className="w-10" />
        <input
          type="text"
          placeholder="Buscar en Facebook"
          className="bg-[#3A3B3C] rounded-full pl-8 w-[70%]"
        />
      </div>
      <div className="col-span-5  flex gap-x-3 w-[96%]">
        <button className="w-1/5  flex items-center justify-center rounded-lg transition-colors duration-150 ease-in-out hover:bg-[#4E4F50]">
          <Icon icon="ph:house-fill" className="w-7 h-7 text-[#B8BBBF]" />
        </button>
        <button className="w-1/5  flex items-center justify-center rounded-lg transition-colors duration-150 ease-in-out hover:bg-[#3A3B3C]">
          <Icon icon="ph:video-bold" className="w-7 h-7 text-[#B8BBBF]" />
        </button>
        <button className="w-1/5  flex items-center justify-center rounded-lg transition-colors duration-150 ease-in-out hover:bg-[#3A3B3C]">
          <Icon
            icon="mdi:marketplace-outline"
            className="w-7 h-7 text-[#B8BBBF]"
          />

          {/* <img src={Marketplace} alt="" className="text-[#B8BBBF]" /> */}
        </button>
        <button className="w-1/5  flex items-center justify-center rounded-lg transition-colors duration-150 ease-in-out hover:bg-[#3A3B3C]">
          <Icon icon="ri:group-2-line" className="w-7 h-7 text-[#B8BBBF]" />
        </button>
        <button className="w-1/5  flex items-center justify-center rounded-lg transition-colors duration-150 ease-in-out hover:bg-[#3A3B3C]">
          <Icon
            icon="mingcute:game-1-line"
            className="w-7 h-7 text-[#B8BBBF]"
          />
        </button>
      </div>
      <div className="col-span-3  flex justify-end items-center gap-x-2 px-4">
        <button className="w-10 h-10 rounded-full bg-[#3A3B3C] flex items-center justify-center transition-colors duration-150 ease-in-out hover:bg-[#4E4F50]">
          <Icon icon="gg:menu-grid-o" className="w-7 h-7 text-white" />
        </button>
        <button className="w-10 h-10 rounded-full bg-[#3A3B3C] flex items-center justify-center transition-colors duration-150 ease-in-out hover:bg-[#4E4F50]">
          <Icon icon="jam:messenger" className="w-6 h-6 text-white" />
        </button>
        <button className="w-10 h-10 rounded-full bg-[#3A3B3C] flex items-center justify-center transition-colors duration-150 ease-in-out hover:bg-[#4E4F50]">
          <Icon icon="tabler:bell-filled" className="w-6 h-6 text-white" />
        </button>
        <button className="w-10 h-10">
          <img src={Perfil} alt="" className="rounded-full" />
        </button>
      </div>
    </div>
  )
}

export default Header
