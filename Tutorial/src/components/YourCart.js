import React from "react";
import YourCartCard from "./YourCartCard";
import { FaSearch } from "react-icons/fa";

const YourCart = ({ items }) => {
  return (
    <div>
      <div className="flex w-full items-center justify-between px-8">
        <div className="text-slate-800 font-semibold text-3xl">Your Cart</div>
        <div className="flex items-center rounded-md w-96 shadow-md">
          <input
            type="input"
            className="outline-none rounded-l-md pl-4 w-full py-2 border border-slate-200 border-r-0"
            placeholder="Search..."
          />
          <button className="w-20 h-full border border-slate-900 flex items-center justify-center py-2 rounded-r-md bg-slate-900 text-white">
            <FaSearch fontSize={24} />
          </button>
        </div>
      </div>
      <div className="px-8 py-8">
        {items.map((item) => (
          <YourCartCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default YourCart;
