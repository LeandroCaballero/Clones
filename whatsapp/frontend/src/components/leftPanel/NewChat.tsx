import CommunitySolidSVG from "../../assets/svg/CommunitySolid";
import { Icon } from "@iconify/react";

const NewChat = () => {
  return (
    <div>
      {/* Input */}
      <div className="px-3 py-2 flex justify-between items-center bg-[#111B21]">
        <div className="bg-[#1F2C34] overflow-hidden w-full flex items-center rounded-lg">
          <Icon
            className="w-2/12"
            icon="material-symbols:search"
            width="17"
            height="17"
            color="#A8B5BD"
          />
          <input
            type="text"
            className="w-10/12 text-sm px-1 py-2 bg-[#1F2C34]"
            placeholder="Busca un nombre o número"
          />
        </div>
      </div>

      {/* New Group */}
      <div className="flex bg-[#111B21] px-1 hover:bg-[#202C33] cursor-pointer">
        <div className="w-2/12 flex justify-center items-center">
          <div className="bg-[#00A884] w-12 h-12 rounded-full p-2 flex justify-center items-center">
            <Icon icon="ic:round-group" color="white" width={25} />
          </div>
        </div>
        <div className="w-10/12 h-full py-6 flex ml-2 border-b-[1px] border-[#202C33]">
          <div className="w-10/12">
            <p className="text-white text-lg">Nuevo grupo</p>
          </div>
        </div>
      </div>

      {/* New Community */}
      <div className="flex bg-[#111B21] px-1 hover:bg-[#202C33] cursor-pointer">
        <div className="w-2/12 flex justify-center items-center">
          <div className="bg-[#00A884] rounded-full w-12 h-12 flex justify-center items-center">
            <CommunitySolidSVG />
          </div>
        </div>
        <div className="w-10/12 h-full py-6 flex ml-2 border-b-[1px] border-[#202C33]">
          <div className="w-10/12">
            <p className="text-white text-lg">Nueva comunidad</p>
          </div>
        </div>
      </div>

      <p className="text-[#008069] py-6 px-8">CONTACTOS EN WHATSAPP</p>
    </div>
  );
};

export default NewChat;
