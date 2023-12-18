import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SiCoffeescript } from "react-icons/si";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import Logo from "../assets/logo1.svg";
import AvatarImg from "../assets/img1.jpg";
import UserContext from "../Context/UserContext";

const Navbar = () => {
  const { selectedUser, setSelectedUser } = useContext(UserContext);
  let navigate = useNavigate();
  const location = useLocation();
  //nav items array
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Users", path: "/users" },
    { link: "Products", path: "/products" },
    { link: "Tasks", path: "/tasks" },
    { link: "Reporting", path: "/reporting" },
  ];
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div className="fixed w-full  z-10">
      <div>
        <div className=" h-[72px] flex flex-row justify-between p-5 lg:px-32 px-5 bg-[#6941C6] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row justify-between gap-8">
            <div className="flex flex-row items-center cursor-pointer gap-2">
              <span>
                <img src={Logo} alt="" />
              </span>
              <h1 className="text-xl flex items-end font-bold text-white">
                Stack
              </h1>
            </div>
            <nav className="hidden md:flex flex-row items-center text-base font-medium gap-8">
              {navItems?.map((singleNav, index) => (
                <Link
                  to={singleNav?.path}
                  key={index}
                  smooth={true}
                  duration={500}
                  className={`text-[#F4EBFF] group relative inline-block cursor-pointer hover:text-white ${
                    location?.pathname === singleNav?.path
                      ? "bg-[#7F56D9] py-2 px-3 rounded-md"
                      : ""
                  }`}
                >
                  {singleNav?.link}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <FaSearch size={20} color="white" />
            <IoSettingsOutline size={20} color="white" />

            <div className="dropdown dropdown-bottom ">
              <div
                tabIndex={0}
                role="button"
                className=" m-1 border-0 hover:bg-transparent"
              >
                <IoMdNotificationsOutline size={22} color="white" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-bottom ">
              <div
                tabIndex={0}
                role="button"
                className=" m-1 border-0 hover:bg-transparent"
              >
                <img src={AvatarImg} alt="" className="w-8 rounded-full" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
              >
                <li>
                  {selectedUser ? (
                    <button
                      onClick={() => {
                        setSelectedUser(null);
                        navigate("/");
                      }}
                      className="border-0 hover:bg-transparent"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link to="/signin">Login/Register</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} color="white" />
            ) : (
              <AiOutlineMenuUnfold
                size={25}
                onClick={handleChange}
                color="white"
              />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-[#6941C6] text-white left-0 top-16 font-semibold text-base text-center pt-8 pb-4 gap-8 w-full h-fit translate-transform duration-300`}
        >
          {navItems?.map((singleNav, index) => (
            <Link
              to={singleNav?.path}
              key={index}
              smooth={true}
              duration={500}
              className="text-white group relative inline-block cursor-pointer hover:text-white"
              onClick={closeMenu}
            >
              {singleNav?.link}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          ))}
          <div className="flex items-center gap-3 m-auto">
            <FaSearch size={20} color="white" />
            <IoSettingsOutline size={20} color="white" />

            <div className="dropdown dropdown-top">
              <div
                tabIndex={0}
                role="button"
                className=" m-1 border-0 hover:bg-transparent"
              >
                <IoMdNotificationsOutline size={22} color="white" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-top ">
              <div
                tabIndex={0}
                role="button"
                className=" m-1 border-0 hover:bg-transparent"
              >
                <img src={AvatarImg} alt="" className="w-8 rounded-full" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
              >
                <li>
                  {selectedUser ? (
                    <button
                      onClick={() => {
                        setSelectedUser(null);
                        navigate("/");
                      }}
                      className="border-0 hover:bg-transparent"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link to="/signin">Login/Register</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
          {/* <Button title="Login" /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
