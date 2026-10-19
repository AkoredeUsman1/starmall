import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TruckIcon,
} from "lucide-react";

const socials = [
  {
    name: "Facebook",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    name: "X",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z",
  },
  {
    name: "LinkedIn",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  },
];

const columns = [
  {
    title: "Services",
    links: [
      "Local Moving",
      "Long Distance",
      "Commercial Moving",
      "Packing Services",
      "Storage Solutions",
    ],
  },
  { title: "Company", links: ["About Us", "Blog"] },
  { title: "Support", links: ["Contact Us"] },
];

 const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 pt-14 pb-6">

      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>

          <div className="flex items-center gap-2">
            <TruckIcon className="w-5 h-5 text-orange-500" />
            <span className="text-lg font-bold text-white">SwiftMove</span>
          </div>

          <p className="text-sm leading-relaxed mt-4 max-w-xs">
            Professional moving services that make your relocation seamless.
            Licensed, insured, and trusted by thousands.
          </p>

          <ul className="mt-5 space-y-2.5 text-sm">
            <li className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-slate-500 shrink-0" />
              (555) 890-1234
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="w-4 h-4 text-slate-500 shrink-0" />
              info@swiftmove.com
            </li>
            <li className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-slate-500 shrink-0" />
              100 Moving Way, Chicago, IL 60601
            </li>
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-3 mt-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>

        </div>

        {/* LINK COLUMNS */}
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider">
              {col.title}
            </h4>

            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-6xl mx-auto px-5 mt-12 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">

        <p>© 2026 SwiftMove. All rights reserved. Licensed &amp; Insured.</p>

        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Sitemap</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
