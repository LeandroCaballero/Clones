import { ReactNode, useState } from "react"
import { Icon } from "@iconify/react/dist/iconify.js"
import Header from "../components/layout/Header"
import Avatar from "../assets/perfil.jpg"
import angry from "../assets/directAccess/angry.png"
import chinchon from "../assets/directAccess/chinchon.png"
import escoba from "../assets/directAccess/escoba.jpg"
import futbol from "../assets/directAccess/futbol.png"
import pawn from "../assets/directAccess/pawn-star.png"
import happyBirthday from "../assets/icons/birthday.png"
import friend from "../assets/icons/friends.png"
import clock from "../assets/icons/clock.png"
import group from "../assets/icons/group.png"
import save from "../assets/icons/save.png"
import video from "../assets/icons/video.png"

interface Props {
  children: ReactNode
}
const MainLayout = ({ children }: Props) => {
  const [showMore, setShowMore] = useState(false)
  const friends = ["", "", "", "", "", "", "", "", "", "", ""]

  return (
    <>
      {/* Header */}
      <Header />
      <div className="grid grid-cols-9">
        <div className="pt-4 pl-2 h-[calc(100vh-56px)] text-white bg-[#18191A] col-span-2 overflow-y-hidden hover:overflow-y-scroll sticky top-14">
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={Avatar} alt="" className="w-7 h-7 rounded-full" />
            <p className="font-[500]">Leandro Caballero</p>
          </button>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={friend} alt="" className="w-7 h-7 rounded-full" />
            <p className="font-[500]">Amigos</p>
          </button>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={clock} alt="" className="w-7 h-7 rounded-full" />
            <p className="font-[500]">Recuerdos</p>
          </button>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={save} alt="" className="w-7 h-7 rounded-full" />
            <p className="font-[500]">Guardado</p>
          </button>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={group} alt="" className="w-7 h-7 rounded-full" />
            <p className="font-[500]">Grupos</p>
          </button>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={video} alt="" className="w-7 h-7 rounded-full" />
            <p className="font-[500]">Video</p>
          </button>
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-x-2 group/showmore w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out"
          >
            <Icon
              icon={`${
                showMore ? "iconamoon:arrow-up-2" : "iconamoon:arrow-down-2"
              }`}
              className="w-7 h-7 transition-all duration-150 ease-in-out group-hover/showmore:bg-[#444546] bg-[#303031] rounded-full p-1"
            />
            <p className="font-[500]">Ver más</p>
          </button>
          <hr className="ml-2 mr-3 border-[#3E4042] mt-2" />
          <div className="mt-3 flex justify-between group/edit items-center">
            <p className="text-[#B0B3B8] px-2 font-semibold text-[17px]">
              Tus accesos directos
            </p>
            <button className="hover:bg-[#303031] opacity-0 group-hover/edit:opacity-100 text-[#6BB0FF] rounded-md py-1 px-2 transition-all duration-150 ease-in-out">
              Editar
            </button>
          </div>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={pawn} alt="" className="w-7 h-7 rounded-md" />
            <p className="text-[#D9DBDF] font-[500]">Pawn Start: The Game</p>
          </button>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={angry} alt="" className="w-7 h-7 rounded-md" />
            <p className="text-[#D9DBDF] font-[500]">Angry Birds Friends</p>
          </button>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={chinchon} alt="" className="w-7 h-7 rounded-md" />
            <p className="text-[#D9DBDF] font-[500]">Chinchon</p>
          </button>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={escoba} alt="" className="w-7 h-7 rounded-md" />
            <p className="text-[#D9DBDF] font-[500]">Escoba del 15</p>
          </button>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={futbol} alt="" className="w-7 h-7 rounded-md" />
            <p className="text-[#D9DBDF] font-[500]">Football Life</p>
          </button>
          <button
            onClick={() => setShowMore(!showMore)}
            className="group/showmore flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out"
          >
            <Icon
              icon={`${
                showMore ? "iconamoon:arrow-up-2" : "iconamoon:arrow-down-2"
              }`}
              className="w-7 h-7 transition-all duration-150 ease-in-out group-hover/showmore:bg-[#444546] bg-[#303031] rounded-full p-1"
            />
            <p className="font-[500]">Ver más</p>
          </button>
        </div>

        {/* SLOT */}
        <div className="col-span-5">{children}</div>

        <div className="pt-5 pl-1 h-[calc(100vh-56px)] text-white bg-[#18191A] col-span-2 overflow-y-hidden hover:overflow-y-scroll sticky top-14">
          <p className="text-[#B0B3B8] px-2 mb-1 font-semibold text-[17px]">
            Cumpleaños
          </p>
          <button className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <img src={happyBirthday} alt="" className="w-7 h-7 rounded-full" />
            <p className="leading-tight text-left">
              Hoy es el cumpleaños de Fulano y Mengano
            </p>
          </button>
          <hr className="ml-2 mr-3 border-[#3E4042] mt-2" />
          <div className="flex justify-between text-[#B0B3B8] mt-3">
            <p className="px-2 mb-1 font-semibold text-[17px]">Contactos</p>
            <div className="flex items-center gap-x-2">
              <button className="p-1 rounded-full hover:bg-[#303031] transition-all duration-150 ease-in-out">
                <Icon icon="material-symbols:search" className="w-5 h-5" />
              </button>
              <button className="p-1 rounded-full hover:bg-[#303031] transition-all duration-150 ease-in-out">
                <Icon
                  icon="solar:menu-dots-bold"
                  className="w-5 h-5 rounded-full hover:bg-[#303031] transition-all duration-150 ease-in-out"
                />
              </button>
            </div>
          </div>
          {friends.map((_, index) => (
            <button
              key={index}
              className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out"
            >
              <img src={Avatar} alt="" className="w-7 h-7 rounded-full" />
              <p className="font-[500]">Leandro Caballero</p>
            </button>
          ))}
          <hr className="ml-2 mr-3 border-[#3E4042] mt-2" />
          <p className="px-2 my-2 text-[#B0B3B8] font-semibold text-[17px]">
            Conversaciones en grupo
          </p>
          {friends.slice(0, 3).map((_, index) => (
            <button
              key={index}
              className="flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out"
            >
              <img src={Avatar} alt="" className="w-7 h-7 rounded-full" />
              <p className="font-[500]">Grupo {index + 1}</p>
            </button>
          ))}
          <button
            onClick={() => setShowMore(!showMore)}
            className="group/newgroup flex items-center gap-x-2 w-full rounded-md p-2 hover:bg-[#303031] transition-all duration-150 ease-in-out"
          >
            <Icon
              icon="ic:baseline-plus"
              className="w-7 h-7 bg-[#303031] rounded-full p-1 transition-all duration-150 ease-in-out group-hover/newgroup:bg-[#444546]"
            />
            <p className="font-[500]">Crear nuevo grupo</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default MainLayout
