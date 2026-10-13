import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { navigation, siteData } from "@/data/siteData";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed flex items-center justify-center w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <nav className="max-w-5xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="shrink-0 flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-orange-500 font-heading tracking-tight"
            >
              {siteData.name}
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:justify-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-300 hover:text-orange-500 transition-colors font-medium text-base py-2"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 px-6 py-2.5"
            >
              Join Now
              <i className="ri-arrow-right-line" />
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2 flex items-center justify-center"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`${open ? "ri-close-line" : "ri-menu-line"} text-2xl`} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 pt-2 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-orange-500 hover:bg-slate-800 rounded-lg transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-center font-semibold transition-all duration-200 mt-2 shadow-md hover:shadow-lg"
            >
              Join Now
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
