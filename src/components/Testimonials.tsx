import { testimonials } from "@/data/siteData";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Members Say</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real stories from real people achieving their fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-orange-500 transition-all"
            >
              <div className="flex mb-6 gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <i key={i} className="ri-star-fill text-orange-500 text-xl" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="pt-4 border-t border-slate-700">
                <div className="font-bold text-white mb-1">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
