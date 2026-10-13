import { Link } from "@tanstack/react-router";
import { classes } from "@/data/siteData";

export function Classes() {
  return (
    <section id="classes" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Classes</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find the perfect workout for your fitness level and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <div
              key={classItem.name}
              className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-orange-500 transition-all transform hover:scale-105"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">{classItem.name}</h3>
                <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                  {classItem.difficulty}
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">{classItem.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 gap-2">
                  <i className="ri-time-line text-orange-500" />
                  <span>{classItem.duration}</span>
                </div>
                <Link
                  to="/contact"
                  className="text-orange-500 hover:text-orange-400 font-semibold flex items-center gap-2"
                >
                  Book Now
                  <i className="ri-arrow-right-line" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/classes"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
          >
            View All Classes
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </section>
  );
}
