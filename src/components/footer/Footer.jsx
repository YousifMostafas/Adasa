import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#101010] border-t border-gray-500/40">
        <div className=" w-[80%] mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6 group">
                <div className="w-11 h-11 bg-orange-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-bold text-xl">ع</span>
                </div>
                <span className="text-xl font-bold text-white">عدسة</span>
              </div>
              <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
              <div className="flex gap-2">
                <a
                  href="https://twitter.com/adasah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#161616] border border-[#262626]   hover:bg-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-x-twitter" />
                </a>
                <a
                  href="https://github.com/adasah"
                  target="_blank"
                  className="w-10 h-10 bg-[#161616] border border-[#262626]  hover:bg-orange-500  hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-github" />
                </a>
                <a
                  href="https://linkedin.com/company/adasah"
                  target="_blank"
                  className="w-10 h-10 bg-[#161616] border border-[#262626]  hover:bg-orange-500  hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a
                  href="https://youtube.com/@adasah"
                  target="_blank"
                  className="w-10 h-10 bg-[#161616] border border-[#262626]  hover:bg-orange-500  hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className="fa-brands fa-youtube" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full" />
                استكشف
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    <p className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                      الرئيسية
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/discover" onClick={() => window.scrollTo(0, 0)}>
                    <p className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                      المدونة
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                    <p className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                      من نحن
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full" />
                التصنيفات
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to={`/discover?category=${"إضاءة"}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <p className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                      إضاءة
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/discover?category=${"بورتريه"}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <p className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                      بورتريه
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/discover?category=${"مناظر طبيعية"}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <p className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                      مناظر طبيعية
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/discover?category=${"تقنيات"}`}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <p className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group">
                      <i className="fa-solid fa-angle-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180" />
                      تقنيات
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full" />
                ابقى على اطلاع
              </h3>
              <p className="text-sm text-neutral-500 mb-4">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
              <form className="space-y-3">
                <div className="relative">
                  <input
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
                    type="email"
                  />
                </div>
                <button className="text-white text-sm font-bold w-full bg-orange-500 py-4 px-8 rounded-4xl hover:-translate-y-0.5 transition-all duration-300">
                  أشتراك
                </button>
              </form>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 m sm:px-6 lg:px-8 border-[#252525] border-t pt-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-neutral-600">
                © 2026 عدسة. صنع بكل
                <i className="fa-solid fa-heart text-orange-500" /> جميع الحقوق
                محفوظة.
              </p>
              <div className="flex gap-6">
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/privacy"
                >
                  <p className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300">
                    سياسة الخصوصية
                  </p>
                </Link>
                <Link onClick={() => window.scrollTo(0, 0)} to="/terms">
                  <p className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300">
                    شروط الخدمة
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
