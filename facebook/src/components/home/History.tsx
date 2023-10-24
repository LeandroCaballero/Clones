interface Props {
  data: {
    name: string
    image: string
    logo: string
  }
}

const History = ({ data }: Props) => {
  return (
    <div className="group/history relative rounded-xl h-full overflow-hidden ">
      <img
        src={data.image}
        alt=""
        className="h-full transition-all duration-200 ease-in-out group-hover/history:scale-[1.02]"
      />
      {/* Logo */}
      <img
        src={data.logo}
        alt=""
        className="absolute rounded-full top-3 left-2 border-4 border-[#075CE5] w-10 "
      />
      <p className="absolute bottom-2 left-3 text-sm font-semibold">
        {data.name}
      </p>
    </div>
  )
}

export default History
