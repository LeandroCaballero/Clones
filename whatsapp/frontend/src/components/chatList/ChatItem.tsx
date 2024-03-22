import { useQuery } from "@tanstack/react-query";
import { Chat, User } from "../../../types";
import Avatar from "../../assets/me.jpg";
import { useState, useEffect } from "react";
import { getOneChat } from "../../services/chatApi";

interface Props {
  chat: Chat;
}

const ChatItem = ({ chat }: Props) => {
  const [colorHour, setColorHour] = useState("text-[#A8B5BD]");
  const [quantityWithoutRead, setQuantityWithoutRead] = useState(0);
  const [otherUser, setOtherUser] = useState<User>();

  const { refetch } = useQuery<Chat>({
    queryKey: ["currentChat"],
    queryFn: () => getOneChat(chat.id),
    enabled: false,
    retry: false,
  });

  useEffect(() => {
    // const messagesWithoutRead = chat.messages.filter(
    //   (message) => !message.read
    // );
    setQuantityWithoutRead(chat._count.messages);

    //Cambiar para comparar con el current user logged
    const otherUser = chat.users.find((user) => user.id != 20);
    setOtherUser(otherUser);

    if (chat._count.messages > 0) {
      setColorHour("text-[#00A884]");
    }
  }, []);

  return (
    <div
      className="flex bg-[#111B21] px-1 hover:bg-[#202C33] cursor-pointer"
      onClick={() => refetch()}
    >
      <div className="w-2/12 flex justify-center items-center">
        <img src={Avatar} alt="" className="rounded-full w-12 h-12" />
      </div>
      <div className="w-10/12 h-full py-[13px] flex justify-center ml-2 border-b-[1px] border-[#202C33]">
        <div className="w-10/12">
          <p>{otherUser?.name}</p>
          <p className="text-sm text-[#8696a0]">test de mensaje</p>
        </div>
        <div className="w-2/12 gap-y-1 flex flex-col justify-center items-center">
          <p className={`text-xs ${colorHour}`}>13:37</p>

          {quantityWithoutRead > 0 && (
            <div className="bg-[#00A884] w-5 h-5 rounded-full flex items-center justify-center text-xs text-black">
              <p>{quantityWithoutRead}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
