import { Link } from "@tanstack/react-router";
import { pricingPlans } from "@/data/siteData";

export function PricingPlans({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="pricing" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Membership Plans</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your fitness journey
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-slate-900 p-8 rounded-xl border-2 ${
                plan.popular
                  ? "border-orange-500 transform scale-105 shadow-lg shadow-orange-500/20"
                  : "border-slate-700"
              } hover:border-orange-500 transition-all`}
            >
              {plan.popular && (
                <div className="bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start text-gray-300 gap-3">
                    <i className="ri-checkbox-circle-fill text-orange-500 text-xl shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`w-full px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                  plan.popular
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                }`}
              >
                Get Started
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
