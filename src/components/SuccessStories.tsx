import { Link } from "@tanstack/react-router";
import { successStories, toFaDigits } from "@/data/siteData";

export function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">داستان‌های موفقیت</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            تغییرات واقعی از اعضای واقعی
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.name}
              className="bg-slate-900 rounded-xl border border-slate-700 hover:border-orange-500 transition-all overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-2 p-2">
                <div className="relative aspect-3/4 rounded-lg overflow-hidden">
                  <img
                    src={story.beforeImage}
                    alt={`${story.name} قبل`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-red-500/90 text-white text-xs px-2 py-1 rounded font-bold">
                    قبل
                  </div>
                </div>
                <div className="relative aspect-3/4 rounded-lg overflow-hidden">
                  <img
                    src={story.afterImage}
                    alt={`${story.name} بعد`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-green-500/90 text-white text-xs px-2 py-1 rounded font-bold">
                    بعد
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.name}</h3>
                    <p className="text-sm text-gray-400">
                      {toFaDigits(story.age)} ساله • {story.duration}
                    </p>
                  </div>
                  <div className="bg-orange-500/10 text-orange-500 px-4 py-2 rounded-lg font-bold text-sm">
                    {story.result}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">«{story.story}»</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
          >
            همین امروز شروع کن
            <i className="ri-arrow-left-line" />
          </Link>
        </div>
      </div>
    </section>
  );
}
