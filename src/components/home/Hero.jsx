import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <main className="min-h-screen pt-24 md:pt-15 bg-[#060606]">
      <div className="hero px-4 py-10">
        <div className="container   flex-col flex min-h-screen items-center justify-center">
          <div className="text-center bg-amber-700/10 mx-auto w-fit text-white border border-amber-700 rounded-full p-1 px-4">
            <span className=" section-label  flex items-center gap-2 ">
              <span className="  w-2 h-2  bg-orange-500 rounded-full animate-pulse" />
              مرحباً بك في عدسة
            </span>
          </div>
          <h1 className="text-white lg:leading-24 text-5xl lg:text-7xl font-bold text-center mt-6">
            اكتشف <span className="text-amber-400">فن</span> <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="text-gray-400 text-center max-w-3xs md:max-w-2xl text-xl lg:text-2xl  mt-6">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <div className="flex flex-wrap gap-2 mt-8 items-center">
            <Link className=" lg:w-auto w-full" to="/discover">
              <button className="text-white cursor-pointer  lg:w-auto w-full group font-bold  justify-center flex items-center bg-orange-500 py-4 px-8 rounded-4xl hover:-translate-y-1 transition-all duration-300">
                استكشف المقالات
                <svg
                  className="w-5 h-5 ms-2 group-hover:-translate-x-1 transition-transform rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </Link>
            <Link className=" lg:w-auto w-full" to="/about">
              <button className="text-white cursor-pointer lg:w-auto w-full group font-bold flex items-center justify-center bg-transparent py-4 px-8 rounded-4xl hover:text-orange-500 hover:border-orange-500 border border-gray-700 transition-all duration-300">
                <svg
                  className="w-5 h-5 me-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                اعرف المزيد
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl  mt-10 mx-auto">
            <div className="p-4 px-10 rounded-3xl text-center hover:scale-105 transition-all duration-300 bg-[#161616] border border-[#262626]">
              <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1" />
              <p className="text-orange-500 text-2xl font-bold">+50</p>
              <p className="text-orange-500  ">مقالة</p>
            </div>
            <div className="p-4 px-10 rounded-3xl text-center hover:scale-105 transition-all duration-300 bg-[#161616] border border-[#262626]">
              <i className="fa-solid fa-users text-2xl text-orange-500 mb-1" />
              <p className="text-orange-500 text-2xl font-bold">+10ألف</p>
              <p className="text-orange-500  ">قارئ</p>
            </div>
            <div className="p-4 px-10 rounded-3xl text-center hover:scale-105 transition-all duration-300 bg-[#161616] border border-[#262626]">
              <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>
              <p className="text-orange-500 text-2xl font-bold">4</p>
              <p className="text-orange-500  ">تصنيفات</p>
            </div>
            <div className="p-4 px-10 rounded-3xl text-center hover:scale-105 transition-all duration-300 bg-[#161616] border border-[#262626]">
              <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1" />
              <p className="text-orange-500 text-2xl font-bold">6</p>
              <p className="text-orange-500  ">تصنيفات</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
