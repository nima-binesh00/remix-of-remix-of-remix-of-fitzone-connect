import { createFileRoute, Link } from "@tanstack/react-router";
import { classes, siteData, fullSchedule, faTime } from "@/data/siteData";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: `کلاس‌ها | ${siteData.name}` },
      { name: "description", content: "کلاس‌های متنوع ورزشی باشگاه فیت‌زون و برنامه کامل هفتگی" },
      { property: "og:title", content: `کلاس‌ها | ${siteData.name}` },
      { property: "og:description", content: "کلاس‌های متنوع ورزشی باشگاه فیت‌زون و برنامه کامل هفتگی" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClassesPage,
});

const toMinutes = (t: string) => {
  const [hm = "0:0", period] = t.split(" ");
  const [h = "0", m = "0"] = hm.split(":");
  let hour = parseInt(h) % 12;
  if (period === "PM") hour += 12;
  return hour * 60 + parseInt(m);
};

const sortedTimes = Array.from(
  new Set(fullSchedule.flatMap((d) => d.slots.map((s) => s.time))),
).sort((a, b) => toMinutes(a) - toMinutes(b));

function ClassesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">کلاس‌های ما</h1>
            <p className="text-xl text-gray-300">تمرین مناسب سطح و هدف خود را پیدا کنید</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {classes.map((classItem) => (
              <div key={classItem.name} className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img src={classItem.image} alt={classItem.name} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full font-semibold">
                        {classItem.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4 gap-4">
                      <h2 className="text-3xl font-bold text-white">{classItem.name}</h2>
                      <div className="flex items-center text-gray-400 gap-2 shrink-0">
                        <i className="ri-time-line text-orange-500" />
                        <span>{classItem.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg mb-4 leading-loose">{classItem.detailedDescription}</p>
                    <div className="mb-6">
                      <p className="text-white font-semibold mb-2">
                        مربی: <span className="text-orange-500">{classItem.trainer}</span>
                      </p>
                      <p className="text-gray-400 text-sm">چه انتظاری داشته باشید: {classItem.whatToExpect}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">مزایای اصلی:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {classItem.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-gray-300 text-sm">
                            <i className="ri-checkbox-circle-fill text-orange-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                      رزرو این کلاس
                      <i className="ri-arrow-left-line" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">برنامه کامل هفتگی</h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
            هفته‌تان را با برنامه کامل کلاس‌ها تنظیم کنید
          </p>
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 overflow-x-auto">
            <table className="w-full text-right min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="pb-4 pl-4 text-white font-semibold">ساعت</th>
                  {fullSchedule.map((d) => (
                    <th key={d.day} className="pb-4 px-4 text-white font-semibold">{d.day}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {sortedTimes.map((time) => (
                  <tr key={time} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="py-3 pl-4 font-semibold text-white whitespace-nowrap">{faTime(time)}</td>
                    {fullSchedule.map((d) => {
                      const slot = d.slots.find((s) => s.time === time);
                      return (
                        <td key={d.day} className="py-3 px-4">
                          {slot ? (
                            <div>
                              <div className="font-medium">{slot.class}</div>
                              <div className="text-xs text-gray-400">{slot.trainer}</div>
                            </div>
                          ) : (
                            <span className="text-gray-600">-</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-gray-400 text-center mt-6 text-sm">
              * برنامه ممکن است تغییر کند. برای اطلاع از آخرین زمان‌بندی یا رزرو کلاس با ما تماس بگیرید.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
