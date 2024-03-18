import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/constants";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(loginData),
      });

      const json = await response.json();

      if (response?.ok) {
        localStorage.setItem("user", JSON.stringify(json));
        navigate("/");
      } else {
        alert("ERROR DE LOGIN");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#1F2C34]">
      <form
        className="flex flex-col gap-y-3 border rounded-md p-3"
        onSubmit={login}
      >
        <div className="text-white text-center">Login</div>
        <input
          className="p-2 rounded-md"
          name="email"
          type="email"
          placeholder="Correo"
          onChange={handleInput}
          autoComplete="off"
        />
        <input
          className="p-2 rounded-md"
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={handleInput}
          autoComplete="off"
        />
        <button type="submit" className="rounded-md p-2 bg-green-500">
          Ingresar
        </button>
        {/* <Link className="rounded-md p-2 bg-green-500" to="/">
        Ingresar
      </Link> */}
      </form>
    </div>
  );
};

export default Login;
