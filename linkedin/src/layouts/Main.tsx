import { useState } from "react"
import Logo from "../assets/logo.png"
import Avatar from "../assets/perfil.jpg"
import { Icon } from "@iconify/react"
import { Link, Outlet } from "react-router-dom"

const MainLoyout = () => {
  const [visibility, setVisibility] = useState(false)

  // useEffect(() => {
  //   const handleVisibilityChange = () => {
  //     if (document.hidden) {
  //       // El usuario cambió a otra pestaña o minimizó la ventana
  //       console.log("El usuario cambió de pestaña o minimizó la ventana.")
  //       // Realiza acciones cuando la pestaña se vuelve invisible
  //     } else {
  //       // El usuario volvió a la pestaña actual
  //       console.log("El usuario volvió a la pestaña actual.")
  //       // Realiza acciones cuando la pestaña se vuelve visible
  //     }
  //   }

  //   document.addEventListener("visibilitychange", handleVisibilityChange)

  //   return () => {
  //     document.removeEventListener("visibilitychange", handleVisibilityChange)
  //   }
  // }, [])

  return (
    <>
      {/* Header */}
      <nav className="bg-[#1B1F23] py-2 flex justify-center">
        <div className="text-white grid grid-cols-11 items-center w-10/12">
          <div className="col-span-4 flex flex-row items-center gap-x-2">
            <img
              src={Logo}
              alt=""
              className="bg-[#E9E9E9] rounded-[3px] p-1 w-8 h-8"
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
                placeholder="Buscar"
                className="h-8 pl-8 w-3/4 rounded-md transition-all duration-150 focus:pl-10 ease-in focus:w-full bg-[#38434F] text-white text-sm"
              />
            </div>
          </div>
          <ul className="col-span-5 w-[97%] border-r flex flex-row justify-center items-center gap-x-6 text-sm h-fit">
            <li className="flex flex-col items-center">
              <Icon icon="ion:home-sharp" className="w-5 h-5" />
              <Link to={`/`}>Inicio</Link>
            </li>
            <li className="flex flex-col items-center">
              <Icon icon="bi:people-fill" className="w-5 h-5" />
              <Link to={`mynetwork`}>Mi red</Link>
            </li>
            <li className="flex flex-col items-center">
              <Icon icon="pajamas:work" className="w-5 h-5" />
              <a href="jobs">Empleos</a>
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
            <li
              className="relative cursor-pointer"
              onClick={() => setVisibility(!visibility)}
            >
              <img src={Avatar} alt="" className="w-5 h-5 rounded-full" />
              <div className="flex items-center">
                <p>Yo</p>
                <Icon icon="raphael:arrowdown" hFlip={true} />
              </div>
              <div
                className={`mt-3 absolute border transition-opacity duration-150 ease-in-out opacity-${
                  visibility ? "1" : "0"
                }`}
              >
                test
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
      <div className="w-full h-screen bg-black py-3">
        <Outlet />
      </div>
    </>
  )
}

export default MainLoyout
