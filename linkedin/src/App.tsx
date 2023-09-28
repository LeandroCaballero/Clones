import MainLoyout from "./layouts/Main"
import Avatar from "./assets/perfil.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

function App() {
  return (
    <>
      <MainLoyout>
        <div className="grid grid-cols-4  w-10/12 border border-black mx-auto gap-x-5">
          {/* Personal info */}
          <div className="bg-[#1B1F23] text-white text-center rounded-lg">
            <div className="p-3">
              <img
                src={Avatar}
                alt=""
                className="mx-auto rounded-full w-16 h-16 border-2 border-black"
              />
              <p className="">Leandro Caballero</p>
              <p className="text-[#A4A5A7] text-sm">
                Ingeniero en Sistemas de Información
              </p>
            </div>
            <hr className="border-[#373A3D]" />
            <div className="text-left p-3">
              <div className="flex flex-row justify-between">
                <p className="text-[#A4A5A7] text-sm">Contactos</p>
                <p className="text-[#71B1DF] text-sm">80</p>
              </div>
              <p className="text-white text-sm">Amplia tu red</p>
              <div className="flex flex-row justify-between">
                <p className="text-[#A4A5A7] text-sm">
                  Quién ha visto tu perfil
                </p>
                <p className="text-[#71B1DF] text-sm">25</p>
              </div>
            </div>
            <hr className="border-[#373A3D]" />
            <div className="text-left p-3">
              <p className="text-[#A4A5A7] text-sm">
                Accede a información y herramientas exclusivas
              </p>
              <a href="" className="text-sm underline">
                Consigue que te contraten más rápido. Prueba Premium gratis.
              </a>
            </div>
            <hr className="border-[#373A3D]" />
            <div className="p-3 flex flex-row items-center gap-x-2">
              <Icon icon="subway:mark-2" />
              <p className="text-sm">Marcapáginas</p>
            </div>
          </div>

          {/* Publish Bar */}
          <div className="bg-[#1B1F23] text-white col-span-2 py-3 rounded-lg h-fit">
            <div className="flex flex-row gap-x-2 items-center mx-4">
              <img
                src={Avatar}
                alt=""
                className="rounded-full w-16 h-16 border-2 border-black"
              />
              <button className="border rounded-full w-full text-left p-3 h-fit hover:bg-[#44474B] transition-all duration-150 ease-in-out">
                Crear publicación
              </button>
            </div>
            <div className="flex flex-row gap-x-2 items-center justify-between mx-4">
              <button className="flex flex-row items-center gap-x-2 p-3 rounded-md hover:bg-[#44474B] transition-all duration-150 ease-in-out">
                <Icon
                  icon="ep:picture-filled"
                  className="text-[#71B7FB] rounded-md text-2xl"
                />
                <p className="font-bold text-sm">Contenido multimedia</p>
              </button>
              <button className="flex flex-row items-center gap-x-2 p-3 rounded-md hover:bg-[#44474B] transition-all duration-150 ease-in-out">
                <Icon
                  icon="ion:calendar"
                  className="text-[#E9A53F] rounded-md text-2xl"
                />
                <p className="font-bold text-sm">Evento</p>
              </button>
              <button className="flex flex-row items-center gap-x-2 p-3 rounded-md hover:bg-[#44474B] transition-all duration-150 ease-in-out">
                <Icon
                  icon="majesticons:article"
                  className="text-[#F69B81] rounded-md text-2xl"
                />
                <p className="font-bold text-sm">Escribir artículo</p>
              </button>
            </div>
          </div>
          <div className="border border-black"></div>
        </div>
        {/* <div className="w-52 border">
          <div className="group relative">
            <input
              className="block w-1/2 px-4 py-2 rounded-lg border focus:w-56 focus:outline-none transition-all duration-300"
              type="text"
              placeholder="Ingresa algo"
            />
          </div>
        </div> */}
      </MainLoyout>
    </>
  )
}

export default App
