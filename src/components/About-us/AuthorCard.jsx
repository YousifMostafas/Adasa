import React from "react";

export default function AuthorCard({ author }) {
  return (
    <>
      <div className="flex-col flex justify-center group/image text-center border hover:border-amber-600/20 duration-300 transition-all items-center rounded-2xl bg-[#202020] py-10 px-4">
        <div>
          <img
            className="w-27 h-27 rounded-full group-hover/image:border-orange-500/20  border-[#303030]/20 border-4 duration-300 transition-all "
            src={author.author.avatar}
            alt="author"
          />
        </div>
        <div className="mt-5">
          <h4 className="text-white">{author.author.name}</h4>
          <p className="text-sm text-orange-500">{author.author.role}</p>
        </div>

        <div className="flex justify-center items-center mt-3 gap-3">
          <div className="w-9 h-9 rounded-xl p-2 group hover:bg-orange-500 duration-300 transition-all bg-[#252525] flex items-center justify-center">
            <i className="fa-brands fa-square-x-twitter group-hover:text-white duration-300 transition-all text-gray-600 text-xl" />
          </div>
          <div className="w-9 h-9 rounded-xl p-2 group hover:bg-[#454545] duration-300 transition-all bg-[#252525] flex items-center justify-center">
            <i className="fa-brands fa-github group-hover:text-white duration-300 transition-all text-gray-600 text-xl" />
          </div>
          <div className="w-9 h-9 rounded-xl p-2 group hover:bg-blue-700 duration-300 transition-all bg-[#252525] flex items-center justify-center">
            <i className="fa-brands fa-linkedin group-hover:text-white duration-300 transition-all text-gray-600 text-xl" />
          </div>
        </div>
      </div>
    </>
  );
}
