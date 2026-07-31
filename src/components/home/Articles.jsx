import React from "react";
import Articlescards from "./Articlescards";
import { Link } from "react-router-dom";

export default function Articles({ posts, limit }) {
  return (
    <>
      <div className="bg-linear-to-l from-[#160E0A] to-[#0A0A0A] py-20">
        <div className="lg:w-[77%] w-[90%] mx-auto ">
          <div className="text-center bg-orange-800/20  w-fit text-white border border-amber-700 rounded-full p-2.5 px-7">
            <p
              className="text-sm font-medium
"
            >
              مميز
            </p>
          </div>
          <h2 className=" text-3xl lg:text-6xl text-white mt-4 font-bold">
            مقالات مختارة
          </h2>
          <div className="flex flex-wrap gap-3 justify-between mt-8 items-center">
            <p className="text-gray-400 text-lg">محتوى منتقى لبدء رحلة تعلمك</p>
            <Link to="/discover">
              <button className="text-white group font-bold w-auto  cursor-pointer justify-center flex items-center text-sm bg-orange-500 py-3 px-5 rounded-xl">
                عرض الكل{" "}
                <i className="fa-solid fa-angle-left   w-4 h-4 group-hover:-translate-x-1 transition-transform "></i>
              </button>
            </Link>
          </div>
          <div className="w-full   mt-10">
            {posts.slice(0, limit).map((post) => {
              return <Articlescards post={post} key={post.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
