import Avatar from "../../assets/me.jpg";
import CommunitySVG from "../../assets/svg/Community";
import StateSVG from "../../assets/svg/State";
import ChannelsSVG from "../../assets/svg/Channels";
import NewChannelSVG from "../../assets/svg/NewChat";
import OptionsSVG from "../../assets/svg/Options";
import Filter from "./Filter";
import ChatItem from "./ChatItem";
import { leftPanelControlStore } from "../../store/panelControl";
import { filterContactsStore } from "../../store/users";
import Contact from "./User";
import { useQuery } from "react-query";
import { fetchChats } from "../../services/chatApi";
import { Chat, User } from "../../../types";

const ChatList = () => {
  const { contactsFiltered } = filterContactsStore();
  const { changeLeftPanelState } = leftPanelControlStore();

  const currentUser = useQuery<User>({ queryKey: ["currentUser"] });

  const { isLoading, isError, data } = useQuery<Chat[]>({
    queryKey: ["chats"],
    queryFn: () => fetchChats(currentUser.data?.id),
  });

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
        {isLoading && <p className="text-center">Cargando los chats...</p>}

        {isError && (
          <p className="text-center">Hubo un error al cargar los chats...</p>
        )}

        {contactsFiltered.length > 0 ? (
          contactsFiltered.map((user, index) => (
            <Contact key={index} contact={user} />
          ))
        ) : data && data?.length > 0 ? (
          data?.map((chat: Chat) => <ChatItem key={chat.id} chat={chat} />)
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-xl">Sin chats</p>
            <p className="text-sm">Busque un contacto e inicie un chat</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatList;
