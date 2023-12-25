import Avatar from "../assets/me.jpg";
import SearchSVG from '../assets/svg/Search'
import OptionsSVG from "../assets/svg/Options";

const Chat = () => {
  return (
    <div className="h-screen text-white bg-[#182329] col-span-7 overflow-y-hidden border-r-[1px] border-white">
      <div className="h-[58px] bg-[#1F2C34] flex items-center px-5">
        <div className="flex gap-x-4 items-center min-w-fit">
          <img src={Avatar} alt="" className="rounded-full w-10" />
          <p>Leandro Caballero</p>
        </div>
        <div className="flex gap-x-7 w-full justify-end">
          <SearchSVG />
          <OptionsSVG />
        </div>
      </div>
      <div className="h-full"></div>
    </div>
  );
};

export default Chat;
