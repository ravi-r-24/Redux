import React from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../MultipleReducer/actions/Cart.js";
import { addToWishListAction } from "../../MultipleReducer/actions/WishList.js";
import { userActionTypeSelector } from "../../MultipleReducer/actions/UserActionTypeSelector.js";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";

const ProductCard = ({
  id,
  title,
  rate,
  price,
  image,
  wishListItem,
  addedToWishList,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="w-72 border border-slate-200 rounded-md mr-8 mb-12 shadow-lg cursor-pointer hover:shadow-2xl h-fit relative">
      <div className="px-2 py-3">
        <img src={image} className="w-full h-60 rounded-t-md" />
      </div>
      <div className="px-4 pb-4">
        <div className="font-semibold line-clamp-1">{title}</div>
        <div className="flex items-center justify-between py-1">
          <div
            className={`font-semibold ${
              !rate
                ? "hidden"
                : rate < 3
                ? "text-red-600"
                : rate < 4
                ? "text-yellow-400"
                : "text-green-500"
            }`}
          >
            {rate}
          </div>
          <div className="text-blue-400 font-semibold">$ {price}</div>
        </div>
        <div className="flex items-center justify-between mt-1">
          <button
            className="bg-slate-900 px-4 py-2 text-white text-sm rounded-md font-semibold"
            onClick={() => {
              dispatch(addToCartAction(id, 3));
              dispatch(userActionTypeSelector("Cart"));
            }}
          >
            Add to Cart
          </button>
          <button className="bg-orange-600 text-white px-4 py-2 text-sm rounded-md">
            Buy Now
          </button>
        </div>
      </div>
      <div
        className={`absolute top-2 right-2`}
        onClick={() => {
          dispatch(addToWishListAction(id));
          dispatch(userActionTypeSelector("WishList"));
        }}
      >
        {wishListItem ? (
          <MdOutlineFavorite color="red" size="28" />
        ) : (
          <GrFavorite color="red" size="24" />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
