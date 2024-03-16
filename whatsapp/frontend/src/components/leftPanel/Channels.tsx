import River from "../../assets/channels/river.jpg";
import Boca from "../../assets/channels/boca.jpg";
import Conmebol from "../../assets/channels/conmebol.jpg";
import TN from "../../assets/channels/tn.jpg";
import TyC from "../../assets/channels/tyc.jpg";
import WhatsApp from "../../assets/channels/wpp.jpg";

const Channels = () => {
  const channels = [
    {
      name: "River Plate",
      image: River,
    },
    {
      name: "Boca Juniors",
      image: Boca,
    },
    {
      name: "Conmebol",
      image: Conmebol,
    },
    {
      name: "TyC Sports",
      image: TyC,
    },
    {
      name: "TN - Todo noticias",
      image: TN,
    },
    {
      name: "WhatsApp",
      image: WhatsApp,
    },
  ];

  return (
    <div className="text-white p-6">
      <p className="text-xl text-center">
        Conoce las últimas novedades de los temas que te interesan
      </p>
      <p className="text-center text-[#8696a0] text-lg my-3">
        A continuación, busca canales para seguir.
      </p>
      <div className="grid grid-cols-3 gap-x-2 items-start">
        {channels.map((channel) => (
          <div className="my-1 border-[1px] max-h-44 border-[#202C33] p-2 w-full rounded-xl flex flex-col justify-center items-center">
            <div className="relative mt-2">
              <img
                src={channel.image}
                alt=""
                className="rounded-full w-16 h-16"
              />
            </div>
            <p className="text-sm text-center mt-2 mb-1">{channel.name}</p>
            <button className="text-sm text-center text-[#00a884]">
              Seguir
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <button className="bg-[#00A884] transition duration-150 ease-in hover:bg-[#06CF9C] text-black text-sm rounded-full px-7 py-2 font-[500]">
          Buscar canales
        </button>
      </div>
    </div>
  );
};

export default Channels;
