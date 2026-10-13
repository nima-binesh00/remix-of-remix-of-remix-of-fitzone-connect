import { Link } from "@tanstack/react-router";
import { faqs } from "@/data/siteData";

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about joining FitZone
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="faq-item group bg-slate-900 rounded-xl border border-slate-700 hover:border-orange-500 transition-all"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="text-xl font-bold text-white pr-4">{faq.question}</h3>
                <i className="ri-arrow-down-s-line text-2xl text-orange-500 transition-transform shrink-0 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
          >
            Contact Us
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </section>
  );
}
