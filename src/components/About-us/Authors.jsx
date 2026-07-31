import React from "react";
import posts from "../../data/posts.json";
import AuthorCard from "./AuthorCard";

export default function Authors() {
  const postData = posts.posts;

  return (
    <>
      <div className="bg-[#101010] py-20">
        <div className="container   flex-col flex  items-center justify-center">
          <div className="text-center bg-amber-700/10 mx-auto w-fit text-white border border-amber-700 rounded-full p-1 px-4">
            <span className=" section-label text-orange-500 flex items-center gap-2 ">
              فريقنا
            </span>
          </div>
          <h1 className="text-white lg:leading-16 text-3xl font-bold text-center ">
            تعرف على كتابنا
          </h1>

          <p className="text-gray-400 text-center max-w-3xs md:max-w-3xl text-lg   ">
            فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
            المجتمع.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 mt-10 md:grid-cols-2 grid-cols-1 mx-auto gap-8 max-w-5xl">
          {postData.map((author) => {
            return <AuthorCard author={author} key={author.id} />;
          })}
        </div>
      </div>
    </>
  );
}
