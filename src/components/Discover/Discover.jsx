import React, { useEffect } from "react";
import posts from "../../data/posts.json";
import DiscoverCards from "./DiscoverCards";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Discover() {
  const postData = posts.posts;
  const [searchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات");

  useEffect(() => {
    const category = searchParams.get("category");

    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("جميع المقالات");
    }

    setCurrentPage(1);
  }, [searchParams]);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = postData.filter((post) => {
    const matchCategory =
      selectedCategory === "جميع المقالات" ||
      post.category === selectedCategory;

    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });
  const postsPerPage = 6;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = filteredPosts.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <>
      <section className="bg-[#101010]  pt-32">
        <div className="md:w-[77%] mx-auto w-[90%]">
          <div className="text-center  bg-amber-600/20 mx-auto w-fit text-orange-400 border border-amber-700 rounded-full py-2 px-5">
            <span className=" w-1.5 h-1.5  bg-orange-500 rounded-full animate-pulse" />
            <p
              className="text-sm font-medium
"
            >
              <i className=" fa-solid fa-file-lines me-2" />
              مدونتنا
            </p>
          </div>
          <h2 className="text-white lg:leading-24 text-4xl lg:text-6xl font-bold text-center ">
            استكشف <span className=" text-orange-500">مقالاتنا</span>
          </h2>
          <p className="text-gray-400 text-center w-full max-w-3xs md:max-w-2xl text-xl lg:text-xl mt-3 mx-auto">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>

        <div className="sticky top-21 md:top-19 mt-14 z-40 bg-[#070707]/90 backdrop-blur-xl border-b border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="placeholder-[#707070] bg-[#151515] text-white rounded-xl focus:outline-none border transition-all duration-300 border-[#303030] focus:border-orange-600 w-full px-5 py-3 pr-12"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => {
                    setSelectedCategory("جميع المقالات");
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 ${
                    selectedCategory === "جميع المقالات"
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }       `}
                >
                  جميع المقالات
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory("إضاءة");
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 ${
                    selectedCategory === "إضاءة"
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }       `}
                >
                  إضاءة
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory("بورتريه");
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30  ${
                    selectedCategory === "بورتريه"
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }`}
                >
                  بورتريه
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory("مناظر طبيعية");
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 ${
                    selectedCategory === "مناظر طبيعية"
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }       `}
                >
                  مناظر طبيعية
                </button>
                <button
                  onClick={() => {
                    setSelectedCategory("تقنيات");
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 ${
                    selectedCategory === "تقنيات"
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }       `}
                >
                  تقنيات
                </button>

                <button
                  onClick={() => {
                    setSelectedCategory("معدات");
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 ${
                    selectedCategory === "معدات"
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                  }       `}
                >
                  معدات
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#070707] py-4  w-full">
          <div className="w-[77%] m mx-auto">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 ">
                عرض <span className="text-white">{filteredPosts.length}</span>{" "}
                مقالات
              </p>
<div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button className="p-2 rounded-lg transition-all duration-300  bg-orange-500 text-white" title="عرض شبكي">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    ></path>
                  </svg>
                </button>
                <button
                  className="p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white"
                  title="عرض قائمة"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-5">
              {currentPosts.map((post) => {
                return <DiscoverCards key={post.id} posts={post} />;
              })}
              ;
            </div>
            <div className="flex justify-center items-center gap-2 mt-10">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="w-11 h-11 rounded-lg text-white bg-[#202020] disabled:opacity-50"
              >
                <i className="fa-solid fa-angle-right" />
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-11 text-sm h-11 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-orange-500 text-white"
                      : "bg-[#202020] text-gray-500"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="w-11 h-11 rounded-lg bg-[#202020] text-white disabled:opacity-50"
              >
                <i className="fa-solid fa-angle-left" />
              </button>
            </div>
            <p className="text-gray-500 text-sm text-center mt-6">
              صفحة {currentPage} من {totalPages}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
