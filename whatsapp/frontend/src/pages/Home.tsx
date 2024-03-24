import { useQuery } from "@tanstack/react-query";
import ChatComponent from "../components/chat/Chat";
import ChatList from "../components/chatList/Container";
import MainLayout from "../layouts/Main";
import { Chat } from "../../types";
import Preview from "../components/chat/Preview";

const Home = () => {
  // const currentChat = useGetCachedQueryData("currentChat") as Chat;
  const currentChat = useQuery<Chat>({
    queryKey: ["currentChat"],
    enabled: false,
  });

  return (
    <>
      <MainLayout>
        <ChatList />
        {currentChat.data ? <ChatComponent /> : <Preview />}
      </MainLayout>
    </>
  );
};

export default Home;
