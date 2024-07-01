"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else if (window.scrollY < 100) {
        setIsScrolled(false)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  const scrollUp = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isScrolled &&
        <button className="fixed right-10 bottom-12 bg-titleColor opacity-80 px-2 py-3 rounded-lg z-50 duration-300 hover:bg-titleColorDark" onClick={scrollUp}>
          <span className="text-containerColor text-2xl">
            <BsArrowUp />
          </span>
        </button>
      }

    </>
  );
};
export default ScrollUp;
