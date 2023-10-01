import MainLoyout from "./layouts/Main"
import Avatar from "./assets/perfil.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"
import Recommendation from "./components/home/Recommendation"
import Post from "./components/home/Post"

function App() {
  const quantityRecommendations = [
    { name: "Juan", job: "Recluter" },
    { name: "Maria", job: "Develop" },
    { name: "Bruno", job: "Psicologa" },
  ]

  const postTest = {
    name: "Leandro Caballero",
    job: "Ing sistemas",
    createDate: "2023-09-26",
    data: "Ya falta poco para encontrarnos en el Konex y no te podés perder nuestras charlas en Nerdearla. Y vamos con un pequeño avance, si sos experto en Marketing queremos conocerte 🎨✨ Queremos a alguien que sea un verdadero mago del crecimiento, alguien que sepa cómo hacer que las marcas despeguen como cohetes 🚀 y que no tenga miedo de experimentar con nuevas estrategias para alcanzar el éxito. 📈💪",
    reactions: {
      recommendations: 10,
      celebrates: 10,
      supports: 2,
      love: 5,
      interest: 0,
      funny: 0,
    },
    comments: 2,
    shared: 9,
  }
  return (
    <>
      <MainLoyout>
        <div className="grid grid-cols-10 w-10/12 border border-black mx-auto gap-x-5">
          {/* Personal info */}
          <div className="bg-[#1B1F23] h-fit relative overflow-hidden col-span-2 text-white text-center rounded-lg">
            <div className="h-14 bg-[#5B696B] absolute w-full" />
            <div className="p-3">
              <img
                src={Avatar}
                alt=""
                className=" left-1/2 -translate-x-1/2 mt-3 rounded-full w-16 h-16 border-2 border-black absolute"
              />
              <p className="mt-24">Leandro Caballero</p>
              <p className="text-[#A4A5A7] text-xs">
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
              <a href="" className="text-xs underline m-0 p-0">
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
          <div className="col-span-5 flex flex-col gap-y-3">
            <div className="bg-[#1B1F23] text-white py-3 rounded-lg">
              <div className="flex flex-row gap-x-2 items-center mx-4">
                <img
                  src={Avatar}
                  alt=""
                  className="rounded-full w-14 h-14 border-2 border-black"
                />
                <button className="border rounded-full w-full text-left p-3 h-full hover:bg-[#44474B] transition-all duration-150 ease-in-out">
                  Crear publicación
                </button>
              </div>
              <div className="flex flex-row gap-x-2 items-center justify-between mx-4 mt-1">
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
            <Post information={postTest} />
          </div>
          <div className="bg-[#1B1F23] col-span-3 text-white text-center rounded-lg p-3 h-fit">
            <div className="flex flex-row justify-between items-center">
              <p className="mb-2 font-bold">Añadir a tu feed</p>
              <Icon icon="mdi:information-box" className="rounded-md" />
            </div>
            {quantityRecommendations.map((el, i) => (
              <Recommendation information={el} key={i} />
            ))}
            <button className="text-left px-2 mt-2 flex flex-row items-center rounded-md hover:bg-[#44474B] transition-all duration-150 ease-in-out">
              <p className="font-bold text-sm">Ver todas las recomendaciones</p>
              <Icon icon="formkit:arrowright" className="text-xs" />
            </button>
          </div>
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
