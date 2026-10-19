import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeftIcon,
  MinusIcon,
  PlusIcon,
  RotateCcwIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  StarIcon,
  TrashIcon,
  TruckIcon,
} from "lucide-react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import WishlistButton from "../components/WishlistButton";
import { useCart } from "../context/CartContext";

 const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [qty, setQty] = useState(1);

  const { add, items, removeAll } = useCart();

  const inCart = items.filter((item) => String(item.id) === String(id)).length;

  useEffect(() => {
    setStatus("loading");
    setQty(1);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        if (!data || !data.id) throw new Error("Not found");
        setProduct(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, [id]);

  const handleAdd = () => {
    add(product, qty);
  };

  const handleRemove = () => {
    removeAll(product.id);
  };

  return (
    <>
      <Navbar />

      <section className="w-full bg-white dark:bg-slate-900 py-10 md:py-14">

        <div className="max-w-6xl mx-auto px-5">

          {/* Back link */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 transition"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Shop
          </Link>

          {/* LOADING */}
          {status === "loading" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 animate-pulse">
              <div className="h-80 rounded-xl bg-slate-100 dark:bg-slate-800"></div>
              <div>
                <div className="h-3 w-24 bg-slate-100 dark:bg-slate-800 rounded"></div>
                <div className="h-6 w-3/4 bg-slate-100 dark:bg-slate-800 rounded mt-4"></div>
                <div className="h-4 w-32 bg-slate-100 dark:bg-slate-800 rounded mt-4"></div>
                <div className="h-8 w-28 bg-slate-100 dark:bg-slate-800 rounded mt-6"></div>
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded mt-6"></div>
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded mt-2"></div>
                <div className="h-3 w-2/3 bg-slate-100 dark:bg-slate-800 rounded mt-2"></div>
              </div>
            </div>
          )}

          {/* ERROR */}
          {status === "error" && (
            <div className="text-center py-20 mt-8 bg-gray-50 dark:bg-slate-800 rounded-xl">
              <p className="text-slate-600 dark:text-slate-300 font-medium">
                Sorry, we could not find that product.
              </p>

              <Link
                to="/shop"
                className="inline-flex items-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition"
              >
                <RotateCcwIcon className="w-4 h-4" />
                Back to Shop
              </Link>
            </div>
          )}

          {/* PRODUCT */}
          {status === "ready" && product && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 items-start">

              {/* Image */}
              <div className="rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 h-80 md:h-[420px] flex items-center justify-center p-8">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
              </div>

              {/* Details */}
              <div>

                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {product.category}
                </span>

                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-2 leading-snug">
                  {product.title}
                </h1>

                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          className={
                            "w-4 h-4 " +
                            (i < Math.round(product.rating.rate)
                              ? "fill-current"
                              : "")
                          }
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {product.rating.rate} · {product.rating.count} reviews
                    </span>
                  </div>
                )}

                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-5">
                  ${Number(product.price).toFixed(2)}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-5">
                  {product.description}
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-3 mt-7">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    Quantity
                  </span>

                  <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg">
                    <button
                      onClick={() => setQty((q) => (q > 1 ? q - 1 : 1))}
                      aria-label="Decrease quantity"
                      className="px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition"
                    >
                      <MinusIcon className="w-4 h-4" />
                    </button>

                    <span className="w-10 text-center text-sm font-semibold text-slate-900 dark:text-white">
                      {qty}
                    </span>

                    <button
                      onClick={() => setQty((q) => q + 1)}
                      aria-label="Increase quantity"
                      className="px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition"
                    >
                      <PlusIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Actions: cart toggle + wishlist heart */}
                <div className="flex items-center gap-3 mt-6">

                  {inCart === 0 ? (
                    <button
                      onClick={handleAdd}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition"
                    >
                      <ShoppingCartIcon className="w-5 h-5" />
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      onClick={handleRemove}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold bg-red-50 dark:bg-red-900/40 hover:bg-red-100 dark:hover:bg-red-900/60 text-red-600 dark:text-red-400 transition"
                    >
                      <TrashIcon className="w-5 h-5" />
                      Remove from Cart ({inCart})
                    </button>
                  )}

                  <WishlistButton product={product} size="lg" />

                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <TruckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                        Free Delivery
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        On orders over $99
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-green-100 dark:bg-green-900/60 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                      <ShieldCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                        Secure Checkout
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        30-day easy returns
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          )}

        </div>

      </section>

      <CTA />
      <Footer />
    </>
  );
};

export default ProductDetail;
