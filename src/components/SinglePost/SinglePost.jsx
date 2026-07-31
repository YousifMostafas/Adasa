import { Link, useParams } from "react-router-dom";
import posts from "../../data/posts.json";

export default function SinglePost() {
  const { id } = useParams();
  const post = posts.posts.find((p) => p.id === Number(id));
  const sections = post.content.split("\n\n## ").map((section, index) => {
    if (index === 0) {
      return {
        title: null,
        content: section,
      };
    }

    const [title, content] = section.split("\n\n");

    return {
      title,
      content,
    };
  });
  console.log(sections);

  if (!post)
    return <p className="text-white text-center py-20">المقال غير موجود</p>;

  const relatedPosts = posts.posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <div
        className="relative w-full pt-32 pb-20 flex flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/30"></div>

        <div className="relative container mx-auto mb-8 px-6 ">
          <div className="flex flex-wrap w-fit px-3 py-1 rounded-xl  bg-gray-300/20 items-center gap-2 text-gray-300 text-sm mb-10">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <span className="hover:text-white duration-300 transition-all">
                <i className="fa-solid fa-house" />
              </span>
            </Link>

            <span>›</span>
            <Link to="/discover" onClick={() => window.scrollTo(0, 0)}>
              <span className="hover:text-white duration-300 transition-all">
                المدونة
              </span>
            </Link>

            <span>›</span>

            <span className="text-orange-500">{post.category}</span>
          </div>
          <div className="lg:w-[75%] w-full mx-auto">
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="bg-orange-600 font-bold text-white text-sm px-4 py-1.5 rounded-full">
                {post.category}
              </span>

              <div className="flex flex-wrap items-center gap-1 text-gray-300 text-sm">
                <i className="fa-regular fa-calendar"></i>
                <span>{post.date}</span>
              </div>
              <div className="flex flex-wrap items-center gap-1 text-gray-300 text-sm">
                <i className="fa-regular fa-clock"></i>
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight max-w-4xl  ">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 mt-5 border border-gray-400/30 bg-gray-400/10 w-fit rounded-xl py-5 px-5 ">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full border-2 border-orange-500/40"
              />
              <div className="text-start">
                <h4 className="text-white  font-bold">{post.author.name}</h4>
                <p className="text-gray-400 text-xs">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#050505] py-9">
        <div className="lg:w-[85%] w-full mx-auto">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="  col-span-10  lg:col-span-9 ">
              <div className="border px-6 py-7 bg-amber-700/10 rounded-2xl border-orange-500/20">
                <p className="text-white text-sm lg:text-xl font-light">
                  "{post.excerpt}"
                </p>
              </div>

              <p className="text-gray-300/80 mt-10 ps-2 lg:text-lg">
                {sections[0].content}
              </p>

              {sections.slice(1).map((section, index) => (
                <div
                  id={`section-${index}`}
                  key={index}
                  className="scroll-mt-24 mt-10"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-amber-700/20 border border-orange-500/30">
                      <i className="fa-solid fa-camera text-2xl text-orange-500" />
                    </div>

                    <h3 className="text-white text-3xl font-bold">
                      {section.title}
                    </h3>
                  </div>

                  <p className="text-gray-300/80 mt-7 ps-2 lg:text-lg leading-9">
                    {section.content}
                  </p>
                </div>
              ))}

              <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex flex-wrap items-center justify-center border border-orange-500/30">
                    <i className="fa-solid fa-tags text-orange-500" />
                  </div>
                  <h3 className="font-bold text-white">الوسوم</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626] hover:border-orange-500/50 hover:text-orange-500 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex flex-wrap items-center justify-center border border-orange-500/30">
                      <i className="fa-solid fa-share-nodes text-orange-500" />
                    </div>
                    <h3 className="font-bold text-white">شارك المقال</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white hover:border-transparent transition-all duration-300">
                      <i className="fa-brands fa-x-twitter" />
                    </button>
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300">
                      <i className="fa-brands fa-linkedin-in" />
                    </button>
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white hover:border-transparent transition-all duration-300">
                      <i className="fa-brands fa-whatsapp" />
                    </button>
                    <button className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300">
                      <i className="fa-solid fa-link" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-8 bg-[#111111] rounded-2xl border border-[#262626]">
                <div className="flex flex-col sm:flex-row items-center flex-wrap sm:items-start gap-6">
                  <img
                    alt={post.author.name}
                    className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                    src={post.author.avatar}
                  />
                  <div className="text-center sm:text-right  flex-1">
                    <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider">
                      كاتب المقال
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {post.author.name}
                    </h3>
                    <p className="text-neutral-500 text-sm mb-3">
                      {post.author.role}
                    </p>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                      الفوتوغرافي.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 col-span-10 ">
              <div className="sticky top-19">
                <div className="p-6 bg-[#111111] rounded-2xl">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex flex-wrap items-center justify-center border border-orange-500/30">
                      <i className="fa-solid fa-list text-orange-500" />
                    </div>
                    <h3 className="font-bold text-white">محتويات المقال</h3>
                  </div>

                  <div>
                    {sections.slice(1).map((sec, index) => (
                      <a
                        href={`#section-${index}`}
                        key={index}
                        className="flex flex-wrap items-center gap-3 cursor-pointer p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition-all duration-300 group"
                      >
                        <span className="flex flex-wrap items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs font-bold text-neutral-500 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
                          {index + 1}
                        </span>
                        <span className="text-sm">{sec.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="p-6 bg-[#111111] rounded-2xl border mt-6 border-[#262626]">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <i className="fa-regular fa-clock text-orange-500 text-xl mb-2" />
                      <p className="text-white font-bold">{post.readTime}</p>
                      <p className="text-neutral-500 text-xs">وقت القراءة</p>
                    </div>
                    <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">
                      <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2" />
                      <p className="text-white font-bold text-sm">
                        {post.date}
                      </p>
                      <p className="text-neutral-500 text-xs">تاريخ النشر</p>
                    </div>
                  </div>
                </div>
                <div className="p-6  bg-orange-500/10 mt-6  rounded-2xl border border-orange-500/20">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex flex-wrap items-center justify-center mx-auto mb-4">
                      <i className="fa-solid fa-envelope text-orange-500 text-xl" />
                    </div>
                    <h3 className="font-bold text-white mb-2">
                      لا تفوّت جديدنا
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4">
                      اشترك للحصول على أحدث المقالات
                    </p>
                    <Link to="/discover">
                      <button className="block w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 cursor-pointer transition-colors text-center">
                        تصفح المزيد
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#050505] ">
        <div className="w-[85%] mx-auto py-9   border-t border-[#303030]">
          <div className="flex flex-wrap items-center justify-between mb-10">
            <div className="flex flex-wrap items-center gap-4">
              <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                <i className="fa-solid fa-images text-orange-500 text-xl" />
              </span>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  مقالات قد تعجبك
                </h2>
                <p className="text-neutral-500 text-sm">
                  استكشف المزيد من المحتوى المميز
                </p>
              </div>
            </div>
            <Link to="/discover">
              <span className="hidden flex-wrap sm:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors group">
                عرض الكل
                <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
          <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((item) => (
              <Link
                to={`/post/${item.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="group relative bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      alt="تصوير الشارع: فن التقاط الحياة اليومية"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      src={item.image}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#111111] to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center justify-between text-sm text-neutral-500">
                      <span className="flex flex-wrap items-center gap-2">
                        <img
                          alt={item.author.name}
                          className="w-6 h-6 rounded-full"
                          src={item.author.avatar}
                        />
                        {item.author.name}
                      </span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
