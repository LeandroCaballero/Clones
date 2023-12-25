import { Icon } from "@iconify/react";
import FilterSVG from "../../assets/svg/Filter";
import { useState } from "react";

const Filter = () => {
  const [placeholder, setPlaceholder] = useState(
    "Busca un chat o inicia uno nuevo"
  );

  return (
    <div className="px-3 py-2 flex justify-between items-center bg-[#111B21]">
      <div className="bg-[#1F2C34] overflow-hidden w-11/12 flex items-center rounded-lg">
        <Icon
          className="w-2/12"
          icon="material-symbols:search"
          width="17"
          height="17"
          color="#A8B5BD"
        />
        <input
          type="text"
          className="w-10/12 text-sm px-1 py-2 bg-[#1F2C34]"
          placeholder={placeholder}
        />
      </div>

      <FilterSVG />
    </div>
  );
};

export default Filter;
