import { createFileRoute, Link } from "@tanstack/react-router";
import { classes, siteData, fullSchedule } from "@/data/siteData";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: `Classes - ${siteData.name}` },
      { name: "description", content: "Browse our wide range of fitness classes" },
      { property: "og:title", content: `Classes - ${siteData.name}` },
      { property: "og:description", content: "Browse our wide range of fitness classes" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClassesPage,
});

const days = [
  fullSchedule.monday,
  fullSchedule.tuesday,
  fullSchedule.wednesday,
  fullSchedule.thursday,
  fullSchedule.friday,
  fullSchedule.saturday,
  fullSchedule.sunday,
];

const sortedTimes = (() => {
  const allTimes = new Set<string>();
  Object.values(fullSchedule).forEach((day) => {
    day.forEach((slot) => allTimes.add(slot.time));
  });
  return Array.from(allTimes).sort((a, b) => {
    const timeA = a.replace(" AM", "").replace(" PM", "").split(":");
    const timeB = b.replace(" AM", "").replace(" PM", "").split(":");
    const hourA = parseInt(timeA[0] ?? "0") + (a.includes("PM") && timeA[0] !== "12" ? 12 : 0);
    const hourB = parseInt(timeB[0] ?? "0") + (b.includes("PM") && timeB[0] !== "12" ? 12 : 0);
    return hourA - hourB || parseInt(timeA[1] ?? "0") - parseInt(timeB[1] ?? "0");
  });
})();

function ClassesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Classes</h1>
            <p className="text-xl text-gray-300">
              Find the perfect workout for your fitness level and goals
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {classes.map((classItem) => (
              <div
                key={classItem.name}
                className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={classItem.image}
                      alt={classItem.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full font-semibold">
                        {classItem.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-3xl font-bold text-white">{classItem.name}</h2>
                      <div className="flex items-center text-gray-400 gap-2">
                        <i className="ri-time-line text-orange-500" />
                        <span>{classItem.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                      {classItem.detailedDescription}
                    </p>

                    <div className="mb-6">
                      <p className="text-white font-semibold mb-2">
                        Trainer: <span className="text-orange-500">{classItem.trainer}</span>
                      </p>
                      <p className="text-gray-400 text-sm">
                        What to expect: {classItem.whatToExpect}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
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
                      Book This Class
                      <i className="ri-arrow-right-line" />
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
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Full Weekly Schedule</h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
            Plan your week with our complete class schedule
          </p>
          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="pb-4 pr-4 text-white font-semibold">Time</th>
                  <th className="pb-4 px-4 text-white font-semibold">Monday</th>
                  <th className="pb-4 px-4 text-white font-semibold">Tuesday</th>
                  <th className="pb-4 px-4 text-white font-semibold">Wednesday</th>
                  <th className="pb-4 px-4 text-white font-semibold">Thursday</th>
                  <th className="pb-4 px-4 text-white font-semibold">Friday</th>
                  <th className="pb-4 px-4 text-white font-semibold">Saturday</th>
                  <th className="pb-4 px-4 text-white font-semibold">Sunday</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {sortedTimes.map((time) => (
                  <tr
                    key={time}
                    className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
                  >
                    <td className="py-3 pr-4 font-semibold text-white">{time}</td>
                    {days.map((daySchedule, i) => {
                      const classSlot = daySchedule.find((slot) => slot.time === time);
                      return (
                        <td key={i} className="py-3 px-4">
                          {classSlot ? (
                            <div>
                              <div className="font-medium">{classSlot.class}</div>
                              <div className="text-xs text-gray-400">{classSlot.trainer}</div>
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
              * Schedule may vary. Please contact us for the most up-to-date class times or to
              book a spot.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
