import BoxLayout from "../app/login/order/[category]/BoxLayout";
import type { Product } from "../data/products";

export default function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return <div className="col-span-full text-center text-gray-500">No products found for this category.</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-10 pb-20">
      {products.map((product, idx) => (
        <BoxLayout key={idx} {...product} />
      ))}
    </div>
  );
} 