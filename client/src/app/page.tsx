import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


//images section 1
import Image1 from '../assets/img_home/background.png';
import Image3 from '../assets/img_home/background(2).png';
import Image4 from '../assets/img_home/background(3).png';

//images section 2
import Shet from '../assets/img_home/shet.png';
import ImageGroup2 from '../assets/img_home/Group 9 (1).png';

//images section 3
import Group10 from '../assets/img_home/Group 10.png';
import Image44 from '../assets/img_home/image 44.png';

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="pt-[90px]">
        <div className="slider relative w-full h-screen overflow-hidden">
          <div className="slider-wrapper absolute inset-0 w-full h-full">
            <div className="flex animate-auto-slide-3 w-[300%] h-full">
              <div className="w-1/3 h-full relative flex-shrink-0">
                <Image 
                  src={Image1}
                  alt="Background 1"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-1/3 h-full relative flex-shrink-0">
                <Image 
                  src={Image3}
                  alt="Background 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-1/3 h-full relative flex-shrink-0">
                <Image 
                  src={Image4}
                  alt="Background 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white px-4">
              <h4 className="text-2xl md:text-3xl mb-6 font-light tracking-wider animate-fade-in">
                ━━━━━ Café Meraki ━━━━━
              </h4>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-4xl animate-fade-in">
                Experience a soulful taste
              </h1>
              <Link href="#discover">
                <button className="px-8 py-4 text-lg font-semibold border-2 border-white bg-transparent text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 animate-fade-in">
                  Discover More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <section id="discover" className="py-16">
          {/* Visit Us Section */}
          <div className="w-[95%] max-w-7xl mx-auto">
            <div className="flex my-10 gap-5">
              <div className="flex-[1000px]">
                <Image 
                  src={Shet}
                  alt="Visit us" 
                  width={1000}
                  height={600}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex-[500px] border-2 border-black rounded-[50px] ml-5 flex items-center justify-center">
                <div className="text-center px-8">
                  <h4 className="text-3xl text-black font-bold mb-4">HAVE A SOULFUL TASTE</h4>
                  <h5 className="text-xl text-black mb-6">Explore our menu</h5>
                  <Link href="#">
                    <button className="px-8 py-3 bg-[#2A1B0F] text-white rounded-full hover:bg-[#1A1109] transition-colors">
                      ORDER NOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Occasions Section */}
          <div className="w-[95%] max-w-7xl mx-auto py-16">
            <div className="relative">
              <Image 
                src={ImageGroup2}
                alt="occasions" 
                width={1600}
                height={700}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 w-[90%]">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                    CELEBRATE YOUR SPECIAL<br />OCCASIONS WITH US!
                  </h1>
                  <h4 className="text-lg md:text-xl lg:text-2xl mb-6">
                    Rent our Area (Makati Branch) EXCLUSIVELY for FREE<br />
                    minimum consumable of Php4,000
                  </h4>
                  <Link href="#">
                    <h6 className="text-base md:text-lg underline hover:text-amber-300 transition-colors cursor-pointer">
                      MESSAGE US
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="w-[95%] max-w-7xl mx-auto py-16">
            <div className="relative">
              <Image 
                src={Group10}
                alt="Location" 
                width={1600}
                height={700}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-left text-white px-4 w-[85%]">
                  <h4 className="text-2xl md:text-4xl font-bold mb-8 leading-relaxed">
                    Find the nearest Cafe Meraki<br />around your place!
                  </h4>
                  <Link href="#">
                    <button className="px-12 py-4 bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 mb-6 text-center min-w-[500px]">
                      BRANCHES
                    </button>
                  </Link>
                  <h6 className="text-lg">
                    Experience a soulful booth in your event.{' '}
                    <Link href="#" className="underline hover:text-amber-300">
                      Book us!
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* Visit Us Today Section */}
          <div className="w-[95%] max-w-7xl mx-auto py-16">
            <div className="flex gap-5">
              <div className="flex-[1000px]">
                <Image 
                  src={Image44}
                  alt="Visit us" 
                  width={1000}
                  height={600}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex-[400px] border-2 border-black rounded-[50px] ml-5 flex items-center justify-center">
                <div className="text-center px-8">
                  <h5 className="text-xl text-black mb-2">VISIT US TODAY!</h5>
                  <h4 className="text-3xl text-black font-bold mb-2">CAFE MERAKI</h4>
                  <h6 className="text-lg text-black mb-6">Makati Main Branch</h6>
                  <a 
                    href="https://maps.app.goo.gl/2iZ7GWw3eoU8ycXs9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button className="px-8 py-3 bg-[#2A1B0F] text-white rounded-full hover:bg-[#1A1109] transition-colors min-w-[300px]">
                      VIEW ON MAPS
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>





          
        </section>
      </main>
      <Footer />
    </div>
  );
}
