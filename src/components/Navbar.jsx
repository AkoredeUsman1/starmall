import { useState } from "react";
import { Link } from "react-router-dom";
import { HeartIcon, MenuIcon, MoonIcon, ShoppingCartIcon, SunIcon, XIcon } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useTheme } from "../context/ThemeContext";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Shop", to: "/shop" },
  { label: "Wishlist", to: "/wishlist" },
  { label: "Cart", to: "/cart" },
];

 function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();
  const { count: wishCount } = useWishlist();
  const { isDark, toggle } = useTheme();

  return (
    <nav className="w-full bg-white dark:bg-slate-900 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-slate-800 dark:text-white">
          SwiftMove
        </Link>

        {/* Navigation Links (desktop) */}
        <div className="hidden md:flex items-center gap-7 text-sm text-slate-600 dark:text-slate-300">

        {links.map((link) =>
          link.to ? (
            <Link
              key={link.label}
              to={link.to}
              className="hover:text-orange-500 transition flex items-center gap-1.5"
            >
              {link.label}

              {/* Count badges */}
              {link.label === "Cart" && count > 0 && (
                <span className="min-w-5 h-5 px-1 rounded-full bg-orange-500 text-white text-[11px] font-semibold flex items-center justify-center">
                  {count}
                </span>
              )}

              {link.label === "Wishlist" && wishCount > 0 && (
                <span className="min-w-5 h-5 px-1 rounded-full bg-red-500 text-white text-[11px] font-semibold flex items-center justify-center">
                  {wishCount}
                </span>
              )}
            </Link>
          ) : (
            <div key={link.label}>{link.label}</div>
          )
        )}

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Theme toggle (visible on all screen sizes) */}
          <button
            onClick={toggle}
            className="flex text-slate-700 dark:text-slate-200 text-xl hover:text-orange-500 transition"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Wishlist + Cart Icons (visible on small screens) */}
          <div className="flex items-center gap-4 md:hidden">

            <Link
              to="/wishlist"
              className="relative text-slate-700 dark:text-slate-200"
              aria-label="Wishlist"
            >
              <HeartIcon />

              {wishCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-4.5 h-4.5 px-1 rounded-full bg-red-500 text-white text-[10px] font-semibold flex items-center justify-center">
                  {wishCount}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="relative text-slate-700 dark:text-slate-200"
              aria-label="Cart"
            >
              <ShoppingCartIcon />

              {count > 0 && (
                <span className="absolute -top-2 -right-2 min-w-4.5 h-4.5 px-1 rounded-full bg-orange-500 text-white text-[10px] font-semibold flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>

          </div>

          {/* Quote Button (desktop only) */}
          <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-lg text-sm transition">
            Free Quote
          </button>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden text-slate-700 dark:text-slate-200"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 px-6 py-2">
          {links.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="block py-3 text-sm text-slate-700 dark:text-slate-200 hover:text-orange-500 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}

                {link.label === "Cart" && count > 0 && (
                  <span className="ml-2 inline-flex min-w-5 h-5 px-1 rounded-full bg-orange-500 text-white text-[11px] font-semibold items-center justify-center align-middle">
                    {count}
                  </span>
                )}

                {link.label === "Wishlist" && wishCount > 0 && (
                  <span className="ml-2 inline-flex min-w-5 h-5 px-1 rounded-full bg-red-500 text-white text-[11px] font-semibold items-center justify-center align-middle">
                    {wishCount}
                  </span>
                )}
              </Link>
            ) : (
              <div
                key={link.label}
                className="py-3 text-sm text-slate-700 dark:text-slate-200 hover:text-orange-500 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </div>
            )
          )}

          {/* Theme toggle (mobile - hidden on the bar below sm) */}
          <button
            onClick={toggle}
            className="w-full flex items-center gap-2 py-3 text-sm text-slate-700 dark:text-slate-200 hover:text-orange-500 transition border-t border-gray-100 dark:border-slate-800"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
