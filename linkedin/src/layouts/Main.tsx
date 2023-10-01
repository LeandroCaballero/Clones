import { ReactNode } from "react"
import Logo from "../assets/logo.png"
import Avatar from "../assets/perfil.jpg"
import { Icon } from "@iconify/react"

type Props = {
  children: ReactNode
}

const MainLoyout = ({ children }: Props) => {
  return (
    <>
      <nav className="bg-[#1B1F23] py-2 flex justify-center">
        {/* <div className="text-white flex flex-row justify-between items-center w-10/12"> */}
        <div className="text-white grid grid-cols-11 items-center w-10/12">
          <div className="col-span-4 flex flex-row items-center gap-x-2">
            <img
              src={Logo}
              alt=""
              className="bg-white rounded-sm p-1 w-8 h-8"
            />
            <div className="flex flex-row items-center rounded-md relative w-full">
              {/* <div className="absolute"> */}
              <Icon
                icon="ic:baseline-search"
                rotate={3}
                hFlip={true}
                className="absolute ml-3"
              />
              {/* </div> */}
              <input
                type="text"
                placeholder="Buscar..."
                className="h-8 pl-8 w-3/4 rounded-md transition-all duration-150 focus:pl-10 ease-in focus:w-full bg-[#38434F] text-white"
              />
            </div>
          </div>
          <ul className="col-span-5 w-[97%] border-r flex flex-row justify-center items-center gap-x-6 text-sm h-fit">
            <li className="flex flex-col items-center">
              <Icon icon="ion:home-sharp" className="w-5 h-5" />
              <a href="#inicio">Inicio</a>
            </li>
            <li className="flex flex-col items-center">
              <Icon icon="bi:people-fill" className="w-5 h-5" />
              <a href="#inicio">Mi red</a>
            </li>
            <li className="flex flex-col items-center">
              <Icon icon="pajamas:work" className="w-5 h-5" />
              <a href="#inicio">Empleos</a>
            </li>
            <li className="flex flex-col items-center">
              <Icon
                icon="streamline:mail-chat-bubble-typing-oval-messages-message-bubble-typing-chat"
                className="w-5 h-5"
              />
              <a href="#inicio">Mensajes</a>
            </li>
            <li className="flex flex-col items-center">
              <Icon icon="material-symbols:notifications" className="w-5 h-5" />
              <a href="#inicio">Notificaciones</a>
            </li>
            {/* Avatar */}
            <li>
              <img src={Avatar} alt="" className="w-5 h-5 rounded-full" />
              <div className="flex items-center">
                <p>Yo</p>
                <Icon icon="raphael:arrowdown" hFlip={true} />
              </div>
            </li>
          </ul>
          <ul className="col-span-2 flex flex-row items-center text-sm">
            <li className="flex flex-col items-center">
              <Icon
                className="w-5 h-5"
                icon="fluent:table-32-filled"
                hFlip={true}
              />
              <div className="flex items-center">
                <p className="text-[10px]">Para negocios</p>
                <Icon icon="raphael:arrowdown" hFlip={true} />
              </div>
            </li>
            <a
              href=""
              className="w-32 text-center text-xs text-[#EB9535] underline"
            >
              Consigue que te contraten más rápido. Prueba Premium gratis.
            </a>
          </ul>
          <div className="border-l border-[#373A3D] h-full w-[1px]"></div>
        </div>
      </nav>
      <div className="w-full h-screen bg-black py-3">{children}</div>
    </>
  )
}

export default MainLoyout
