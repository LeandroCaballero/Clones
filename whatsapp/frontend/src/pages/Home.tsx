import Chat from "../components/chat/Chat";
import ChatList from "../components/chatList/Container";
import MainLayout from "../layouts/Main";

const Home = () => {
  return (
    <>
      <MainLayout>
        <ChatList />
        <Chat />
      </MainLayout>
    </>
  );
};

export default Home;
