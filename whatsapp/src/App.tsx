import Chat from "./components/chat/Chat";
import ChatList from "./components/chatList/Container";
import MainLayout from "./layouts/Main";

function App() {
  return (
    <>
      <MainLayout>
        <ChatList />
        <Chat />
      </MainLayout>
    </>
  );
}

export default App;
