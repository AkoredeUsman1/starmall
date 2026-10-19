import { useMemo, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  CreditCardIcon,
  LockIcon,
  PackageIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "lucide-react";
import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

 const Checkout = () => {
  const { items, count, subtotal, clear } = useCart();
  const navigate = useNavigate();

  const [placed, setPlaced] = useState(false);
  const [orderId] = useState(
    () => "SM-" + Math.floor(100000 + Math.random() * 900000)
  );

  const delivery = subtotal > 0 && subtotal < 99 ? 9.99 : 0;
  const total = subtotal + delivery;

  /* Group identical products for the summary */
  const rows = useMemo(
    () =>
      items.reduce((acc, item) => {
        const row = acc.find((r) => r.id === item.id);

        if (row) {
          row.qty += 1;
        } else {
          acc.push({ ...item, qty: 1 });
        }

        return acc;
      }, []),
    [items]
  );

  /* Form field styles (same look as the quote form) */
  const label = "block text-xs text-slate-500 dark:text-slate-400 mb-1.5";
  const input =
    "w-full border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-white dark:bg-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition";

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Pretend to charge the card, then show the confirmation */
    setPlaced(true);
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Confirmation screen */
  if (placed) {
    return (
      <>
        <Navbar />

        <section className="w-full bg-white dark:bg-slate-900 py-20">
          <div className="max-w-xl mx-auto px-5 text-center">

            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/60 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto">
              <CheckCircleIcon className="w-10 h-10" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-6">
              Order Confirmed!
            </h1>

            <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
              Thanks for your order. A confirmation email is on its way with
              your tracking details.
            </p>

            <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 mt-8 text-left">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">Order number</span>
                <span className="text-slate-900 dark:text-white font-semibold">{orderId}</span>
              </div>

              <div className="flex items-center justify-between text-sm mt-3">
                <span className="text-slate-500 dark:text-slate-400">Estimated delivery</span>
                <span className="text-slate-900 dark:text-white font-semibold">
                  3–5 business days
                </span>
              </div>

              <div className="flex items-center justify-between text-sm mt-3">
                <span className="text-slate-500 dark:text-slate-400">Shipping to</span>
                <span className="text-slate-900 dark:text-white font-semibold">Chicago, IL</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="/shop"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Continue Shopping
              </Link>

              <Link
                to="/"
                className="border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium px-6 py-3 rounded-lg transition"
              >
                Back to Home
              </Link>
            </div>

          </div>
        </section>

        <Footer />
      </>
    );
  }

  /* Guard: nothing to check out */
  if (count === 0) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <>
      <Navbar />

      <section className="w-full bg-white dark:bg-slate-900 py-10 md:py-14">

        <div className="max-w-6xl mx-auto px-5">

          {/* Back to cart */}
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 transition"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Cart
          </Link>

          <div className="mt-6">

            <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full">
              Checkout
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-4">
              Secure Checkout
            </h1>

            <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 flex items-center gap-2">
              <LockIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
              Your payment information is encrypted and secure.
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 items-start">

            {/* =====================
                CHECKOUT FORM
            ===================== */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 p-6 md:p-8"
            >

              {/* Contact */}
              <h2 className="font-semibold text-slate-900 dark:text-white text-lg">
                Contact Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                <div>
                  <label className={label} htmlFor="co-first">First Name</label>
                  <input id="co-first" type="text" placeholder="John" className={input} required />
                </div>

                <div>
                  <label className={label} htmlFor="co-last">Last Name</label>
                  <input id="co-last" type="text" placeholder="Smith" className={input} required />
                </div>

                <div>
                  <label className={label} htmlFor="co-email">Email</label>
                  <input id="co-email" type="email" placeholder="john@example.com" className={input} required />
                </div>

                <div>
                  <label className={label} htmlFor="co-phone">Phone</label>
                  <input id="co-phone" type="tel" placeholder="555-000-0000" className={input} required />
                </div>

              </div>

              {/* Shipping */}
              <h2 className="font-semibold text-slate-900 dark:text-white text-lg mt-8">
                Shipping Address
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                <div className="sm:col-span-2">
                  <label className={label} htmlFor="co-address">Street Address</label>
                  <input id="co-address" type="text" placeholder="100 Moving Way" className={input} required />
                </div>

                <div>
                  <label className={label} htmlFor="co-city">City</label>
                  <input id="co-city" type="text" placeholder="Chicago" className={input} required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={label} htmlFor="co-state">State</label>
                    <input id="co-state" type="text" placeholder="IL" className={input} required />
                  </div>

                  <div>
                    <label className={label} htmlFor="co-zip">ZIP Code</label>
                    <input id="co-zip" type="text" placeholder="60601" className={input} required />
                  </div>
                </div>

              </div>

              {/* Delivery method */}
              <h2 className="font-semibold text-slate-900 dark:text-white text-lg mt-8">
                Delivery Method
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                <label className="flex items-start gap-3 border border-blue-500 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 rounded-lg p-4 cursor-pointer">
                  <input type="radio" name="shipping" defaultChecked className="mt-0.5 text-blue-600 focus:ring-blue-500" />

                  <span className="flex-1">
                    <span className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                      <TruckIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Standard
                    </span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1">
                      3–5 business days
                    </span>
                  </span>

                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {delivery === 0 ? "Free" : `$${delivery.toFixed(2)}`}
                  </span>
                </label>

                <label className="flex items-start gap-3 border border-slate-200 dark:border-slate-700 rounded-lg p-4 cursor-pointer hover:border-slate-300 dark:hover:border-slate-600 transition">
                  <input type="radio" name="shipping" className="mt-0.5 text-blue-600 focus:ring-blue-500" />

                  <span className="flex-1">
                    <span className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                      <PackageIcon className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      Express
                    </span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1">
                      1–2 business days
                    </span>
                  </span>

                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    $19.99
                  </span>
                </label>

              </div>

              {/* Payment */}
              <h2 className="font-semibold text-slate-900 dark:text-white text-lg mt-8 flex items-center gap-2">
                <CreditCardIcon className="w-5 h-5 text-slate-400 dark:text-slate-500" />
                Payment Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

                <div className="sm:col-span-2">
                  <label className={label} htmlFor="co-card">Card Number</label>
                  <input id="co-card" type="text" inputMode="numeric" placeholder="4242 4242 4242 4242" className={input} required />
                </div>

                <div>
                  <label className={label} htmlFor="co-exp">Expiry Date</label>
                  <input id="co-exp" type="text" placeholder="MM/YY" className={input} required />
                </div>

                <div>
                  <label className={label} htmlFor="co-cvc">CVC</label>
                  <input id="co-cvc" type="text" inputMode="numeric" placeholder="123" className={input} required />
                </div>

              </div>

              {/* Place order */}
              <button
                type="submit"
                className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-lg transition"
              >
                Place Order · ${total.toFixed(2)}
              </button>

              <p className="text-xs text-slate-400 dark:text-slate-500 text-center mt-4 flex items-center justify-center gap-1.5">
                <LockIcon className="w-3.5 h-3.5" />
                This is a demo — no real payment will be taken.
              </p>

            </form>

            {/* =====================
                ORDER SUMMARY
            ===================== */}
            <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6">

              <h2 className="font-semibold text-slate-900 dark:text-white text-lg">
                Order Summary
              </h2>

              <div className="mt-5 space-y-4 max-h-72 overflow-y-auto pr-1">

                {rows.map((item) => (
                  <div key={item.id} className="flex gap-3">

                    <div className="w-14 h-14 shrink-0 rounded-lg bg-white dark:bg-slate-900/60 flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-700">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-h-11 max-w-full object-contain mix-blend-multiply"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-slate-900 dark:text-white line-clamp-2 leading-snug">
                        {item.title}
                      </p>

                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          Qty {item.qty}
                        </span>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">
                          ${(Number(item.price) * item.qty).toFixed(2)}
                        </span>
                      </div>
                    </div>

                  </div>
                ))}

              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-700 space-y-3 text-sm">

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Subtotal</span>
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

              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-white">Total</span>
                <span className="text-xl font-bold text-slate-900 dark:text-white">
                  ${total.toFixed(2)}
                </span>
              </div>

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

        </div>

      </section>

      <CTA />
      <Footer />
    </>
  );
};

export default Checkout;
