import React from "react";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

const MessagePopUp = ({
  message,
  setShowMessagePopUp,
  itemAlreadyExistsAlert,
  showMessagePopUp,
}) => {
  useEffect(() => {
    console.log("MessagePopUp", showMessagePopUp);
    if (message) {
      const timer = setTimeout(() => setShowMessagePopUp(false), 5000);

      // Cleanup function to clear the timeout
      return () => clearTimeout(timer);
    }
  }, [showMessagePopUp]);

  return (
    <div
      className={`fixed top-2 z-20 rounded-md w-4/5 ${
        itemAlreadyExistsAlert
          ? "bg-red-300 text-red-600"
          : "bg-green-200 text-green-600"
      }`}
    >
      <div className={`py-2 px-4 flex items-center rounded-md justify-between`}>
        <div className="">{message}</div>

        <button onClick={() => setShowMessagePopUp(false)}>
          <IoClose />
        </button>
      </div>
      <div
        className={`transition-width w-full duration-300 animate-collapse mt-0.5 h-0.5 rounded-full`}
      ></div>
    </div>
  );
};

export default MessagePopUp;
