import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import logo from "../Images/logo.png";

const Header = ({ data }) => {
  return (
    <div
      className={`flex sticky bg-white items-center justify-between h-24 z-10 px-8`}
    >
      {/* Title */}
      <div className="font-semibold text-slate-800 text-2xl">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Search Bar */}
      <div className="shadow-md flex rounded-full">
        <input
          type="search"
          placeholder="Search products..."
          className="border border-slate-100 border-r-0 outline-none rounded-l-full pl-5 pr-2 py-2 w-96"
        />
        <button className="rounded-r-full border border-slate-100 px-6 bg-slate-800 text-xl text-bold text-white border-l-0 flex items-center py-2">
          <IoIosSearch />
        </button>
      </div>

      {/* Cart section */}
      {/*  IMPORTANT: Please be aware with cart item indicator position before adding new item to right section */}
      <div className=" relative">
        <button className="text-4xl text-slate-600">
          <IoCartOutline />
        </button>
        <div
          className={`absolute right-0 -top-1 bg-red-700 text-white rounded-full text-[8px] font-bold w-5 h-5 flex items-center justify-center ${
            data.length === 0 ? "hidden" : "flex"
          }`}
        >
          {data.length}
        </div>
      </div>
    </div>
  );
};

export default Header;
