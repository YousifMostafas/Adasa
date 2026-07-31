import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#101010] pt-24">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-orange-500 text-9xl font-extrabold text-center">
          404
        </h2>
        <div className="relative w-28 h-28 mx-auto  my-8">
          <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-500/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-14 h-14 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-lg rotate-12 animate-bounce" />
          <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse" />
        </div>
        <h3 className="text-white text-3xl text-center font-bold">
          عفواً! الصفحة غير موجودة
        </h3>
        <p className="text-gray-400/70 font-semibold max-w-lg text-center text-lg mt-4 ">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
          الصحيح.
        </p>
      </div>
      <div className="flex flex-col mt-6 sm:flex-row justify-center gap-4 mb-12">
        <Link onClick={() => window.scrollTo(0, 0)} to="/">
          <button className="text-white font-bold w-full md:w-auto bg-orange-500 py-4 px-8 rounded-4xl hover:-translate-y-0.5 transition-all duration-300">
            <i className="fa-regular fa-house" />
            الذهاب للرئيسية
          </button>
        </Link>

        <Link onClick={() => window.scrollTo(0, 0)} to="/discover">
          <button className="text-white group font-bold flex items-center lg:w-auto w-full justify-center bg-transparent py-4 px-8 rounded-4xl hover:text-orange-500 hover:border-orange-500 border border-gray-700 transition-all duration-300">
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
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            تصفح المقالات
          </button>
        </Link>
      </div>

      <p className="text-sm text-gray-400/50 text-center">قد تجد هذه مفيدة:</p>

      <div className="flex justify-center mt-4 items-center gap-5">
        <Link onClick={() => window.scrollTo(0, 0)} to="/discover">
          <p className="text-sm text-orange-500">المدونة</p>
        </Link>
        <Link onClick={() => window.scrollTo(0, 0)} to="/about">
          <p className="text-sm text-orange-500">من نحن</p>
        </Link>
        <Link onClick={() => window.scrollTo(0, 0)} to="/privacy">
          <p className="text-sm text-orange-500">الخصوصية</p>
        </Link>
      </div>
    </div>
  );
}
