import { Icon } from "@iconify/react";
import FilterSVG from "../../assets/svg/Filter";
import { useEffect, useState } from "react";
import { filterContactsStore } from "../../store/users";
import { API_URL } from "../../utils/constants";

const Filter = () => {
  const { initialContacts, setContactsFiltered, setInitialContacts } =
    filterContactsStore();

  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL + "users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setInitialContacts(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    const filterUsers = () => {
      const usersFiltered = initialContacts.filter((user) =>
        user.name.toLowerCase().includes(inputSearch.toLowerCase())
      );
      setContactsFiltered(usersFiltered);
    };

    if (inputSearch.length > 0) {
      if (initialContacts.length === 0) {
        fetchData();
      } else {
        filterUsers();
      }
    }
  }, [inputSearch, initialContacts, setInitialContacts, setContactsFiltered]);

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
