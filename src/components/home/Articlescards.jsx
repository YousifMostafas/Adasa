import React from "react";
import { Link } from "react-router-dom";

export default function Articlescards({ post }) {
  return (
    <>
      <Link to={`/post/${post.id}`}>
        <div className="grid group grid-cols-1 md:grid-cols-2 mb-10 border transition-all duration-500 hover:border-amber-900 rounded-3xl lg:gap-y-4">
          <div className=" relative h-full rounded-t-3xl md:rounded-tl-none md:rounded-s-3xl overflow-hidden">
            <img
              className="object-cover h-62 md:h-full duration-700 transition-all rounded-t-3xl md:rounded-s-3xl md:rounded-tl-none group-hover:scale-110"
              src={post.image}
              alt="category_img"
            />

            <div className="text-center bg-linear-to-l from-[#F2AB00] to-amber-600 absolute top-5 right-5 lg:top-10 lg:right-10 w-fit text-white rounded-full py-1 px-3.5">
              <p
                className="text-sm font-medium
"
              >
                <i className="fa-solid fa-star fa-xs me-1" />
                مميز
              </p>
            </div>
          </div>
          <div className="bg-[#242424] rounded-b-3xl md:rounded-br-none  md:rounded-e-3xl  py-7 lg:py-10 px-4 lg:px-8">
            <div className="flex items-center gap-3 ">
              <div className="text-center bg-orange-800/20  w-fit text-orange-500 border border-amber-700 rounded-full py-1 px-2 lg:px-5">
                <p
                  className="text-sm font-medium
"
                >
                  {post.category}
                </p>
              </div>
              <p className="text-gray-300 text-sm font-light">
                {" "}
                <i className="fa-regular fa-clock" />
                {post.readTime}
              </p>
            </div>
            <h2 className=" text-xl ld:text-3xl group-hover:text-orange-500 duration-500 transition-all text-white font-bold mt-4">
              {post.title}
            </h2>
            <p className="text-gray-400 lg:text-start text-sm lg:text-lg mt-4 mb-5 lg:mb-40">
              {post.excerpt}
            </p>

            <div className="flex items-center flex-wrap gap-y-2 justify-between ">
              <div className="flex  gap-3">
                <div className="w-12 h-12 rounded-full ">
                  <img
                    className="object-cover rounded-full"
                    src={post.author.avatar}
                    alt="artist"
                  />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">
                    {post.author.name}
                  </h4>
                  <p className="text-gray-400 text-xs">{post.date}</p>
                </div>
              </div>
              <span className="text-orange-500 text-sm w-full md:w-auto">
                اقرأ المقال{" "}
                <i className="fa-solid duration-500 transition-all group-hover:ms-2 fa-arrow-left-long" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
