import { Icon } from "@iconify/react/dist/iconify.js"
import {
  iconLogoInvitation,
  translateInvitations,
  colorIconLogoInvitation,
  actionInvitation,
} from "../../utils/InvitationsUtils"

interface Props {
  invitation: {
    user: string
    typeInvitation: string
    timePublish: string | null
    typePage: string | null
    target: string
    image: string
  }
}

const Invitation = ({ invitation }: Props) => {
  return (
    <>
      <hr className="border-[#515253]" />
      <div className="px-5 py-3 flex justify-between">
        <div className="flex gap-x-2">
          <div className="relative">
            <img
              src={invitation.image}
              className={`w-[70px] ${
                invitation.typeInvitation == "Page" && "rounded-full"
              }`}
              alt=""
            />
            <div
              className={`absolute bottom-0 right-0 rounded-full p-2 ${
                colorIconLogoInvitation[invitation.typeInvitation]
              }`}
            >
              <Icon
                icon={iconLogoInvitation[invitation.typeInvitation]}
                className="w-4 h-4 "
              />
            </div>
          </div>
          <div className="text-[#B4B5B7] flex flex-col justify-center">
            <p className="text-sm">
              {translateInvitations[invitation.typeInvitation]} •{" "}
              {invitation.timePublish
                ? invitation.timePublish
                : invitation.typePage}
            </p>
            <p>
              <span className="text-white font-semibold pr-1">
                {invitation.user}
              </span>
              te ha invitado a {actionInvitation[invitation.typeInvitation]} a{" "}
              <span className="text-white font-semibold">
                {invitation.target}
              </span>
            </p>
          </div>
        </div>
        <div className="flex gap-x-3 items-center">
          <button className="rounded-sm py-1 px-2 transition-all duration-100 ease-linear hover:bg-[#44474B] font-[500]">
            Ignorar
          </button>
          <button className="border transition-all duration-100 ease-linear hover:bg-[#2C3D4E] border-[#71B7FB] text-[#71B7FB] font-[500] rounded-full py-1 px-4">
            Aceptar
          </button>
        </div>
      </div>
    </>
  )
}

export default Invitation
