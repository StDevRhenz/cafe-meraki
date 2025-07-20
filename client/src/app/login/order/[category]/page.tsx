import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import NavbarMenu from "../../navbarmenu/page";



import cheesecake from '../../../../assets/img_allOrder/cheesecake (1).png';
import darkChoco from '../../../../assets/img_allOrder/DARK CHOCO MT (1).png';
import hazelnut from '../../../../assets/img_allOrder/HAZELNUT MT (1).png';
import matcha from '../../../../assets/img_allOrder/MATCHA MT.png';
import redVelvet from '../../../../assets/img_allOrder/red velvet (1).png';
import whiteChoco from '../../../../assets/img_allOrder/white choco.png';
import merakiEspresso from '../../../../assets/img_allOrder/Meraki Espresso.png';
import americano from '../../../../assets/img_allOrder/americano.png';
import caramelMacchiatto from '../../../../assets/img_allOrder/Caramel Macchiatto.png';
import spanishLatte from '../../../../assets/img_allOrder/Spanish Latte.png';


// Example product data by category
import type { StaticImageData } from "next/image";

type Product = { name: string; price: string; img: StaticImageData | string };
type MilkteaSection = { milktea: Product[]; espresso: Product[] };
type ProductData = Record<string, Product[] | MilkteaSection>;

const productData: ProductData = {
  "milktea": {
    milktea: [
      { name: "CHEESECAKE", price: "₱100.00", img: cheesecake },
      { name: "DARK CHOCO", price: "₱100.00", img: darkChoco },
      { name: "HAZEL NUT", price: "₱100.00", img: hazelnut },
      { name: "MATCHA", price: "₱100.00", img: matcha },
      { name: "RED VELVET", price: "₱100.00", img: redVelvet },
    ],
    espresso: [
      { name: "White choco", price: "₱100.00", img: whiteChoco },
      { name: "Meraki Espresso", price: "₱100.00", img: merakiEspresso },
      { name: "Americano Espresso", price: "₱100.00", img: americano },
      { name: "Caramel Macchiatto", price: "₱100.00", img: caramelMacchiatto },
      { name: "Spanish Latte", price: "₱100.00", img: spanishLatte },
    ],
  },
  "frappe": [

  ],
  "cold-drinks": [

  ],
  "rice-meal": [

  ],
  "foods": [

  ],
  "hotbox": [

  ],
};

const categoryKeyMap: Record<string, string> = {
  "tea&coffee": "milktea",
  "milktea": "milktea",
  "frappe": "frappe",
  "cold-drinks": "cold-drinks",
  "rice-meal": "rice-meal",
  "foods": "foods",
  "hotbox": "hotbox",
};


const categoryDisplayNames: Record<string, string> = {
  "milktea": "TEA & COFFEE",
  "frappe": "FRAPPE",
  "cold-drinks": "COLD DRINKS",
  "rice-meal": "RICE MEAL",
  "foods": "FOODS",
  "hotbox": "MERAKI HOTBOX",
};

function getCategoryKey(param: string) {
  const decoded = decodeURIComponent(param).toLowerCase();
  const normalized = decoded.replace(/\s+/g, "-").replace(/[^a-z0-9-&]/g, "");
  return categoryKeyMap[normalized] || normalized;
}



export default async function CategoryPage({ params }: { params: { category: string } }) {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category;
  const categoryKey = getCategoryKey(rawCategory);
  const displayName = categoryDisplayNames[categoryKey] || rawCategory.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  // Special rendering for TEA & COFFEE (milktea)
  if (categoryKey === "milktea") {
    const milkteaSection = productData[categoryKey] as MilkteaSection;
    const milkteaProducts: Product[] = milkteaSection?.milktea || [];
    const espressoProducts: Product[] = milkteaSection?.espresso || [];
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <NavbarMenu />
        <main className="pt-[170px] pb-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold mt-8 mb-2">MILKTEA</h1>
              <hr className="w-24 border-b-2 border-[#2A1B0F] mb-8" />
            </div>
            {milkteaProducts.length === 0 ? (
              <div className="text-center text-gray-500">No products found for MILKTEA.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
                {milkteaProducts.map((product: Product, idx: number) => (
                  <div key={idx} className="flex flex-col items-center justify-between bg-[#C7B88F] rounded-2xl p-6 w-[300px] h-[350px] shadow-md">
                    <Image src={product.img} alt={product.name} width={180} height={180} className="rounded-lg object-contain mb-4" />
                    <div className="text-center flex-1 flex flex-col justify-end">
                      <div className="font-bold text-lg mb-1 tracking-wide">{product.name}</div>
                      <div className="text-[#2A1B0F] font-bold mb-2">{product.price}</div>
                      <Link href="/login">
                        <button className="order-button bg-[#2A1B0F] text-white px-8 py-2 rounded-full font-semibold hover:bg-[#1A1109] transition-colors">ORDER</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold mt-8 mb-2">ESPRESSO</h1>
              <hr className="w-24 border-b-2 border-[#2A1B0F] mb-8" />
            </div>
            {espressoProducts.length === 0 ? (
              <div className="text-center text-gray-500">No products found for ESPRESSO.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {espressoProducts.map((product: Product, idx: number) => (
                  <div key={idx} className="flex flex-col items-center justify-between bg-[#C7B88F] rounded-2xl p-6 w-[300px] h-[350px] shadow-md">
                    <Image src={product.img} alt={product.name} width={180} height={180} className="rounded-lg object-contain mb-4" />
                    <div className="text-center flex-1 flex flex-col justify-end">
                      <div className="font-bold text-lg mb-1 tracking-wide">{product.name}</div>
                      <div className="text-[#2A1B0F] font-bold mb-2">{product.price}</div>
                      <Link href="/login">
                        <button className="order-button bg-[#2A1B0F] text-white px-8 py-2 rounded-full font-semibold hover:bg-[#1A1109] transition-colors">ORDER</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Default rendering for other categories
  const productsRaw = productData[categoryKey];
  const products: Product[] = Array.isArray(productsRaw) ? productsRaw : [];
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <NavbarMenu />
      <main className="pt-[170px] pb-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mt-8 mb-2">{displayName}</h1>
            <hr className="w-24 border-b-2 border-[#2A1B0F] mb-8" />
          </div>
          {products.length === 0 ? (
            <div className="text-center text-gray-500">No products found for this category.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product: Product, idx: number) => (
                <div key={idx} className="flex flex-col items-center justify-between bg-[#C7B88F] rounded-2xl p-6 w-[300px] h-[350px] shadow-md">
                  <Image src={product.img} alt={product.name} width={180} height={180} className="rounded-lg object-contain mb-4" />
                  <div className="text-center flex-1 flex flex-col justify-end">
                    <div className="font-bold text-lg mb-1 tracking-wide">{product.name}</div>
                    <div className="text-[#2A1B0F] font-bold mb-2">{product.price}</div>
                    <Link href="/login">
                      <button className="order-button bg-[#2A1B0F] text-white px-8 py-2 rounded-full font-semibold hover:bg-[#1A1109] transition-colors">ORDER</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
