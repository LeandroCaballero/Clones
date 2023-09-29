import { Icon } from "@iconify/react/dist/iconify.js"
import Avatar from "../../assets/perfil.jpg"

interface Props {
  information: {
    name: string
    job: string
  }
}

const Recommendation = ({ information }: Props) => {
  return (
    <div className="flex flex-row">
      <img src={Avatar} alt="" className="rounded-full w-12 h-12" />
      <div className="text-left px-2">
        <p>{information.name}</p>
        <p className="text-[#A4A5A7] text-xs">{information.job}</p>
        <button className="border flex flex-row items-center rounded-full px-3 py-1 my-1">
          <Icon icon="ic:baseline-plus" />
          Seguir
        </button>
      </div>
    </div>
  )
}

export default Recommendation
