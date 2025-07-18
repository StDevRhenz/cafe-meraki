import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import Image1 from '../../assets/img_location/image44.png';
import Image2 from '../../assets/img_location/Sucat.png';

export default function Location() {
  return (
    <div>
      <Navbar />
      <div className="pt-[90px] bg-transparent">
        {/* Locations Content */}
        <div className="bg-transparent">
          {/* Makati Main Branch */}
          <div className="relative group w-[90%] mx-auto mt-[2.5%] mb-[2.5%]">
            <Image 
              src={Image1}
              alt="Cafe Meraki Makati Branch" 
              width={1400}
              height={500}
              className="w-full h-[500px] object-contain rounded-3xl shadow-lg"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-[24px] font-bold mb-2 drop-shadow">VISIT US TODAY!</h3>
              <h2 className="text-white text-[32px] font-bold mb-4 drop-shadow">CAFE MERAKI</h2>
              <h4 className="text-white text-[20px] font-semibold mb-2 drop-shadow">Makati (Main Branch)</h4>
              <p className="text-white text-[16px] mb-6 drop-shadow">Open Daily | 10:00 AM - 10:00 PM</p>
              <Link href="https://maps.app.goo.gl/F59NTiXHjEE6BsUs9" target="_blank">
                <button className="bg-[#503B28] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6B4E3D] transition-colors duration-300">
                  VIEW ON MAPS
                </button>
              </Link>
            </div>
          </div>

          {/* Sucat Branch */}
          <div className="relative group w-[90%] mx-auto mt-[2.5%] mb-[2.5%]">
            <Image 
              src={Image2}
              alt="Cafe Meraki Sucat Branch" 
              width={1400}
              height={500}
              className="w-full h-[500px] object-contain rounded-3xl shadow-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-[24px] font-bold mb-2 drop-shadow">VISIT US TODAY!</h3>
              <h2 className="text-white text-[32px] font-bold mb-4 drop-shadow">CAFE MERAKI</h2>
              <h4 className="text-white text-[20px] font-semibold mb-2 drop-shadow">Sucat Branch</h4>
              <p className="text-white text-[16px] mb-6 drop-shadow">Open Daily | 10:00 AM - 10:00 PM</p>
              <Link href="https://maps.app.goo.gl/FfRmwHbSAyPPBq778" target="_blank">
                <button className="bg-[#503B28] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6B4E3D] transition-colors duration-300">
                  VIEW ON MAPS
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
