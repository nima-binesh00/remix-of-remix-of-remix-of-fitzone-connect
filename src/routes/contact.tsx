import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ContactForm";
import { siteData, socialLinks, contactInfo } from "@/data/siteData";
import mapImage from "@/assets/map.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `تماس با ما | ${siteData.name}` },
      { name: "description", content: "با باشگاه فیت‌زون در تماس باشید و مسیر ورزشی‌تان را شروع کنید" },
      { property: "og:title", content: `تماس با ما | ${siteData.name}` },
      { property: "og:description", content: "با باشگاه فیت‌زون در تماس باشید و مسیر ورزشی‌تان را شروع کنید" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const expectations = [
  {
    icon: "ri-user-search-line",
    title: "بازدید و مشاوره",
    description: "باشگاه را کامل به شما نشان می‌دهیم و درباره اهدافتان صحبت می‌کنیم",
  },
  {
    icon: "ri-group-line",
    title: "آشنایی با تیم",
    description: "با مربیان و کارکنانی آشنا می‌شوید که در این مسیر همراهتان هستند",
  },
  {
    icon: "ri-file-list-3-line",
    title: "گزینه‌های عضویت",
    description: "پلن‌های منعطف عضویت را متناسب با سبک زندگی و بودجه‌تان بررسی کنید",
  },
];

const responseTimes = [
  { label: "ایمیل:", text: " پاسخ در کمتر از ۲۴ ساعت در روزهای کاری" },
  { label: "تلفن:", text: " پاسخگویی از ۵ صبح تا ۱۱ شب" },
  { label: "فرم تماس:", text: " تأیید دریافت در ۲ ساعت و پاسخ کامل در ۲۴ ساعت" },
  { label: "موارد فوری:", text: " لطفاً مستقیم تماس بگیرید" },
];

function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">تماس با ما</h1>
            <p className="text-xl text-gray-300">
              در مسیر ورزشی کنارتان هستیم. همین امروز با ما در تماس باشید!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">راه‌های ارتباطی</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="bg-orange-500 p-4 rounded-lg shrink-0">
                      <i className={`${info.icon} text-2xl text-white`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
                      {Array.isArray(info.content) ? (
                        info.content.map((line) => (
                          <p key={line} className="text-gray-400 leading-relaxed">
                            {line}
                          </p>
                        ))
                      ) : info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-400 hover:text-orange-500 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-400 leading-relaxed">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold text-white mb-4">ما را دنبال کنید</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={siteData.social[social.name as keyof typeof siteData.social]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-700 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-all"
                      aria-label={social.label}
                    >
                      <i className={`${social.icon} text-xl text-white`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            در اولین بازدید چه انتظاری داشته باشید؟
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
            اولین بازدید شما برای ما مهم است.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {expectations.map((item) => (
              <div
                key={item.title}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center hover:border-orange-500 transition-all"
              >
                <div className="w-16 h-16 bg-orange-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-3xl text-orange-500`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700">
              <div className="flex items-start gap-6">
                <div className="bg-orange-500/10 p-4 rounded-lg shrink-0">
                  <i className="ri-time-line text-4xl text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">زمان پاسخگویی</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    ما متعهدیم سریع پاسخ بدهیم:
                  </p>
                  <ul className="space-y-3">
                    {responseTimes.map((item) => (
                      <li key={item.label} className="flex items-start gap-3">
                        <i className="ri-checkbox-circle-fill text-orange-500 text-xl mt-0.5" />
                        <div>
                          <span className="text-white font-semibold">{item.label}</span>
                          <span className="text-gray-300">{item.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">موقعیت ما</h2>
          <div className="max-w-5xl mx-auto bg-slate-800 p-8 rounded-xl border border-slate-700">
            <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center overflow-hidden relative">
              <img
                src={mapImage.url}
                alt="نقشه موقعیت باشگاه"
                className="w-full h-full object-cover opacity-50"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                <div>
                  <i className="ri-map-pin-line text-5xl text-orange-500 mb-4" />
                  <p className="text-gray-300 text-lg">
                    به‌زودی نقشه موقعیت باشگاه اینجا قرار می‌گیرد
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
