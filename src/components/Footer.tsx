import { Link } from "@tanstack/react-router";
import { siteData, navigation, socialLinks, contactInfo } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{siteData.name}</h3>
            <p className="text-gray-400 mb-4">{siteData.description}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={siteData.social[social.name as keyof typeof siteData.social]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-orange-500 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-xl`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              {contactInfo.slice(0, 3).map((info) => (
                <li key={info.title} className="flex items-start gap-3">
                  <i className={`${info.icon} text-orange-500 text-xl mt-1 shrink-0`} />
                  {info.link ? (
                    <a
                      href={info.link}
                      className="hover:text-orange-500 transition-colors leading-relaxed"
                    >
                      {info.content as string}
                    </a>
                  ) : (
                    <span className="leading-relaxed">{info.content as string}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get fitness tips and updates</p>
            <form
              className="flex flex-col space-y-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
