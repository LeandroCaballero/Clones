import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/authApi";
import { User } from "../../../types";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  // const { isLoading, data, refetch } = useQuery<User>({
  //   queryKey: ["currentUser"],
  //   queryFn: () => login(loginData),
  //   enabled: false,
  //   retry: false,
  //   onError: (error) => toast.error(String(error)),
  // });
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => login(loginData),
    onSuccess: (data) => {
      console.log("desde el login", data);
      queryClient.setQueryData(["currentUser"], data);
      navigate("/");
    },
    onError: (error) => {
      toast.error(String(error));
    },
  });

  const submitLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setLoginData({ ...loginData, [name]: value });
  };

  // if (isError) {
  //   console.log(error);
  //   // return <span>Error en el login...</span>;
  // }

  // if (data) {
  //   return <Navigate replace={true} to={"/"} />;
  // }

  return (
    <div className="h-screen flex items-center justify-center bg-[#1F2C34]">
      <form
        className="flex flex-col gap-y-3 border rounded-md p-3"
        onSubmit={submitLogin}
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
        <button
          type="submit"
          className="rounded-md p-2 bg-green-500"
          disabled={mutation.isPending}
        >
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
