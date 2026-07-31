import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isBlogActive = location.pathname.startsWith("/post/");
  const [expand, setExpand] = useState(false);
  return (
    <nav className="py-2.5 bg-black/95 z-50 fixed top-0 left-0 right-0 ">
      <div className="container">
        <div className="flex justify-around items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 ">
              <img
                className="object-cover"
                src="/src/assets/logo.png"
                alt="logo"
              />
            </div>
            <div>
              <h2 className="text-gray-200 font-medium text-xl">عدسة</h2>
              <p className="text-amber-600 text-xs lg:block hidden">
                عالم التصوير الفوتوغرافي
              </p>
            </div>
          </div>

          <div>
            <ul className="lg:flex hidden border-[#303030] bg-[#101010] items-center rounded-full p-2 border ">
              <li className="rounded-full text-gray-400 font-medium px-5 py-2.5 text-sm hover:text-white transition-all duration-300">
                <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                  الرئيسية
                </NavLink>
              </li>
              <li
                className={` rounded-full text-gray-400 font-medium px-5 py-2.5 text-sm hover:text-white transition-all duration-300 ${isBlogActive ? "active" : ""} `}
              >
                <NavLink onClick={() => window.scrollTo(0, 0)} to="/discover">
                  المدونة
                </NavLink>
              </li>
              <li className="rounded-full text-gray-400 font-medium px-5 py-2.5 text-sm hover:text-white transition-all duration-300">
                <NavLink onClick={() => window.scrollTo(0, 0)} to="/about">
                  من نحن
                </NavLink>
              </li>
            </ul>
          </div>
          <svg
            onClick={() => {
              setExpand(!expand);
            }}
            className="w-8 h-8  block text-neutral-400  lg:hidden "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <div className=" items-center hidden lg:flex">
            <button className="p-3 me-1.5 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#404040]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <button className="text-white text-sm font-bold hidden lg:block bg-orange-500 py-4 px-8 rounded-4xl hover:-translate-y-1 transition-all duration-300">
              ابدأ بالقراءة
            </button>
          </div>
        </div>
        {expand && (
          <ul className="  w-full flex lg:hidden flex-col  border-[#303030] bg-[#101010] items-center rounded-2xl p-2 border ">
            <li className="rounded-full w-full text-gray-400 font-medium px-5 py-2.5 text-sm hover:text-white transition-all duration-300">
              <NavLink
                className="block w-full px-5 py-2.5"
                to="/"
                onClick={() => window.scrollTo(0, 0)}
              >
                الرئيسية
              </NavLink>
            </li>
            <li
              className={` rounded-full w-full text-gray-400 font-medium px-5 py-2.5 text-sm hover:text-white transition-all duration-300 ${isBlogActive ? "active" : ""} `}
            >
              <NavLink
                className="block w-full px-5 py-2.5"
                onClick={() => window.scrollTo(0, 0)}
                to="/discover"
              >
                المدونة
              </NavLink>
            </li>
            <li className="rounded-full w-full text-gray-400 font-medium px-5 py-2.5 text-sm hover:text-white transition-all duration-300">
              <NavLink
                className="block w-full px-5 py-2.5"
                onClick={() => window.scrollTo(0, 0)}
                to="/about"
              >
                من نحن
              </NavLink>
            </li>
            <button className="text-white w-full text-sm font-bold mt-4  bg-orange-500 py-4 px-8 rounded-4xl hover:-translate-y-1 transition-all duration-300">
              ابدأ بالقراءة
            </button>
          </ul>
        )}
      </div>
    </nav>
  );
}
