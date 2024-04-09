import React from "react";

interface Props {
  account: {
    name: string;
    img: string;
  };
}

const AccountItem = ({ account }: Props) => {
  return (
    <div className="group cursor-pointer">
      <img
        className="w-36 h-36 hover:border-2 rounded-md"
        src={`/accounts/${account.img}`}
      />
      <p className="text-center text-[#808080] font-semibold text-lg mt-2 group-hover:text-white">
        {account.name}
      </p>
    </div>
  );
};

export default AccountItem;
