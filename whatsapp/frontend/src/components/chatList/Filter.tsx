import { Icon } from "@iconify/react";
import FilterSVG from "../../assets/svg/Filter";
import { useEffect, useState } from "react";
import { filterContactsStore } from "../../store/users";
import { useQuery } from "@tanstack/react-query";
import { User } from "../../../types";
import { fetchUsers } from "../../services/userApi";

const Filter = () => {
  const { setContactsFiltered } = filterContactsStore();
  const { data } = useQuery<User[]>({
    queryKey: ["contacts"],
    queryFn: fetchUsers,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const currentUser = useQuery<User>({ queryKey: ["currentUser"] });

  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    if (data) filterUsers();
  }, [inputSearch]);

  if (data && data?.length < 1) {
    console.log("Sin contactos");
    // return <p>Sin contactos</p>;
  }

  const filterUsers = () => {
    console.log("FILTER", currentUser);
    const usersFiltered = data?.filter(
      (user) =>
        user.name.toLowerCase().includes(inputSearch.toLowerCase()) &&
        inputSearch != "" &&
        currentUser.data?.id != user.id
    );

    if (usersFiltered) setContactsFiltered(usersFiltered);
  };

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
          className="w-10/12 text-sm px-1 py-2 bg-[#1F2C34] outline-none"
          placeholder="Busca un chat o inicia uno nuevo"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </div>

      <FilterSVG />
    </div>
  );
};

export default Filter;
