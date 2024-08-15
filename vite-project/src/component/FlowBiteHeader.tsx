import React from "react";

import "tailwindcss/tailwind.css";
import { HeaderList } from "./HeaderList";
import data from "../data/nav.json";

//import a json file

export const FlowBiteHeader = () => {
  // console.log(data);
  //loop the json and log
  // data.items.forEach((item) => {
  //   console.log(item.id);
  // });
  // console.log('data.items length:', data.items.length);
  // https://daisyui.com/components/navbar/

  //on click, scroll to top
  const backToTop = document.getElementById("backToTop");
  backToTop?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  );

  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {data.items.map((item) => (
              <HeaderList key={item.id} item={item} />
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">EDWIN NG</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li> */}
          {data.items.map((item) => (
            <HeaderList key={item.id} item={item} />
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn" id="backToTop">Back to top</a>
      </div>
    </div>
  );
};
