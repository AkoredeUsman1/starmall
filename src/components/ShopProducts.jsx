import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { RotateCcwIcon, ShoppingCartIcon } from "lucide-react";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

const API = "https://fakestoreapi.com/products";

 function ShopProducts() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [category, setCategory] = useState("all");

  const { count: cart } = useCart();

  const load = () => {
    setStatus("loading");

    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  };

  useEffect(load, []);

  const categories = useMemo(() => {
    const list = [...new Set(products.map((p) => p.category))];
    return ["all", ...list];
  }, [products]);

  const visible =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <section className="w-full bg-white dark:bg-slate-900 py-14">

      <div className="max-w-6xl mx-auto px-5">

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Our Products
          </h2>

          <Link
            to="/cart"
            className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/50 hover:bg-blue-100 dark:hover:bg-blue-900/70 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold transition"
          >
            <ShoppingCartIcon className="w-4 h-4" />
            Cart ({cart})
          </Link>

        </div>

        {/* Category Filter */}
        {status === "ready" && (
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={
                  "px-4 py-2 rounded-full text-xs font-semibold capitalize transition " +
                  (cat === category
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700")
                }
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* LOADING */}
        {status === "loading" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-slate-100 dark:border-slate-700 p-4 animate-pulse">
                <div className="h-44 rounded-lg bg-slate-100 dark:bg-slate-800"></div>
                <div className="h-3 w-20 bg-slate-100 dark:bg-slate-800 rounded mt-4"></div>
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded mt-3"></div>
                <div className="h-3 w-2/3 bg-slate-100 dark:bg-slate-800 rounded mt-2"></div>
                <div className="h-8 w-full bg-slate-100 dark:bg-slate-800 rounded mt-5"></div>
              </div>
            ))}
          </div>
        )}

        {/* ERROR */}
        {status === "error" && (
          <div className="text-center py-16 bg-gray-50 dark:bg-slate-800 rounded-xl">
            <p className="text-slate-600 dark:text-slate-300 font-medium">
              We could not load the products right now.
            </p>

            <button
              onClick={load}
              className="inline-flex items-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition"
            >
              <RotateCcwIcon className="w-4 h-4" />
              Try Again
            </button>
          </div>
        )}

        {/* PRODUCTS */}
        {status === "ready" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>

    </section>
  );
}

export default ShopProducts;
