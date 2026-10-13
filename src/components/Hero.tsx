import { Link } from "@tanstack/react-router";
import { siteData } from "@/data/siteData";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {siteData.tagline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {siteData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-12">
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform inline-flex items-center justify-center gap-3"
              >
                همین امروز شروع کن
                <i className="ri-arrow-left-line" />
              </Link>
              <Link
                to="/about"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center gap-3"
              >
                بیشتر بدانید
                <i className="ri-information-line" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-right">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">+۵۰۰</div>
                <div className="text-gray-300 text-sm md:text-base">عضو فعال</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">+۵۰</div>
                <div className="text-gray-300 text-sm md:text-base">مربی حرفه‌ای</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">۲۴/۷</div>
                <div className="text-gray-300 text-sm md:text-base">دسترسی آزاد</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 border-2 border-slate-700 shadow-2xl">
                <img
                  src={heroImage}
                  alt="تمرین در باشگاه"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-500 p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <i className="ri-trophy-line text-2xl text-orange-500" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">باشگاه برتر</div>
                    <div className="text-white/80 text-sm">انتخاب سال ۱۴۰۳</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <i className="ri-arrow-down-line text-2xl text-white" />
      </div>
    </section>
  );
}
