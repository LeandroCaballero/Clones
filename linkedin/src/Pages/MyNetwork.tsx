import { Icon } from "@iconify/react/dist/iconify.js"
import Invitation from "../components/mynetwork/Invitation"
import { useState } from "react"

const MyNetwork = () => {
  const [showMore, setShowMore] = useState(true)
  const info = [
    {
      id: 0,
      user: "Leniolabs",
      typeInvitation: "Newsletter",
      timePublish: "Semanalmente",
      typePage: null,
      target: "Last Week on AI",
      image:
        "https://media.licdn.com/dms/image/C4E0BAQFDxqTtoCnI1w/company-logo_100_100/0/1624894159979?e=1706140800&v=beta&t=JPGybeGe4El5D1zEWa5Jq5-9u9PvQXTwMcoPKWGOH38",
    },
    {
      id: 1,
      user: "Braintrust",
      typeInvitation: "Newsletter",
      timePublish: "Semanalmente",
      typePage: null,
      target: "The Braintrust Talent Network",
      image:
        "https://media.licdn.com/dms/image/C560BAQHbQYFSQsK__A/company-logo_100_100/0/1630511737707?e=1706140800&v=beta&t=Hd5eFWJr04CZ1FlnStRNJN_8wy2IEcD5w6P3I8U-T7I",
    },
    {
      id: 2,
      user: "Sergio Javier De Filippi",
      typeInvitation: "Page",
      timePublish: null,
      typePage: "Organizaciones sin ánimo de lucro",
      target: "Transparencia Chaco",
      image:
        "https://media.licdn.com/dms/image/D4D03AQFRZIQcJvcZ0g/profile-displayphoto-shrink_100_100/0/1666215750590?e=1703116800&v=beta&t=cSr2F5Z_lO32ebjzE6K8Y0RwSWleVnXOHhTJBq8PUiI",
    },
  ]

  return (
    <div className="w-[84%] mx-auto text-white">
      <div className="w-full grid grid-cols-4 space-x-5">
        {/* Left panel */}
        <div className="bg-[#1B1F23] rounded-lg col-span-1 py-3 h-fit">
          <p className="px-3 mb-1">Gestionar mi red</p>
          <button className="flex justify-between items-center w-full hover:bg-[#44474B] text-[#B4B5B7] px-5 py-2">
            <div className="flex justify-between items-center gap-x-3">
              <Icon icon="bi:people-fill" className="w-6 h-6" />
              <p>Contactos</p>
            </div>
            <p>59</p>
          </button>
          {showMore && (
            <>
              <button className="flex justify-between items-center w-full hover:bg-[#44474B] text-[#B4B5B7] px-5 py-2">
                <div className="flex justify-between items-center gap-x-3">
                  <Icon icon="material-symbols:person" className="w-6 h-6" />
                  <p>Siguiendo y seguidores</p>
                </div>
                <p></p>
              </button>
              <button className="flex justify-between items-center w-full hover:bg-[#44474B] text-[#B4B5B7] px-5 py-2">
                <div className="flex justify-between items-center gap-x-3">
                  <Icon icon="bx:calendar" className="w-6 h-6" />
                  <p>Evento</p>
                </div>
                <p>1</p>
              </button>
              <button className="flex justify-between items-center w-full hover:bg-[#44474B] text-[#B4B5B7] px-5 py-2">
                <div className="flex justify-between items-center gap-x-3">
                  <Icon icon="fe:building" className="w-6 h-6" />
                  <p>Páginas</p>
                </div>
                <p>15</p>
              </button>
              <button className="flex justify-between items-center w-full hover:bg-[#44474B] text-[#B4B5B7] px-5 py-2">
                <div className="flex justify-between items-center gap-x-3">
                  <Icon icon="fluent-mdl2:news" className="w-6 h-6" />
                  <p>Newsletter</p>
                </div>
                <p>1</p>
              </button>
              <button className="flex justify-between items-center w-full hover:bg-[#44474B] text-[#B4B5B7] px-5 py-2">
                <div className="flex justify-between items-center gap-x-3">
                  <Icon icon="mdi:hashtag" className="w-6 h-6" />
                  <p>Hashtags</p>
                </div>
                <p></p>
              </button>
            </>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="flex gap-x-1 transition-all duration-100 ease-linear hover:bg-[#44474B] mx-4 p-1 rounded-md font-semibold"
          >
            <p className="text-[#E6E6E7]">
              Mostrar {showMore ? "menos" : "más"}
            </p>
            <Icon
              icon={`${
                showMore ? "iconamoon:arrow-up-2" : "iconamoon:arrow-down-2"
              }`}
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Content */}
        <div className="col-span-3 space-y-4">
          <div className="bg-[#1B1F23] rounded-lg">
            <div className="flex justify-between items-center py-3 px-4">
              <p>Invitaciones</p>
              <button className="rounded-md py-1 px-2 transition-all duration-100 ease-linear hover:bg-[#44474B] font-semibold">
                Ver todo ({info.length})
              </button>
            </div>
            {info.map((invi) => (
              <Invitation key={invi.id} invitation={invi}></Invitation>
            ))}
          </div>
          <div className="bg-[#1B1F23] rounded-lg relative p-4">
            <button className="absolute top-2 right-2 p-[5px] rounded-full hover:bg-[#44474B] transition-all duration-150 ease-in-out">
              <Icon icon="material-symbols:close" className="w-5 h-5" />
            </button>
            <p className="font-semibold">Busca empleo eficazmente</p>
            <p className="text-sm text-[#B4B5B7] mt-1">
              Mira quién ha visto tu perfil y contacta directamente con los
              técnicos de selección con InMail.
            </p>
            <div className="relative flex gap-x-2 py-1 my-2">
              <div>
                {info.map((invi, index) => {
                  const left = "left-" + index * 3
                  return (
                    <div key={invi.id} className={`absolute top-0 ${left}`}>
                      <img
                        key={invi.id}
                        className={`rounded-full w-7`}
                        src={invi.image}
                        alt=""
                      />
                    </div>
                  )
                })}
              </div>
              <p className="ml-12 text-sm text-[#B4B5B7]">
                Romina y millones de miembros más usan Premium
              </p>
            </div>
            <button className="bg-[#F9C982] my-2 transition-all duration-100 ease-linear hover:bg-[#E9A53F] font-semibold text-black rounded-full py-1 px-4">
              Probar Premium por 0 AR$
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyNetwork
