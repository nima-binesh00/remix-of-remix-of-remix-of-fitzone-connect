import { Link } from "@tanstack/react-router";
import { classSchedule, faTime } from "@/data/siteData";

export function ClassSchedule() {
  return (
    <section id="schedule" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">برنامه کلاس‌ها</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            هفته‌تان را با کلاس‌های پرطرفدار ما برنامه‌ریزی کنید
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900">
                  <tr>
                    <th className="px-6 py-4 text-right text-sm font-bold text-white uppercase tracking-wider">ساعت</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-white uppercase tracking-wider">کلاس</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-white uppercase tracking-wider">مربی</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-white uppercase tracking-wider">رزرو</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {classSchedule.map((schedule) => (
                    <tr key={`${faTime(schedule.time)}-${schedule.class}`} className="hover:bg-slate-700/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <i className="ri-time-line text-orange-500" />
                          <span className="text-white font-semibold">{faTime(schedule.time)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-medium">{schedule.class}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-400">{schedule.trainer}</span>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          to="/contact"
                          className="text-orange-500 hover:text-orange-400 font-semibold flex items-center gap-2"
                        >
                          رزرو
                          <i className="ri-arrow-left-line" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">برنامه کامل هفتگی را ببینید</p>
            <Link
              to="/classes"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
            >
              برنامه کامل
              <i className="ri-calendar-line" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
