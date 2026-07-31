import React from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
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
          <span className="text-orange-500">سايسة الخصوصية</span>
        </div>

        <div className="w-16 bg-[#252525]/40 h-16 flex items-center justify-center rounded-2xl  border-orange-500/50 border">
          <i className="fa-solid fa-lock text-orange-500 text-3xl" />
        </div>

        <h2 className="text-center text-5xl text-white font-bold">
          سياسة الخصوصية
        </h2>
        <p className="text-gray-300/50 text-center mt-5 font-bold">
          آخر تحديث: 15 يناير 2026
        </p>
      </div>
      <div className="bg-[#050505] py-10">
        <div className="max-w-3xl border-b border-gray-400/20 pb-16 mx-auto">
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 mb-12">
            <div className="flex gap-4">
              <div>
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-orange-500 mb-1">
                  خصوصيتك تهمنا
                </h3>
                <p className="text-orange-300/80 text-sm">
                  نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                1
              </span>
              مقدمة
            </h2>

            <p className="pr-11 text-neutral-400">
              مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك
              الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية
              عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                2
              </span>
              المعلومات التي نجمعها
            </h2>
            <div className="pr-11">
              <li className="flex gap-3 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong className="text-white ">بيانات الهوية:</strong> تشمل
                  الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.
                </span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong className="text-white ">بيانات الاتصال:</strong>
                  تشمل عنوان البريد الإلكتروني.
                </span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong className="text-white ">البيانات التقنية:</strong>
                  تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.
                </span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong className="text-white ">بيانات الاستخدام:</strong>
                  تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.
                </span>
              </li>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                3
              </span>
              كيف نستخدم معلوماتك
            </h2>
            <div className="pr-11">
              <li className="flex gap-3 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>لتقديم خدمتنا والحفاظ عليها</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>لإخطارك بالتغييرات في خدمتنا</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>لتقديم دعم العملاء</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>لمراقبة استخدام خدمتنا</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>لاكتشاف ومنع ومعالجة المشاكل التقنية</span>
              </li>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                4
              </span>
              ملفات تعريف الارتباط
            </h2>
            <div className="pr-11">
              <p className=" text-neutral-400">
                نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط
                على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو
                للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات
                تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                5
              </span>
              أمان البيانات
            </h2>
            <div className="pr-11">
              <p className=" text-neutral-400">
                لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو
                استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن
                نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية
                للمعرفة.{" "}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                6
              </span>
              حقوقك
            </h2>
            <div className="pr-11">
              <li className="flex gap-3 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>طلب الوصول إلى بياناتك الشخصية</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>طلب تصحيح بياناتك الشخصية</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>طلب مسح بياناتك الشخصية</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>الاعتراض على معالجة بياناتك الشخصية</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>طلب تقييد معالجة بياناتك الشخصية</span>
              </li>
              <li className="flex gap-3 mt-2 text-neutral-400">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>الحق في سحب الموافقة</span>
              </li>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                7
              </span>
              تواصل معنا
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
          <Link to="/terms" onClick={() => window.scrollTo(0, 0)}>
            {" "}
            <span className="text-orange-500 hover:text-orange-400 duration-300 transition-all">
              شروط الخدمة.
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
