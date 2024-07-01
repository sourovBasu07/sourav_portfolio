"use client"

import Link from "next/link";
import { BsArrowDown } from "react-icons/bs";

const ScrollDown = () => {
  const scrollDown = () => {
          window.scrollTo({
            top: 700,
            behavious: "smooth",
          })
  }
  return (
    <div className="hidden md:block ml-40" onClick={scrollDown}>
      <div className="home__scroll-button button--flex">
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            d="M123.359,79.775l0,72.843"
            className="animate-scroll_animate fill-none stroke-titleColor stroke-[20px]"
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            className="fill-none stroke-titleColor stroke-[20px]"
          ></path>
        </svg>

        <span className="text-titleColor font-medium mr-1 ml-0.5">
          Scroll Down
        </span>
        <BsArrowDown size="1.255rem" color="hsl(0, 0%, 20%)" />
      </div>
    </div>
  );
};
export default ScrollDown;
