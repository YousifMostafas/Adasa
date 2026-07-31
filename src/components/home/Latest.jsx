import React from "react";
import LatestCards from "./LatestCards";
import { Link } from "react-router-dom";

export default function Latest({ post, limit }) {
  return (
    <>
      <div className="bg-linear-to-l from-[#160E0A] to-[#0A0A0A] py-20">
        <div className="lg:w-[77%] w-[90%] mx-auto ">
          <div className="text-center bg-amber-700/10  w-fit text-white border border-amber-700 rounded-full p-1 px-4">
            <span className=" section-label text-orange-500 flex items-center gap-2 ">
              <span className="  w-2 h-2  bg-orange-500 rounded-full animate-pulse" />
              الأحدث
            </span>
          </div>
          <h2 className=" text-3xl lg:text-6xl text-white mt-4 font-bold">
            أحدث المقالات
          </h2>
          <div className="flex flex-wrap gap-3 justify-between mt-8 items-center">
            <p className="text-gray-400 text-lg">محتوى جديد طازج من المطبعة</p>
            <Link to="/discover">
              <span className="text-orange-500 hover:text-amber-500 cursor-pointer transition-all duration-300 text-sm w-full group md:w-auto">
                عرض جميع المقالات
                <i className="fa-solid duration-300 transition-all  group-hover:-translate-x-2.5 fa-arrow-left-long" />
              </span>
            </Link>
          </div>
          <div className="w-full   mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {post.slice(3, limit).map((posts) => {
                return <LatestCards posts={posts} key={posts.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
