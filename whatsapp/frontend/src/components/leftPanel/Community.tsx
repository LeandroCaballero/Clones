import CommunitySolidSVG from "../../assets/svg/CommunitySolid";
import CTglobal from "../../assets/CTglobal.jpg";
import CTpartners from "../../assets/CTpartners.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";

const Community = () => {
  const groups = [
    {
      name: "Centralticket - Global",
      date: "4/7/2023",
      data: "Test de un mensaje cualquiera",
      image: CTglobal,
    },
    {
      name: "Centralticket Partners",
      date: "30/7/2023",
      data: "Test de un mensaje cualquiera",
      image: CTpartners,
    },
  ];
  return (
    <div className="w-full overflow-y-scroll sticky h-[calc(100vh-110px)] bg-[#0C1317]">
      {/* New */}
      <button className="w-full py-3 px-3 flex items-center gap-x-3 bg-[#111B21] hover:bg-[#1F2C34]">
        <div className="bg-[#00A884] rounded-xl py-3 px-2">
          <CommunitySolidSVG />
        </div>
        <p className="text-[#e9edef] text-lg">Nueva comunidad</p>
      </button>

      {/* Communities */}
      <button className="w-full py-3 px-3 flex items-center gap-x-3 bg-[#111B21] hover:bg-[#1F2C34] mt-3 border-b-[1px] border-[#202C33]">
        <div className="bg-[#046A62] rounded-xl py-3 px-2">
          <CommunitySolidSVG />
        </div>
        <p className="text-[#e9edef] text-lg font-semibold">CentralTicket</p>
      </button>

      <div className="">
        {/* Announcement */}
        <div className="pl-3 flex gap-x-4 py-3 bg-[#111B21] hover:bg-[#1F2C34]">
          <div className="flex justify-center items-center bg-[#046A62] p-2 rounded-lg h-fit">
            <Icon
              icon="mdi:announcement"
              color="#42C7B8"
              width={25}
              height={25}
            />
          </div>
          <div className="overflow-hidden border-b-[1px] border-[#202C33] pb-3">
            <div className="flex items-center justify-between text-white w-full">
              <p>Avisos</p>
              <p className="text-[#8696a0] text-xs mr-3">1/10/2022</p>
            </div>
            <p className="text-[#8696a0] mr-5 text-sm overflow-hidden text-ellipsis whitespace-nowrap">
              Se produjo un cambio en los miembros de la comunidad
            </p>
          </div>
        </div>

        {groups.map((group) => (
          <div className="pl-3 flex gap-x-4 items-start pb-3 bg-[#111B21] hover:bg-[#1F2C34]">
            <img className="w-10 h-10 rounded-full" src={group.image} alt="" />
            <div className="overflow-hidden border-b-[1px] w-full border-[#202C33] pb-3">
              <div className="flex items-center justify-between text-white w-full">
                <p>{group.name}</p>
                <p className="text-[#8696a0] text-xs mr-3">{group.date}</p>
              </div>
              <p className="text-[#8696a0] mr-5 text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                {group.data}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
