import React from "react";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef } from "react";

const MessagePopUp = ({
  showPopUp,
  setShowPopUp,
  message,
  alreadyExist,
  setMessagePopUpHeight,
}) => {
  useEffect(() => {
    if (showPopUp) {
      setTimeout(() => setShowPopUp(false), 3000);
    }
  }, [showPopUp]);

  const messagePopUpContainer = useRef(null);
  useEffect(() =>
    setMessagePopUpHeight(messagePopUpContainer.current.offsetHeight)
  );

  console.log(message);
  return (
    <div className="fixed top-2 z-20 w-4/5 " ref={messagePopUpContainer}>
      <div
        className={`${
          alreadyExist
            ? "bg-red-200 text-red-900"
            : "bg-green-200 text-green-800"
        } ${
          showPopUp ? "flex" : "hidden"
        } py-2 px-4 rounded-md text-white justify-between`}
      >
        <div>{message}</div>

        <button
          className={`${alreadyExist ? "text-red-700" : "text-green-700"}`}
          onClick={() => setShowPopUp(false)}
        >
          <IoClose />
        </button>
      </div>
      <div
        className={`transition-width w-full duration-300 animate-collapse mt-0.5 h-0.5 ${
          alreadyExist ? "bg-red-400" : "bg-green-400"
        } rounded-full ${showPopUp ? "block" : "hidden"}`}
      ></div>
    </div>
  );
};

export default MessagePopUp;
