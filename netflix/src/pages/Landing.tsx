import AccountItem from "../components/AccountItem";
import add from "../assets/svg/add.svg";

const Landing = () => {
  let account = [
    { name: "Fabi", img: "1.png" },
    { name: "Lean", img: "2.png" },
    { name: "Niños", img: "kids.png" },
  ];
  return (
    <div className="bg-[#141414] h-screen flex flex-col justify-center items-center gap-y-7">
      <p className="text-5xl text-white text-center">
        ¿Quién está viendo ahora?
      </p>
      <div className="flex gap-x-7 mt-3">
        {account.map((account, index) => (
          <AccountItem account={account} key={index} />
        ))}
        <div className="group">
          <div className="hover:bg-[#E5E5E5] w-36 h-36 flex justify-center items-center rounded-md cursor-pointer">
            <img src={add} alt="" className="w-1/2 fill-[#808080]" />
          </div>
          <p className="text-center text-[#808080] font-semibold text-lg mt-2 group-hover:text-white">
            Agregar perfil
          </p>
        </div>
      </div>
      <button className="border border-[#808080] py-1 px-7 text-[#808080] mt-8 font-semibold">
        Administrar perfiles
      </button>
    </div>
  );
};

export default Landing;
