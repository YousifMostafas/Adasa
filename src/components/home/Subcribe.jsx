import React from "react";

export default function Subcribe() {
  return (
    <>
      <div className=" py-20 bg-[linear-gradient(to_bottom,#2b170d_0%,#15110f_20%,#0A0A0A_45%,#060606_100%)]  w-full bg-linear-90  ">
        <div className="lg:w-[50%]  w-[%90] mx-auto py-16  bg-[#202020] border border-[#353535] rounded-2xl">
          <div className="w-14 h-14 rounded-xl bg-orange-600 text-white mx-auto flex items-center justify-center">
            <i className="fa-regular fa-envelope fa-xl" />
          </div>
          <h2 className="text-white text-4xl text-center font-bold mt-3">
            اشترك في{" "}
            <span className="bg-linear-to-l from-orange-400 to-orange-600 bg-clip-text text-transparent">
              نشرتنا الإخبارية
            </span>
          </h2>
          <p className="text-gray-400 mt-3 text-center">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </p>

          <div className="mt-4 flex justify-center gap-4">
            <input
              className="placeholder-[#505050] w-[45%] px-2.5 focus:outline-none  text-white focus:border-amber-600 py-3 rounded-xl bg-[#101010] border-gray-700 border"
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
            />
            <button className="text-white group font-bold w-auto hover:bg-orange-700 cursor-pointer transition-all duration-300  justify-center flex items-center text-sm bg-orange-500 py-3 px-7 rounded-xl">
              اشترك الآن
            </button>
          </div>
          <div className="flex gap-3.5 items-center justify-center mt-5">
            <div className="flex items-center gap-1 ">
              <div className="w-7 h-7 rounded-full">
                <img
                  className="object-cover rounded-full"
                  src="/src/assets/person1.jpg"
                  alt="person"
                />
              </div>
              <div className="w-7 h-7 rounded-full">
                <img
                  className="object-cover rounded-full"
                  src="/src/assets/person2.jpg"
                  alt="person"
                />
              </div>
              <div className="w-7 h-7 rounded-full">
                <img
                  className="object-cover rounded-full"
                  src="/src/assets/person3.jpg"
                  alt="person"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500">
              انضم لـ <span className="text-white">+10,000</span> مصور
            </p>
            <p className="text-sm text-gray-500">بدون إزعاج</p>
            <p className="text-sm text-gray-500">إلغاء الاشتراك في أي وقت</p>
          </div>
        </div>
      </div>
    </>
  );
}
