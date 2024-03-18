import { useState, useEffect, ReactNode, createContext } from "react";
import { API_URL } from "../../utils/constants";
import { useCookies } from "react-cookie";
import { User } from "../../../types";
import { useNavigate } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

const AuthContext = createContext<{
  currentUser?: User;
  logout?: () => void;
}>({});

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState();
  const [tokenCookie] = useCookies(["wptoken"]);

  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn();
  }, []);

  const isLoggedIn = async () => {
    try {
      if (tokenCookie) {
        const response = await fetch(`${API_URL}/status`, {
          headers: {
            Authorization: `Bearer ${tokenCookie}`,
          },
        });

        if (response?.ok) {
          const json = await response.json();
          if (json) {
            setCurrentUser(json);
          }
        } else {
          setCurrentUser(undefined);
          navigate("/login", { replace: true });
        }
      }
    } catch (e) {
      console.log(`is logged in error ${e}`);
      setCurrentUser(undefined);
      navigate("/login", { replace: true });
    }
  };

  const logout = () => {
    setCurrentUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ currentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
