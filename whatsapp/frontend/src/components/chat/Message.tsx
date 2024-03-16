import { Message, User } from "../../../types";

interface Props {
  message: Message;
  currentUser?: User;
}

const MessageComponent = ({ message, currentUser }: Props) => {
  const { text, user } = message;

  return (
    <div
      className={`w-fit bg-[#005C4B] opacity-100 rounded-md p-2 ${
        currentUser?.name == user?.name ? "ml-auto" : "ml-0"
      }`}
    >
      <p className="text-sm text-white relative z-10">{text}</p>
    </div>
  );
};

export default MessageComponent;
