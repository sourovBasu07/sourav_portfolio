"use client";

import { useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false);
  return (
    <button className="fixed right-10 bottom-12 bg-titleColor opacity-80 px-2 py-3 rounded-lg z-50 duration-300 hover:bg-titleColorDark">
      <span className="text-containerColor text-2xl">
        <BsArrowUp />
      </span>
    </button>
  );
};
export default ScrollUp;
