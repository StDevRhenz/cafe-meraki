

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";




import Image1 from '../../../assets/img_allOrder/menupic.png';

import Image2 from '../../../assets/img_allOrder/Group 20.png';
import Image3 from '../../../assets/img_allOrder/Group 21.png';
import Image4 from '../../../assets/img_allOrder/Group 22.png';
import Image5 from '../../../assets/img_allOrder/Group 23.png';


import Image6 from '../../../assets/img_allOrder/Group 14.png';
import Image7 from '../../../assets/img_allOrder/Group 15.png';
import Image8 from '../../../assets/img_allOrder/Group 16.png';
import Image9 from '../../../assets/img_allOrder/Group 17.png';
import Image10 from '../../../assets/img_allOrder/Group 18.png';
import Image11 from '../../../assets/img_allOrder/Group 19.png';



export default function Order() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[90px] pb-10">
        {/* Slider Section - Centered */}
        <div className="flex justify-center items-center my-8">
          <div className="slider">
            <Image src={Image1} alt="Big Picture" width={1200} height={500} className="rounded-2xl object-cover" />
          </div>
        </div>

        {/* Featured Section */}
        <div className="featured text-center my-8">
          <h1 className="text-3xl font-bold mb-2">FEATURED</h1>
          <h4 className="text-lg mb-4">Discover new soulful taste here!</h4>
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-6">
              <Link href="/tea&coffee"><Image src={Image2} alt="Tea & Coffee" width={300} height={300} className="rounded-xl object-cover hover:scale-105 transition-transform" /></Link>
              <Link href="/Foods"><Image src={Image3} alt="Foods 1" width={300} height={300} className="rounded-xl object-cover hover:scale-105 transition-transform" /></Link>
              <Link href="/Foods"><Image src={Image4} alt="Foods 2" width={300} height={300} className="rounded-xl object-cover hover:scale-105 transition-transform" /></Link>
              <Link href="/tea&coffee"><Image src={Image5} alt="Tea & Coffee 2" width={300} height={300} className="rounded-xl object-cover hover:scale-105 transition-transform" /></Link>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="menu text-center my-8">
          <h1 className="text-3xl font-bold mb-2">MENU</h1>
          <div className="menulist flex justify-center">
            <div className="flex flex-wrap gap-6">
              <Link href="/login/order/tea&coffee"><Image src={Image6} alt="Tea & Coffee" width={220} height={220} className="rounded-xl object-cover hover:scale-105 transition-transform" /></Link>
              <Link href="/login/order/FRAPPE"><Image src={Image7} alt="Frappe" width={220} height={220} className="rounded-xl object-cover hover:scale-105 transition-transform" /></Link>
              <Link href="/login/order/Cold-Drinks"><Image src={Image8} alt="Cold Drinks" width={220} height={220} className="rounded-xl object-cover hover:scale-105 transition-transform" /></Link>
              <Link href="/login/order/Rice%20Meal"><Image src={Image9} alt="Rice Meal" width={220} height={220} className="rounded-xl object-cover hover:scale-105 transition-transform" /></Link>
              <Link href="/login/order/Foods"><Image src={Image10} alt="Foods" width={220} height={220} className="rounded-xl object-cover hover:scale-105 transition-transform" /></Link>
              <Link href="/login/order/hotbox"><Image src={Image11} alt="Hotbox" width={220} height={220} className="rounded-xl object-cover hover:scale-105 transition-transform" /></Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


