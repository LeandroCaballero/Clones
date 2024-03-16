import { User } from "../../../types";
import Avatar from "../../assets/me.jpg";

interface Props {
  contact: User;
}

const Contact = ({ contact }: Props) => {
  return (
    <div className="flex bg-[#111B21] px-1 hover:bg-[#202C33] cursor-pointer">
      <div className="w-2/12 flex justify-center items-center">
        <img src={Avatar} alt="" className="rounded-full w-12 h-12" />
      </div>
      <div className="w-10/12 h-full py-[13px] flex justify-center ml-2 border-b-[1px] border-[#202C33]">
        <div className="w-10/12">
          <p>{contact.name}</p>
          {/* Estado */}
          {/* <p className="text-sm text-[#8696a0]">test de mensaje</p> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
