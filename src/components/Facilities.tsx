import { facilities } from "@/data/siteData";

export function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">امکانات باشگاه</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            تجهیزات و فضاهایی در سطح جهانی برای موفقیت شما
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-orange-500 transition-all transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{facility.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 leading-relaxed">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
