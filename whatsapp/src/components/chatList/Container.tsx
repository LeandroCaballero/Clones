import Avatar from "../../assets/me.jpg";
import CommunitySVG from "../../assets/svg/Community";
import StateSVG from "../../assets/svg/State";
import ChannelsSVG from "../../assets/svg/Channels";
import NewChannelSVG from "../../assets/svg/NewChat";
import OptionsSVG from "../../assets/svg/Options";
import Filter from "./Filter";
import Chat from "./Chat";
import { leftPanelControlStore } from "../../store/panelControl";

const ChatList = () => {
  const list = [
    {
      messages: [
        { text: "mensaje 1", read: true },
        { text: "mensaje 2", read: false },
      ],
    },
    {
      messages: [
        { text: "mensaje 1", read: true },
        { text: "mensaje 2", read: false },
      ],
    },
    {
      messages: [
        { text: "mensaje 1", read: true },
        { text: "mensaje 2", read: false },
      ],
    },
    {
      messages: [
        { text: "mensaje 1", read: true },
        { text: "mensaje 2", read: false },
      ],
    },
    {
      messages: [
        { text: "mensaje 1", read: true },
        { text: "mensaje 2", read: false },
      ],
    },
    {
      messages: [
        { text: "mensaje 1", read: true },
        { text: "mensaje 2", read: false },
      ],
    },
    {
      messages: [
        { text: "mensaje 1", read: true },
        { text: "mensaje 2", read: false },
      ],
    },
    {
      messages: [
        { text: "mensaje 1", read: true },
        { text: "mensaje 2", read: false },
      ],
    },
  ];

  const { type, changeLeftPanelState } = leftPanelControlStore();

  return (
    <div className="h-screen text-white bg-[#182329] col-span-3 overflow-hidden border-r-[1px] border-[#2E3B43]">
      {/* Header */}
      <div className="h-[58px] bg-[#1F2C34] flex items-center px-4">
        <img
          src={Avatar}
          alt=""
          className="rounded-full w-10 cursor-pointer"
          onClick={() => changeLeftPanelState(true, "perfil")}
        />
        <div className="flex gap-x-7 w-full justify-end">
          <button onClick={() => changeLeftPanelState(true, "communty")}>
            <CommunitySVG />
          </button>
          <button onClick={() => changeLeftPanelState(true, "state")}>
            <StateSVG />
          </button>
          <button onClick={() => changeLeftPanelState(true, "channels")}>
            <ChannelsSVG />
          </button>
          <button onClick={() => changeLeftPanelState(true, "newChat")}>
            <NewChannelSVG />
          </button>
          <button>
            <OptionsSVG />
          </button>
        </div>
      </div>

      {/* Filter */}
      <Filter />

      {/* List */}
      <div className="overflow-y-scroll sticky h-[calc(100vh-110px)]">
        {list.map((chat, index) => (
          <Chat key={index} chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
