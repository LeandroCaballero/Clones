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
      <nav className="bg-[#1B1F23] py-3 flex justify-center">
        {/* <div className="text-white flex flex-row justify-between items-center w-10/12"> */}
        <div className="text-white grid grid-cols-12 w-10/12 border">
          <div className="col-span-4 flex flex-row items-center gap-x-2">
            <img
              src={Logo}
              alt=""
              className="bg-white rounded-md p-1 w-10 h-10"
            />
            <div className="flex flex-row w-fit items-center bg-[#38434F] rounded-md">
              <div className="p-2">
                <Icon
                  icon="ic:baseline-search"
                  rotate={3}
                  hFlip={true}
                  className=""
                />
              </div>
              <input
                type="text"
                placeholder="Buscar..."
                className="h-full border w-full rounded-md transition-all duration-150 focus:outline-none ease-in focus:w-full bg-[#38434F] text-white"
              />
            </div>
          </div>
          <ul className="col-span-6 border flex flex-row justify-end items-center gap-x-6 text-sm">
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
          <ul className="col-span-2 border flex flex-row items-center text-sm">
            <li className="flex flex-col items-center">
              <Icon icon="fluent:table-32-filled" hFlip={true} />
              <div className="flex items-center">
                <p className="text-[11px]">Para negocios</p>
                <Icon icon="raphael:arrowdown" hFlip={true} />
              </div>
            </li>
            <a href="" className="w-32 text-center text-xs">
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
