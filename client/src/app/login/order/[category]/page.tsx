
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NavbarMenu from "../../navbarmenu/page";
import { categoryProducts, SubCategory } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";

interface CategoryPageProps {
  params: {
    category: string;
  };
}


export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const subCategories: SubCategory[] = categoryProducts[category] || [];

  return (
    <div className="min-h-screen bg-[#f7f6f2]">
      <Navbar />
      <NavbarMenu />
      <div className="pt-[150px]">
        <h1 className="font-bold text-3xl text-center py-10">
          {category.replace(/([A-Z])/g, ' $1').replace(/^./, (str: string) => str.toUpperCase())}
        </h1>
        {subCategories.length > 0 ? (
          subCategories.map((sub) => (
            <div key={sub.subCategory} className="mb-12">
              <div className="category-title text-2xl font-semibold mb-4">{sub.subCategory}</div>
              <ProductGrid products={sub.products} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No products found for this category.</div>
        )}
      </div>
      <Footer />
    </div>
  );
}

