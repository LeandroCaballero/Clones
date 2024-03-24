import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Chat, User } from "../../../types";
import Avatar from "../../assets/me.jpg";
import { createChat } from "../../services/chatApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface Props {
  contact: User;
  currentUserId?: number;
}

const Contact = ({ contact, currentUserId }: Props) => {
  // const { data, refetch } = useQuery<Chat>({
  //   queryKey: ["currentChat"],
  //   queryFn: () =>
  //     createChat({
  //       users: [String(contact.id), String(currentUserId)],
  //       type: "Direct",
  //     }),
  //   enabled: false,
  //   retry: false,
  // });

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation<Chat>({
    mutationFn: () =>
      createChat({
        users: [String(contact.id), String(currentUserId)],
        type: "Direct",
      }),
    onSuccess: (data) => {
      queryClient.setQueryData(["currentChat"], data);
      navigate("/");
    },
    onError: (error) => {
      toast.error(String(error));
    },
  });

  const createNewChat = () => {
    mutation.mutate();
  };

  return (
    <div
      className="flex bg-[#111B21] px-1 hover:bg-[#202C33] cursor-pointer"
      onClick={createNewChat}
    >
      <div className="w-2/12 flex justify-center items-center">
        <img src={Avatar} alt="" className="rounded-full w-12 h-12" />
      </div>
      <div className="w-10/12 h-full py-[13px] flex justify-center ml-2 border-b-[1px] border-[#202C33]">
        <div className="w-10/12">
          <p>{contact.name}</p>
          {/* Estado */}
          {/* <p className="text-sm text-[#8696a0]">test de mensaje</p> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
