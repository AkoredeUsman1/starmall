import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  TrashIcon,
  TruckIcon,
} from "lucide-react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

 const Cart = () => {
  const { items, count, subtotal, add, removeOne, removeAll, clear } = useCart();
  const navigate = useNavigate();

  const delivery = subtotal > 0 && subtotal < 99 ? 9.99 : 0;
  const total = subtotal + delivery;

  /* Group identical products so each row shows a quantity */
  const rows = items.reduce((acc, item) => {
    const row = acc.find((r) => r.id === item.id);

    if (row) {
      row.qty += 1;
    } else {
      acc.push({ ...item, qty: 1 });
    }

    return acc;
  }, []);

  return (
    <>
      <Navbar />

      <section className="w-full bg-white dark:bg-slate-900 py-12 md:py-16">

        <div className="max-w-6xl mx-auto px-5">

          {/* HEADER */}
          <div className="flex flex-wrap items-center justify-between gap-4">

            <div>
              <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full">
                Cart
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4">
                Your Cart
              </h1>
            </div>

            {count > 0 && (
              <button
                onClick={clear}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-red-600 transition font-medium"
              >
                Clear Cart
              </button>
            )}

          </div>

          {/* EMPTY CART */}
          {count === 0 && (
            <div className="text-center py-20 mt-8 bg-gray-50 dark:bg-slate-800 rounded-xl">

              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
                <ShoppingCartIcon className="w-7 h-7" />
              </div>

              <p className="text-slate-900 dark:text-white font-semibold text-lg mt-5">
                Your cart is empty
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Add some products and they will show up here.
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

          {/* CART WITH ITEMS */}
          {count > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 items-start">

              {/* ITEMS */}
              <div className="lg:col-span-2 space-y-4">

                {rows.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm p-4"
                  >

                    {/* Image */}
                    <Link
                      to={`/product/${item.id}`}
                      className="w-24 h-24 shrink-0 rounded-lg bg-slate-50 dark:bg-slate-900/60 flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-20 max-w-full object-contain mix-blend-multiply"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 min-w-0">

                      <div className="flex items-start justify-between gap-3">

                        <Link
                          to={`/product/${item.id}`}
                          className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-2 hover:text-blue-600 transition"
                        >
                          {item.title}
                        </Link>

                        {/* Remove ALL */}
                        <button
                          onClick={() => removeAll(item.id)}
                          aria-label={`Remove ${item.title} from cart`}
                          className="text-slate-400 dark:text-slate-500 hover:text-red-600 transition shrink-0"
                        >
                          <TrashIcon className="w-4.5 h-4.5" />
                        </button>

                      </div>

                      <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                        {item.category}
                      </span>

                      <div className="flex flex-wrap items-center justify-between gap-3 mt-3">

                        {/* Quantity stepper */}
                        <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg">
                          <button
                            onClick={() => removeOne(item.id)}
                            aria-label="Decrease quantity"
                            className="px-2.5 py-1.5 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition"
                          >
                            <MinusIcon className="w-3.5 h-3.5" />
                          </button>

                          <span className="w-8 text-center text-sm font-semibold text-slate-900 dark:text-white">
                            {item.qty}
                          </span>

                          <button
                            onClick={() => add(item, 1)}
                            aria-label="Increase quantity"
                            className="px-2.5 py-1.5 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition"
                          >
                            <PlusIcon className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="text-lg font-bold text-slate-900 dark:text-white">
                          ${(Number(item.price) * item.qty).toFixed(2)}
                        </span>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

              {/* ORDER SUMMARY */}
              <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6">

                <h2 className="font-semibold text-slate-900 dark:text-white text-lg">
                  Order Summary
                </h2>

                <div className="mt-5 space-y-3 text-sm">

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400">
                      Subtotal ({count} item{count > 1 ? "s" : ""})
                    </span>
                    <span className="text-slate-900 dark:text-white font-medium">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Delivery</span>
                    <span className="text-slate-900 dark:text-white font-medium">
                      {delivery === 0 ? "Free" : `$${delivery.toFixed(2)}`}
                    </span>
                  </div>

                </div>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="font-semibold text-slate-900 dark:text-white">Total</span>
                  <span className="text-xl font-bold text-slate-900 dark:text-white">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
                >
                  Proceed to Checkout
                </button>

                <Link
                  to="/shop"
                  className="block text-center text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 transition mt-4"
                >
                  Continue Shopping
                </Link>

                {/* Trust row */}
                <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700 space-y-3">

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                      <TruckIcon className="w-4 h-4" />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Free delivery on orders over $99
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-700 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                      <ShieldCheckIcon className="w-4 h-4" />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Secure checkout · 30-day easy returns
                    </p>
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

export default Cart;
