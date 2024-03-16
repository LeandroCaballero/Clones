import Avatar from "../../assets/me.jpg";
import SearchSVG from "../../assets/svg/Search";
import OptionsSVG from "../../assets/svg/Options";
import AddSVG from "../../assets/svg/Add";
import SmileSVG from "../../assets/svg/Smile";
import MicSVG from "../../assets/svg/Mic";
import SendSVG from "../../assets/svg/Send";
import MessageComponent from "./Message";

import { Socket, io } from "socket.io-client";
import { useEffect, useState } from "react";
import { User, Message } from "../../../types";

const Chat = () => {
  const [message, setMessage] = useState<Message>({
    text: "",
    user: undefined,
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const [socket, setsocket] = useState<Socket>();
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    const socket = io("http://localhost:3000");
    setsocket(socket);

    socket.on("recibir", (data: Message) => {
      console.log(data);
      setMessages((oldState) => [...oldState, data]);
    });

    setCurrentUser(JSON.parse(localStorage.getItem("user") || ""));
  }, []);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.text.length > 0) {
      console.log(message);
      socket?.emit("newMessage", { ...message });
      setMessage({ text: "", user: undefined });
    }
  };

  return (
    <div className="h-screen relative text-white bg-[#182329] col-span-7 overflow-y-hidden border-r-[1px] border-white">
      <div className="h-[58px] bg-[#1F2C34] flex items-center px-5">
        <div className="flex gap-x-4 items-center min-w-fit">
          <img src={Avatar} alt="" className="rounded-full w-10" />
          <p className="font-semibold">Leandro Caballero</p>
        </div>
        <div className="flex gap-x-7 w-full justify-end">
          <SearchSVG />
          <OptionsSVG />
        </div>
      </div>

      {/* Principal content */}

      <div className="h-[calc(100vh-58px)] bg-[#0B141A] relative">
        <div className="h-full bg-auto bg-repeat bg-[url('chat-background.png')] opacity-[0.07] bg-[#0B141A] absolute inset-0"></div>
        <div className="px-7 flex flex-col gap-y-1 justify-end h-[calc(100vh-122px)] overflow-y-scroll">
          {messages.map((message, i) => (
            <MessageComponent
              key={i}
              message={message}
              currentUser={currentUser}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 h-16 w-full bg-[#202C33] flex items-center px-4 gap-x-3">
        <button className="rounded-full p-1 transition-all duration-150 ease-out focus:rotate-[135deg] focus:bg-[#374248]">
          <AddSVG height={28} width={28} color="#8696A0" />
        </button>
        <form
          onSubmit={sendMessage}
          className="flex items-center gap-x-3 w-full"
        >
          <div className="w-full bg-[#2A3942] flex items-center gap-x-2 px-3 py-[10px] rounded-lg">
            <button>
              <SmileSVG height={22} width={22} color="#8696A0" />
            </button>
            <input
              value={message.text}
              onChange={(e) =>
                setMessage({ text: e.target.value, user: currentUser })
              }
              type="text"
              className="bg-[#2A3942] w-full outline-none"
              placeholder="Escribe un mensaje"
            />
          </div>
          {message.text.length > 0 ? (
            <button>
              <SendSVG
                height={28}
                width={28}
                color="#8696A0"
                onClick={sendMessage}
              />
            </button>
          ) : (
            <button>
              <MicSVG height={28} width={28} color="#8696A0" />
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Chat;
