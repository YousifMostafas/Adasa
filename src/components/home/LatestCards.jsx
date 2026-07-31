import React from "react";
import { Link } from "react-router-dom";

export default function LatestCards({ posts }) {
  return (
    <>
      <Link to={`/post/${posts.id}`}>
        <div className="flex-col group hover:-translate-y-1.5 border hover:border-[#303030] duration-700 transition-all rounded-t-3xl rounded-b-3xl ">
          <div className=" overflow-hidden rounded-t-3xl relative h-52">
            <img
              className="object-cover h-full group-hover:scale-110 duration-700 transition-all"
              src={posts.image}
              alt="product"
            />

            <div className="text-center absolute top-7 text-sm font-bold bg-black/70 right-7 w-fit text-white rounded-full py-1 px-3.5">
              <p>{posts.category}</p>
            </div>
          </div>
          <div className="rounded-b-3xl p-6 bg-[#161616]">
            <div className="flex items-center gap-5 ">
              <p className="text-gray-400 text-sm font-light">
                {" "}
                <i className="fa-regular fa-clock" />
                {posts.readTime}
              </p>

              <p className="text-gray-400 text-sm  font-light">{posts.date}</p>
            </div>

            <h3 className="mt-4 text-white group-hover:text-orange-500 duration-700 transition-all text-xl font-bold max-w-2xs">
              {posts.title}
            </h3>
            <p className="text-sm text-gray-500 mt-3 pb-4  border-b border-[#252525]">
              {posts.excerpt}
            </p>

            <div className="flex items-center mt-4 flex-wrap gap-y-2 justify-between ">
              <div className="flex   gap-3">
                <div className="w-12 h-12 rounded-full ">
                  <img
                    className="object-cover rounded-full"
                    src={posts.author.avatar}
                    alt="artist"
                  />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">
                    {posts.author.name}
                  </h4>
                  <p className="text-gray-500 text-xs">{posts.author.role}</p>
                </div>
              </div>
              <div className="bg-amber-600/20 group-hover:text-white group-hover:bg-orange-500 duration-700 transition-all text-orange-500 flex justify-center items-center rounded-full h-9 w-9">
                <i className="fa-solid fa-angle-left" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
