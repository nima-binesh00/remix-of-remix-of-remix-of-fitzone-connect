import { createFileRoute, Link } from "@tanstack/react-router";
import { PricingPlans } from "@/components/PricingPlans";
import { siteData, pricingPlans, paymentOptions } from "@/data/siteData";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: `تعرفه‌ها | ${siteData.name}` },
      { name: "description", content: "پلن عضویت مناسب خود را در باشگاه فیت‌زون انتخاب کنید" },
      { property: "og:title", content: `تعرفه‌ها | ${siteData.name}` },
      { property: "og:description", content: "پلن عضویت مناسب خود را در باشگاه فیت‌زون انتخاب کنید" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

const Check = () => <i className="ri-checkbox-circle-fill text-orange-500 text-xl" />;
const Cross = () => <i className="ri-close-circle-line text-gray-600 text-xl" />;

const comparisonRows: { feature: string; cells: React.ReactNode[] }[] = [
  { feature: "دسترسی به باشگاه", cells: [<Check />, <Check />, <Check />] },
  { feature: "دسترسی شبانه‌روزی", cells: [<Cross />, <Check />, <Check />] },
  { feature: "کلاس‌های گروهی", cells: [<Cross />, <Check />, <Check />] },
  {
    feature: "مربی شخصی",
    cells: [
      <span className="text-gray-400 text-sm">فقط مشاوره</span>,
      <span className="text-gray-400 text-sm">همراه با مشاوره</span>,
      <span className="text-orange-500 font-semibold">نامحدود</span>,
    ],
  },
  {
    feature: "راهنمایی تغذیه",
    cells: [<Cross />, <Check />, <span className="text-orange-500 font-semibold">برنامه اختصاصی</span>],
  },
  { feature: "اسپا و ریکاوری", cells: [<Cross />, <Cross />, <Check />] },
  { feature: "اولویت رزرو", cells: [<Cross />, <Cross />, <Check />] },
];

const pricingFaqs = [
  {
    question: "می‌توانم هر زمان عضویتم را لغو کنم؟",
    answer:
      "بله، با ۳۰ روز اطلاع قبلی هر زمان می‌توانید لغو کنید. هیچ قرارداد بلندمدتی لازم نیست.",
  },
  {
    question: "دوره آزمایشی دارید؟",
    answer:
      "بله! اعضای جدید ۷ روز رایگان می‌توانند همه امکانات باشگاه را امتحان کنند.",
  },
  {
    question: "جلسات مربی شخصی شامل عضویت می‌شود؟",
    answer:
      "جلسات مربی شخصی در پلن‌های ویژه و طلایی وجود دارد. اعضای پایه می‌توانند جداگانه تهیه کنند.",
  },
  {
    question: "چه روش‌های پرداختی دارید؟",
    answer:
      "پرداخت با کارت‌های بانکی، درگاه آنلاین و کارت‌به‌کارت امکان‌پذیر است.",
  },
];

function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">پلن‌های عضویت</h1>
            <p className="text-xl text-gray-300">
              تعرفه‌های منعطف، متناسب با سبک زندگی و اهداف ورزشی شما
            </p>
          </div>
        </div>
      </section>

      <PricingPlans showHeading={false} />

      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">مقایسه پلن‌ها</h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
            امکانات همه پلن‌ها را کنار هم مقایسه کنید
          </p>
          <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-6 py-4 text-right text-white font-semibold">امکانات</th>
                  {pricingPlans.map((plan) => (
                    <th key={plan.name} className="px-6 py-4 text-center text-white font-semibold">
                      {plan.name}
                      {plan.popular && (
                        <span className="block text-orange-500 text-sm font-normal mt-1">
                          محبوب‌ترین
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i < comparisonRows.length - 1 ? "border-b border-slate-700/50" : ""}
                  >
                    <td className="px-6 py-4 font-medium">{row.feature}</td>
                    {row.cells.map((cell, j) => (
                      <td key={j} className="px-6 py-4 text-center">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">روش‌های پرداخت</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {paymentOptions.plans.map((plan) => (
              <div
                key={plan.type}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:border-orange-500 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{plan.type}</h3>
                <p className="text-gray-300 leading-relaxed">{plan.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                روش‌های پرداخت قابل قبول
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {paymentOptions.methods.map((method) => (
                  <div key={method} className="bg-slate-900 px-6 py-3 rounded-lg border border-slate-700">
                    <span className="text-gray-300 font-medium">{method}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-500/10 border border-orange-500/30 p-6 rounded-xl text-center">
                <i className="ri-shield-check-line text-4xl text-orange-500 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">ضمانت بازگشت وجه</h4>
                <p className="text-gray-300">{paymentOptions.guarantee}</p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 p-6 rounded-xl text-center">
                <i className="ri-gift-line text-4xl text-orange-500 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">دوره آزمایشی رایگان</h4>
                <p className="text-gray-300">{paymentOptions.trial}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            سؤالات متداول
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {pricingFaqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-500 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <i className="ri-question-line text-orange-500" />
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">آماده شروع هستید؟</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            همین امروز تماس بگیرید، از باشگاه بازدید کنید و مسیرتان را شروع کنید
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 bg-white text-orange-500 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            تماس با ما
            <i className="ri-arrow-left-line" />
          </Link>
        </div>
      </section>
    </>
  );
}
