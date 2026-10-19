import { HeartIcon } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";

 /* Toggleable heart used on cards + the description page */
 function WishlistButton({ product, size = "sm" }) {
  const { has, toggle } = useWishlist();

  if (!product) return null;

  const saved = has(product.id);

  const sizes =
    size === "lg"
      ? "w-12 h-12 rounded-full"
      : "w-9 h-9 rounded-full";

  const icon = size === "lg" ? "w-5 h-5" : "w-4 h-4";

  return (
    <button
      type="button"
      onClick={() => toggle(product)}
      aria-pressed={saved}
      aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
      title={saved ? "Remove from wishlist" : "Add to wishlist"}
      className={
        sizes +
        " flex items-center justify-center shadow-sm border transition active:scale-90 " +
        (saved
          ? "bg-red-50 dark:bg-red-900/50 border-red-100 dark:border-red-800 text-red-500"
          : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 text-slate-400 dark:text-slate-500 hover:text-red-500 hover:border-red-200 dark:hover:border-red-700")
      }
    >
      <HeartIcon className={icon + (saved ? " fill-current" : "")} />
    </button>
  );
}

export default WishlistButton;
