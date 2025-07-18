import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

import Image1 from '../../assets/img_franchise/image58.png';
import Image2 from '../../assets/img_franchise/image59.png';
export default function Franchise() {
  return (
    <div>
      <Navbar />
      <div className="pt-[90px]">

        {/* Franchise Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[400px]">
                <Image 
                  src={Image1}
                  alt="Franchise Opportunity 1" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#503B28] mb-4">Start Your Journey</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover the opportunity to own your own Cafe Meraki franchise and be part of our growing family of successful entrepreneurs.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-[400px]">
                <Image 
                  src={Image2}
                  alt="Franchise Opportunity 2" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#503B28] mb-4">Complete Package List</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover flexible franchise options tailored to different investment levels and business goals.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#503B28] to-[#6B4E3D] rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Franchise?</h2>
              <p className="text-white text-lg mb-6 opacity-90">
                Contact us today to learn more about franchise opportunities and take the first step towards owning your own Cafe Meraki.
              </p>
              <Link href="/message">
                <button className="bg-white text-[#503B28] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Get Started Today
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}