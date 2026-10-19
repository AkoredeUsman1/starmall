import { Link } from "react-router-dom";
import { ArrowRightIcon, HeartIcon, ShoppingCartIcon, TrashIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

 const Wishlist = () => {
  const { items, count, remove, clear } = useWishlist();
  const { add } = useCart();

  return (
    <>
      <Navbar />

      <section className="w-full bg-white dark:bg-slate-900 py-12 md:py-16">

        <div className="max-w-6xl mx-auto px-5">

          {/* HEADER */}
          <div className="flex flex-wrap items-center justify-between gap-4">

            <div>
              <span className="inline-flex items-center bg-red-50 dark:bg-red-900/40 text-red-500 dark:text-red-400 text-xs font-semibold px-4 py-1.5 rounded-full">
                Wishlist
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4">
                Saved Items
              </h1>
            </div>

            {count > 0 && (
              <button
                onClick={clear}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-red-600 transition font-medium"
              >
                Clear Wishlist
              </button>
            )}

          </div>

          {/* EMPTY */}
          {count === 0 && (
            <div className="text-center py-20 mt-8 bg-gray-50 dark:bg-slate-800 rounded-xl">

              <div className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-900/40 text-red-500 dark:text-red-400 flex items-center justify-center mx-auto">
                <HeartIcon className="w-7 h-7" />
              </div>

              <p className="text-slate-900 dark:text-white font-semibold text-lg mt-5">
                Your wishlist is empty
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Tap the heart on any product to save it here.
              </p>

              <Link
                to="/shop"
                className="inline-flex items-center gap-2 mt-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-lg transition"
              >
                Continue Shopping
                <ArrowRightIcon className="w-4 h-4" />
              </Link>

            </div>
          )}

          {/* SAVED ITEMS */}
          {count > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm p-4 flex flex-col"
                >

                  <div className="relative">
                    <Link
                      to={`/product/${item.id}`}
                      className="rounded-lg h-44 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-center overflow-hidden group"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="max-h-40 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>

                    <div className="absolute top-2 right-2">
                      <button
                        onClick={() => remove(item.id)}
                        aria-label="Remove from wishlist"
                        className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 shadow-sm flex items-center justify-center text-red-500 hover:bg-red-50 hover:border-red-200 dark:hover:bg-red-900/50 transition active:scale-90"
                      >
                        <HeartIcon className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mt-4">
                    {item.category}
                  </span>

                  <Link
                    to={`/product/${item.id}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white mt-1 line-clamp-2 leading-snug hover:text-blue-600 transition"
                  >
                    {item.title}
                  </Link>

                  <p className="text-lg font-bold text-slate-900 dark:text-white mt-3">
                    ${Number(item.price).toFixed(2)}
                  </p>

                  <div className="mt-4 space-y-2">

                    <button
                      onClick={() => add(item, 1)}
                      className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
                    >
                      <ShoppingCartIcon className="w-3.5 h-3.5" />
                      Add to Cart
                    </button>

                    <button
                      onClick={() => remove(item.id)}
                      className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-300 transition"
                    >
                      <TrashIcon className="w-3.5 h-3.5" />
                      Remove
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </section>

      <CTA />
      <Footer />
    </>
  );
};

export default Wishlist;
