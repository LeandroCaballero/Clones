import { Icon } from "@iconify/react/dist/iconify.js"
import Avatar from "../../assets/perfil.jpg"

import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import "dayjs/locale/es"

dayjs.locale("es")
dayjs.extend(relativeTime)

interface Props {
  information: {
    name: string
    job: string
    createDate: string
    data: string
    reactions: {
      recommendations: number
      celebrates: number
      supports: number
      love: number
      interest: number
      funny: number
    }
    comments: number
    shared: number
  }
}

const Post = ({ information }: Props) => {
  const sumReactions = () => {
    let sum = 0
    for (const pais in information.reactions) {
      sum += information.reactions[pais]
      // if (numero.startsWith(countriesPrefix[pais])) {
      //   return true;
      // }
    }
    return sum
  }
  return (
    <>
      <div className="bg-[#1B1F23] text-white overflow-hidden rounded-lg">
        <div className="px-4 py-3">
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-row gap-x-2">
              <img
                src={Avatar}
                alt=""
                className="rounded-full w-14 h-14 my-auto"
              />
              <div>
                <p>{information.name}</p>
                <p className="text-sm text-[#A4A5A7]">{information.job}</p>
                <div className="flex items-center">
                  <p className="text-sm text-[#A4A5A7]">
                    {dayjs().from(information.createDate, true)} •
                  </p>
                  <Icon
                    icon="bx:world"
                    className="text-sm text-[#A4A5A7] ml-1"
                  />
                </div>
              </div>
            </div>
            <div>
              <button className="p-1 rounded-full hover:bg-[#44474B] transition-all duration-150 ease-in-out">
                <Icon icon="mi:options-horizontal" className="text-2xl" />
              </button>
              <button className="p-1 rounded-full hover:bg-[#44474B] transition-all duration-150 ease-in-out">
                <Icon icon="material-symbols:close" className="text-2xl" />
              </button>
            </div>
          </div>
          <p className="text-sm">{information.data}</p>

          <div className="flex flex-row justify-between text-sm mt-2">
            <p>{sumReactions()}</p>
            <div className="flex gap-x-1">
              <p>
                {information.comments > 0
                  ? information.comments == 1
                    ? "1 comentario"
                    : `${information.comments} comentarios`
                  : ""}
              </p>
              {information.shared > 0 && information.comments > 0 && <p>•</p>}
              <p>
                {information.shared > 0
                  ? information.shared == 1
                    ? "1 vez compartido"
                    : `${information.shared} veces compartido`
                  : ""}
              </p>
            </div>
          </div>
          <hr className="border-[#373A3D] mt-2" />
          <div className="flex flex-row gap-x-1 items-center justify-between mt-1">
            <button className="flex flex-row items-center gap-x-2 p-3 rounded-md hover:bg-[#44474B] transition-all duration-150 ease-in-out">
              <Icon
                icon="simple-line-icons:like"
                hFlip={true}
                className="rounded-md text-2xl"
              />
              <p className="font-bold text-sm">Recomendar</p>
            </button>
            <button className="flex flex-row items-center gap-x-2 p-3 rounded-md hover:bg-[#44474B] transition-all duration-150 ease-in-out">
              <Icon icon="mi:message" className=" rounded-md text-2xl" />
              <p className="font-bold text-sm">Comentar</p>
            </button>
            <button className="flex flex-row items-center gap-x-2 p-3 rounded-md hover:bg-[#44474B] transition-all duration-150 ease-in-out">
              <Icon
                icon="ant-design:retweet-outlined"
                className="rounded-md text-2xl"
              />
              <p className="font-bold text-sm">Compartir</p>
            </button>
            <button className="flex flex-row items-center gap-x-2 p-3 rounded-md hover:bg-[#44474B] transition-all duration-150 ease-in-out">
              <Icon
                icon="icon-park-outline:send"
                className="rounded-md text-2xl"
              />
              <p className="font-bold text-sm">Compartir</p>
            </button>
          </div>
        </div>
        <div className="bg-[#364547]">
          <input
            type="text"
            placeholder="Escribe el primer comentario"
            className="bg-transparent focus:outline-none p-3 w-full"
          />
        </div>
      </div>
    </>
  )
}

export default Post
