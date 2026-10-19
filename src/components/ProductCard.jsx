import { Link } from "react-router-dom";
import { ShoppingCartIcon, StarIcon, TrashIcon } from "lucide-react";
import { useCart } from "../context/CartContext";
import WishlistButton from "./WishlistButton";

 function ProductCard({ product }) {
  const { add, items, removeAll } = useCart();

  if (!product) return null;

  const { id, title, price, image, category, rating } = product;

  const inCart = items.filter((item) => item.id === id).length;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition p-4 flex flex-col">

      {/* Product Image -> links to the description page */}
      <div className="relative">
        <Link
          to={`/product/${id}`}
          aria-label={`View details for ${title}`}
          className="rounded-lg h-44 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-center overflow-hidden group"
        >
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="max-h-40 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Wishlist heart */}
        <div className="absolute top-2 right-2 z-10">
          <WishlistButton product={product} />
        </div>
      </div>

      {/* Category */}
      <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mt-4">
        {category}
      </span>

      {/* Title (also clickable) */}
      <Link
        to={`/product/${id}`}
        className="text-sm font-semibold text-slate-900 dark:text-white mt-1 line-clamp-2 leading-snug hover:text-blue-600 dark:hover:text-blue-400 transition"
      >
        {title}
      </Link>

      {/* Rating */}
      {rating && (
        <div className="flex items-center gap-1.5 mt-2">
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={
                  "w-3.5 h-3.5 " +
                  (i < Math.round(rating.rate) ? "fill-current" : "")
                }
              />
            ))}
          </div>
          <span className="text-xs text-slate-400 dark:text-slate-500">({rating.count})</span>
        </div>
      )}

      <div className="flex-1"></div>

      {/* Price */}
      <p className="text-lg font-bold text-slate-900 dark:text-white mt-4">
        ${Number(price).toFixed(2)}
      </p>

      {/* Add <-> Remove toggle button */}
      {inCart === 0 ? (
        <button
          onClick={() => add(product, 1)}
          className="w-full inline-flex items-center justify-center gap-1.5 mt-3 text-xs font-semibold px-3 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
        >
          <ShoppingCartIcon className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      ) : (
        <button
          onClick={() => removeAll(id)}
          className="w-full inline-flex items-center justify-center gap-1.5 mt-3 text-xs font-semibold px-3 py-2.5 rounded-lg bg-red-50 dark:bg-red-900/40 hover:bg-red-100 dark:hover:bg-red-900/60 text-red-600 dark:text-red-400 transition"
        >
          <TrashIcon className="w-3.5 h-3.5" />
          Remove from Cart ({inCart})
        </button>
      )}

    </div>
  );
}

export default ProductCard;
