import React from "react";

export default function Our() {
  return (
    <>
      <div className="py-10 bg-[#141414]">
        <h2 className="text-xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <span className="w-1.5 h-8 bg-linear-to-b from-orange-500 to-yellow-500 rounded-full" />
          قيمنا
          <span className="w-1.5 h-8 bg-linear-to-b from-yellow-500 to-orange-500 rounded-full" />
        </h2>
        <p className="text-center text-gray-400">
          المبادئ التي توجه كل ما نقوم بإنشائه
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl  mt-10 mx-auto">
          <div className="p-6 rounded-3xl text-center group hover:bg-amber-700/15 hover:border-orange-500 duration-300 transition-all  bg-[#181818] border border-[#262626]">
            <i className="fa-solid fa-bullseye text-orange-500 text-4xl " />
            <p className="text-white group-hover:text-orange-500 duration-300 transition-all text-lg font-bold mt-3">
              الجودة أولاً
            </p>
            <p className="text-gray-500 mt-1.5 text-sm ">
              محتوى مدروس ومكتوب بخبرة
            </p>
          </div>
          <div className="p-6 rounded-3xl text-center group hover:bg-amber-700/15 hover:border-orange-500 duration-300 transition-all   bg-[#181818] border border-[#262626]">
            <i className="fa-solid fa-bolt text-orange-500 text-4xl" />
            <p className="text-white group-hover:text-orange-500 duration-300 transition-all text-lg mt-3 font-bold">
              تركيز عملي
            </p>
            <p className="text-gray-500 text-sm mt-1.5 ">
              أمثلة واقعية يمكنك تطبيقها اليوم
            </p>
          </div>
          <div className="p-6 rounded-3xl text-center group hover:bg-amber-700/15 hover:border-orange-500 duration-300 transition-all  bg-[#181818] border border-[#262626]">
            <i className="fa-solid fa-handshake text-4xl text-orange-500" />
            <p className="text-white group-hover:text-orange-500 duration-300 transition-all mt-3 text-lg font-bold">
              المجتمع
            </p>
            <p className="text-gray-500 text-sm  mt-1.5 ">
              تعلم مع آلاف المصورين
            </p>
          </div>
          <div className="p-5 py-6 rounded-3xl text-center group hover:bg-amber-700/15 hover:border-orange-500 duration-300 transition-all  bg-[#181818] border border-[#262626]">
            <i className="fa-solid fa-rotate text-4xl text-orange-500" />
            <p className="text-white group-hover:text-orange-500 duration-300 transition-all text-lg mt-3 font-bold">
              دائماً محدث
            </p>
            <p className="text-gray-500 text-sm mt-1.5 ">
              أحدث الاتجاهات وأفضل الممارسات
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
