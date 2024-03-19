import SelectChatSVG from "../../assets/svg/SelectChat";

const Preview = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-y-10 text-white bg-[#222E35] col-span-7 overflow-y-hidden border-r-[1px] border-white">
      <SelectChatSVG />
      <div className="text-center flex flex-col gap-y-4">
        <p className="text-4xl font-light">WhatsApp Web</p>
        <p className="text-[#A8B5BD] text-sm">
          Esto es un clon de WhatsApp Web, selecciona un chat para empezar
          &#128512;
        </p>
      </div>
    </div>
  );
};

export default Preview;
