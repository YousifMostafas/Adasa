import React from "react";

export default function Us() {
  return (
    <section className="bg-[#080808] pt-32 md:pt:24 xl:pt-0">
      <div className="container   flex-col flex min-h-screen items-center justify-center">
        <div className="text-center bg-amber-700/10 mx-auto w-fit text-white border border-amber-700 rounded-full p-1 px-4">
          <span className=" section-label text-orange-500 flex items-center gap-2 ">
            <span className="  w-2 h-2  bg-orange-500 rounded-full animate-pulse" />
            من نحن
          </span>
        </div>
        <h1 className="text-white lg:leading-24 text-4xl lg:text-6xl font-bold text-center mt-6">
          مهمتنا هي{" "}
          <span className="bg-linear-to-l  from-orange-400 to-orange-600 bg-clip-text text-transparent">
            الإعلام والإلهام
          </span>
        </h1>

        <p className="text-gray-400 text-center max-w-3xs md:max-w-3xl text-xl   mt-6">
          مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
          ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
          المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl  mt-10 mx-auto">
          <div className="p-6 px-16 rounded-3xl text-center  bg-[#161616] border border-[#262626]">
            <i className="fa-solid fa-users text-orange-500 text-2xl mb-1" />
            <p className="text-amber-500 text-3xl font-bold">+2مليون</p>
            <p className="text-gray-500 mt-1.5 ">قارئ شهرياً</p>
          </div>
          <div className="p-6 rounded-3xl text-center  bg-[#161616] border border-[#262626]">
            <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1" />
            <p className="text-amber-500 text-3xl font-bold">+500</p>
            <p className="text-gray-500 mt-1.5 ">مقالة منشورة</p>
          </div>
          <div className="p-6 rounded-3xl text-center bg-[#161616] border border-[#262626]">
            <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1" />

            <p className="text-amber-500 text-3xl font-bold">+50</p>
            <p className="text-gray-500  mt-1.5 ">كاتب خبير</p>
          </div>
          <div className="p-6 rounded-3xl text-center  bg-[#161616] border border-[#262626]">
            <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>

            <p className="text-amber-500 text-3xl font-bold">+15</p>
            <p className="text-gray-500 mt-1.5 ">تصنيف</p>
          </div>
        </div>
      </div>
    </section>
  );
}
