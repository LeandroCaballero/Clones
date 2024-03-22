import { useQuery } from "@tanstack/react-query";
import ChatComponent from "../components/chat/Chat";
import ChatList from "../components/chatList/Container";
import MainLayout from "../layouts/Main";
import { Chat } from "../../types";
import Preview from "../components/chat/Preview";

const Home = () => {
  const { data } = useQuery<Chat>({
    queryKey: ["currentChat"],
  });

  return (
    <>
      <MainLayout>
        <ChatList />
        {data ? <ChatComponent /> : <Preview />}
      </MainLayout>
    </>
  );
};

export default Home;
