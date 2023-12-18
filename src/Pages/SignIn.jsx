import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import UserContext from "../Context/UserContext";

const SignIn = () => {
  const { selectedUser, setSelectedUser } = useContext(UserContext);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: data?.email,
        password: data?.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.token) {
          navigate("/users");
          setSelectedUser(data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="min-h-screen flex flex-col justify-center ">
      <div className=" text-start shadow shadow-3xl p-16 rounded-2xl w-[444] h-[576] m-auto items-center ">
        <div className="pt-6  mb-12 bg-transparent border-b-0 rounded-t-2xl">
          <div className="flex flex-row mb-5">
            <img src={logo} alt="" className="w-12  h-11" />
            <h3 className="flex items-end font-bold text-3xl text-textColor2 ">
              Stack
            </h3>
          </div>

          <p className="mb-0 text-xl text-textColor font-semibold">
            Sign In to join with Stack
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="mb-2 ml-1 font-bold text-sm font-medium text-gray-700 text-shadow-custom">
            Email
          </label>
          <div className="mb-4">
            <input
              type="email"
              className={`${
                errors?.email ? "error-input-style" : "input-style"
              }`}
              placeholder="Email"
              {...register("email", {
                required: "Please enter your email address",
                // pattern: {
                //   value:
                //     /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/,
                //   message: "Invalid email address",
                // },
              })}
            />
            <span className="error-text">{errors?.email?.message}</span>
          </div>
          <label className="mb-2 ml-1 font-bold text-xs text-slate-700">
            Password
          </label>
          <div className="mb-4">
            <input
              type="password"
              className={`${
                errors?.password ? "error-input-style" : "input-style"
              }`}
              placeholder="Password"
              {...register("password", {
                required: "Please enter your email address",
              })}
            />
            <span className="error-text">{errors?.password?.message}</span>
          </div>

          <div className="text-center">
            <button type="submit" className="sign-btn">
              Sign In
            </button>
          </div>
        </form>
        <p className="text-base text-[#B0B7C3] font-medium mt-7">
          Already have an account?
          <Link to="/signup" className="text-[#377DFF]">
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignIn;
