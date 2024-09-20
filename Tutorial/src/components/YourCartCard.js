import React from "react";
import { useDispatch } from "react-redux";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { removeItemFromCart } from "../../MultipleReducer/actions/Cart.js";

const YourCartCard = ({
  id,
  image,
  quantity = 10000,
  title,
  description,
  price,
  category,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className=" grid grid-cols-12 h-64 my-4 rounded-md shadow-md border">
        <div className="col-span-2 flex items-center justify-center pl-4">
          <img src={image} alt="" className="w-60 h-52" />
        </div>
        <div className="col-span-10 flex">
          <div className="w-9/12 px-8 py-6">
            <div className="text-slate-800 text-xl font-bold font-nunito-sans">
              {title}
            </div>
            <div className="text-lg text-orange-500 font-semibold font-nunito-sans">
              {category}
            </div>
            <div className="line-clamp-2 mt-4 text-slate-600">
              {description}
            </div>
            <div className="space-x-6">
              <div className="text-sm font-nunito-sans px-4 py-0.5 bg-orange-50 text-orange-600 inline-block mt-6 rounded-sm">
                Free Delivery
              </div>
              <div className="text-sm font-semibold font-nunito-sans px-4 py-0.5 bg-green-100 text-green-600 inline-block mt-6 rounded-sm">
                In Stock
              </div>
            </div>
          </div>
          <div className="w-3/12 px-4 pt-6 pb-2 relative">
            <div className="flex items-center justify-between border-b border-slate-500 pb-3 border-dashed">
              <div className="flex items-center border border-slate-900 rounded-lg">
                <button className="font-bold rounded-l-md bg-slate-900 p-2 text-white text-xl">
                  <RiSubtractFill />
                </button>
                <span className="px-3 text-xl text-slate-950 font-semibold font-nunito-sans">
                  {quantity}
                </span>
                <button className="font-bold bg-slate-900 p-2 text-white text-xl rounded-r-md">
                  <IoMdAdd />
                </button>
              </div>
              <button
                className="text-red-500 text-2xl"
                onClick={() => dispatch(removeItemFromCart(id))}
              >
                <RiDeleteBinFill />
              </button>
            </div>

            <div className="text-lg flex justify-end font-semibold font-nunito-sans text-slate-500 mt-2">
              Price:{" "}
              <span className="text-slate-800 font-nunito-sans font-bold">
                ${price}
              </span>
            </div>

            <div className="flex justify-end font-semibold font-nunito-sans pb-3 border-b pt-1 text-slate-500 border-dashed">
              Quantity: <span className="ml-1 text-slate-900">85</span>
            </div>

            <div className="flex justify-between font-semibold font-nunito-sans text-lg py-2">
              Total: <span>$: 233</span>
            </div>

            <button className="w-full bg-slate-900 py-2 font-bold font-nunito-sans text-sm text-white rounded-md">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourCartCard;
