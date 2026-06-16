import React from "react";
import { HeaderList } from "./HeaderList";
import { Link } from "react-router-dom";
import data from "../data/nav.json";

export const FlowBiteHeader = () => {
  const backToTop = document.getElementById("backToTop");
  backToTop?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div className="navbar sticky top-0 z-10 flex bg-base-100 shadow-lg shadow-gray-700/50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            {data.items.map((item) => (
              <HeaderList key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">EDWIN NG</Link>      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {data.items.map((item) => (
            <HeaderList key={item.id} item={item} />
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <label className="swap swap-flip text-xl">
          <input type="checkbox" />

          <div className="swap-on">😈</div>
          <div className="swap-off">😇</div>
        </label>
      </div>
    </div>
  );
};
