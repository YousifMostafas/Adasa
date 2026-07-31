import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="w-full bg-linear-to-br from-orange-600 via-orange-500 to-amber-400 py-12">
      <h2 className="text-white text-center text-5xl">
        لديك أسئلة؟ دعنا نتحدث!
      </h2>
      <p className="text-center mt-6 font-light max-w-xl mx-auto text-gray-200 text-lg">
        نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو
        تريد فقط إلقاء التحية، لا تتردد في التواصل.
      </p>
      <div className="flex flex-col mt-6 sm:flex-row justify-center gap-4">
        <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          تواصل معنا
        </button>
        <Link to="/discover">
          <button className="inline-flex items-center w-full lg:w-auto justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300">
            تصفح المقالات
          </button>
        </Link>
      </div>
    </div>
  );
}
