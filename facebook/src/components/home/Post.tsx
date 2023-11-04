import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import "dayjs/locale/es"
import { Icon } from "@iconify/react/dist/iconify.js"
import AngerIcon from "../../assets/icons/reactions/anger.svg"
import FunnyIcon from "../../assets/icons/reactions/funny.svg"
import LikeIcon from "../../assets/icons/reactions/like.svg"
import LoveIcon from "../../assets/icons/reactions/love.svg"
import MatterIcon from "../../assets/icons/reactions/matter.svg"
import SadIcon from "../../assets/icons/reactions/sad.svg"
import SurpriseIcon from "../../assets/icons/reactions/surprise.svg"
import { useEffect, useState } from "react"

dayjs.locale("es")
dayjs.extend(relativeTime)

interface Props {
  data: {
    autor: string
    picture: string
    description: string
    type: string
    date: string
    newsTitle: string
    newsLink: string
    newsImage: string
    recipients: string
    reactions: [
      { name: string; quantity: number },
      { name: string; quantity: number },
      { name: string; quantity: number },
      { name: string; quantity: number },
      { name: string; quantity: number },
      { name: string; quantity: number },
      { name: string; quantity: number }
    ]
    comments: number
    shared: number
  }
}

type TypeKeyValue = {
  [key: string]: string
}

const reactionsIcons: TypeKeyValue = {
  anger: AngerIcon,
  funny: FunnyIcon,
  like: LikeIcon,
  love: LoveIcon,
  matter: MatterIcon,
  sad: SadIcon,
  surprise: SurpriseIcon,
}

const Post = ({ data }: Props) => {
  const [reactionsToView, setReactionsToView] = useState<
    { name: string; quantity: number }[]
  >([])

  useEffect(() => {
    const reactionsData = data.reactions
      .filter((reaction) => reaction.quantity > 0)
      .sort((a, b) => b.quantity - a.quantity)
      .slice(0, 3)

    setReactionsToView(reactionsData)
  }, [data])

  return (
    <div className="mt-4 w-2/3 bg-[#242526] rounded-lg pt-3 shadow-sm shadow-slate-900">
      <div className="flex justify-between px-4">
        <div className="flex items-start gap-x-2">
          <img src={data.picture} className="rounded-full h-10 w-10" alt="" />
          <div className="flex flex-col">
            <p className="font-semibold">{data.autor}</p>
            <div className="flex items-center  gap-x-[2px] text-sm text-[#B0B3B8]">
              <p className="text-xs">{dayjs(data.date).from(dayjs(), true)}</p>
              <p className="text-xs">•</p>
              <p className="text-sm translate-y-[1px]">
                {data.recipients == "world" ? (
                  <Icon icon="bx:world" />
                ) : (
                  <Icon icon="material-symbols:group" />
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <button className="h-fit p-2 rounded-full hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <Icon
              icon="solar:menu-dots-bold"
              className="w-6 h-6 rounded-full hover:bg-[#303031] transition-all duration-150 ease-in-out"
            />
          </button>
          <button className="h-fit p-2 rounded-full hover:bg-[#303031] transition-all duration-150 ease-in-out">
            <Icon
              icon="material-symbols:close"
              className="w-6 h-6 rounded-full hover:bg-[#303031] transition-all duration-150 ease-in-out"
            />
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="leading-5 px-4 mt-2 mb-3 whitespace-pre-wrap">
        {data.description}
      </p>

      {/* Image */}
      <img src={data.newsImage} alt="" />

      {/* Reactions */}
      <div className="flex justify-between font-normal mx-3 py-3 border-b border-[#3A3B3C] relative">
        <div className="flex items-center">
          {data.reactions
            .filter((reaction) => reaction.quantity > 0)
            .sort((a, b) => b.quantity - a.quantity)
            .slice(0, 3)
            .map((reaction, index) => {
              const leftPosition = 15 * index
              const style = {
                left: `${leftPosition}px`,
              }

              const isLast = index == reactionsToView.length - 1

              return (
                <>
                  <img
                    key={index}
                    src={reactionsIcons[reaction.name]}
                    alt=""
                    className="w-[17px] absolute"
                    style={style}
                  />
                  {isLast && (
                    <p
                      style={{
                        left: `${leftPosition + 22}px`,
                        position: "absolute",
                      }}
                    >
                      {reactionsToView.reduce(
                        (acc, curr) => curr.quantity + acc,
                        0
                      )}
                    </p>
                  )}
                </>
              )
            })}
        </div>
        <div className="text-[#A8ABAF] flex items-center gap-x-2 left-2">
          <div className="flex items-center text-sm gap-x-[2px]">
            <p className="font-semibold">{data.comments}</p>
            <Icon
              icon="iconamoon:comment-fill"
              className="w-[18px] h-[18px]"
              hFlip={true}
            />
          </div>
          <div className="flex items-center text-sm gap-x-[2px]">
            <p className="font-semibold">{data.shared}</p>
            <Icon icon="majesticons:share" className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="mx-3 flex gap-x-1 font-semibold text-[15px] text-[#B8BBBF] mb-1">
        <button className="w-1/3 flex items-center justify-center py-[6px] mt-1 gap-x-1 rounded-md hover:bg-[#3A3B3C]">
          <Icon icon="iconamoon:like-light" className="w-5 h-5" />
          <p>Me gusta</p>
        </button>
        <button className="w-1/3 flex items-center justify-center mt-1 gap-x-1 rounded-md hover:bg-[#3A3B3C]">
          <Icon
            icon="iconamoon:comment-light"
            className="w-[18px] h-[18px]"
            hFlip={true}
          />
          <p>Comentar</p>
        </button>
        <button className=" w-1/3 flex items-center justify-center mt-1 gap-x-1 rounded-md hover:bg-[#3A3B3C]">
          <Icon icon="majesticons:share-line" className="w-5 h-5" />
          <p>Compartir</p>
        </button>
      </div>
    </div>
  )
}

export default Post
