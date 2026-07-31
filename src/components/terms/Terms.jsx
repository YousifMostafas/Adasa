import React from "react";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="bg-[#101010] pb-20 pt-28">
      <div className="flex flex-col justify-center py-8 items-center">
        <div className="flex w-fit px-3 py-1 rounded-xl  bg-gray-300/20 items-center gap-2 text-gray-300 text-sm mb-5">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <span className="hover:text-white duration-300 transition-all">
              الرئيسية
            </span>
          </Link>

          <span>›</span>
          <span className="text-orange-500">شروط الخدمة</span>
        </div>

        <div className="w-16 bg-[#252525]/40 h-16 flex items-center justify-center rounded-2xl  border-orange-500/50 border">
          <i className="fa-solid fa-file-invoice text-orange-500 text-3xl" />
        </div>

        <h2 className="text-center text-5xl text-white font-bold">
          شروط الخدمة
        </h2>
        <p className="text-gray-300/50 text-center mt-5 font-bold">
          آخر تحديث: 15 يناير 2026
        </p>
      </div>
      <div className="bg-[#050505] py-10">
        <div className="max-w-3xl border-b border-gray-400/20 pb-16 mx-auto">
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mb-12">
            <div className="flex gap-4">
              <div>
                <svg
                  class="w-6 h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-500 mb-1">
                  إشعار مهم
                </h3>
                <p className="text-yellow-300/80 text-sm">
                  يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول
                  أو استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                1
              </span>
              الموافقة على الشروط
            </h2>

            <p className="pr-11 text-neutral-400">
              بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه
              وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي من هذه
              الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه.
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                2
              </span>
              رخصة الاستخدام
            </h2>
            <p className="pr-11 text-neutral-400/70 mb-5">
              يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي
              غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.
            </p>
            <p className="pr-11 text-neutral-300 mb-2">
              بموجب هذا الترخيص لا يجوز لك:
            </p>
            <div className="pr-11">
              <li className="flex gap-3 text-neutral-400">
                <svg
                  className="w-5 h-5 text-red-400  mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>تعديل أو نسخ المواد </span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-red-400  mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                <span>استخدام المواد لأي غرض تجاري أو للعرض العام</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-red-400  mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                <span>محاولة فك أو عكس هندسة أي برنامج على الموقع</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-red-400  mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                <span>إزالة أي حقوق نشر أو علامات ملكية من المواد</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-red-400  mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                <span>نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر</span>
              </li>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                3
              </span>
              إخلاء المسؤولية
            </h2>

            <p className="pr-11 text-neutral-400">
              المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا
              يقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع الضمانات
              الأخرى.{" "}
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                4
              </span>
              القيود
            </h2>
            <div className="pr-11">
              <p className=" text-neutral-400">
                في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي أضرار
                ناتجة عن استخدام أو عدم القدرة على استخدام المواد على الموقع.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                5
              </span>
              محتوى المستخدم
            </h2>

            <p className="pr-11 text-neutral-400/70 mb-5">
              إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً غير
              حصري وعالمي ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه وتعديله
              وتوزيعه.
            </p>
            <p className="pr-11 text-neutral-300 mb-2">يجب ألا يكون محتواك:</p>

            <div className="pr-11">
              <li className="flex gap-3 text-neutral-400">
                <svg
                  className="w-5 h-5 text-red-400  mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>أن يكون تشهيرياً أو فاحشاً أو مسيئاً</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-red-400  mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                <span>انتهاك حقوق الملكية الفكرية للآخرين</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-red-400  mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                <span>احتواء فيروسات أو أكواد ضارة</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-red-400  mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                <span>انتهاك أي قوانين أو لوائح معمول بها</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-red-400  mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                <span>الإعلان عن منتجات أو خدمات غير مصرح بها</span>
              </li>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                6
              </span>
              التعديلات
            </h2>
            <div className="pr-11">
              <p className=" text-neutral-400">
                قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا
                الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط الخدمة.
                7{" "}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                7
              </span>
              معلومات الاتصال
            </h2>
            <div className="pr-11">
              <p className=" text-neutral-400">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
              </p>
              <a
                href="mailto:hello@adasah.com"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium"
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
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                hello@adasah.com
              </a>
            </div>
          </div>
        </div>
        <p className="text-neutral-400 mt-6 text-sm text-center">
          باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً{" "}
          <Link to="/privacy" onClick={() => window.scrollTo(0, 0)}>
            {" "}
            <span className="text-orange-500 hover:text-orange-400 duration-300 transition-all">
              سياسة الخصوصية.
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
