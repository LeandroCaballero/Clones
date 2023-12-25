import { ReactNode, useEffect } from "react";
import { leftPanelControlStore } from "../store/panelControl";
import { Icon } from "@iconify/react";
import Perfil from "../components/leftPanel/Perfil";
import Community from "../components/leftPanel/Community";
import Channels from "../components/leftPanel/Channels";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { isOpen, type, changeLeftPanelState } = leftPanelControlStore();

  const getComponent = () => {
    switch (type) {
      case "perfil":
        return <Perfil />;
      case "communty":
        return <Community />;
      case "channels":
        return <Channels />;
      default:
        return <Perfil />;
    }
  };

  const getTitle = () => {
    switch (type) {
      case "perfil":
        return "Perfil";
      case "communty":
        return "Comunidades";
      case "channels":
        return "Canales";
      default:
        return "Perfil";
    }
  };

  return (
    <>
      <div className="grid grid-cols-10 relative">
        {/* Left sidebar */}
        <div
          className={`fixed w-[30%] h-screen bg-[#1F2C34] z-10 transition-all duration-150 ease-in-out ${
            isOpen ? "-translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-[110px] flex items-end">
            <div className="flex gap-x-7 text-[#D9DEE0] items-center px-7 py-4 w-full">
              <button onClick={() => changeLeftPanelState(false)}>
                <Icon icon="ph:arrow-left-bold" width={23} color="#D9DEE0" />
              </button>
              <p className="text-lg font-semibold">{getTitle()}</p>
              {type == "channels" && (
                <button className="p-1 ml-auto transition duration-150 ease-in-out focus:bg-[#374248] rounded-full">
                  <Icon icon="material-symbols:add" width={24} color="white" />
                </button>
              )}
            </div>
          </div>

          <div className="overflow-y-scroll sticky h-[calc(100vh-110px)] bg-[#111B21]">
            {getComponent()}
          </div>
        </div>

        {children}

        {/* Right sidebar */}
      </div>
    </>
  );
};

export default MainLayout;
