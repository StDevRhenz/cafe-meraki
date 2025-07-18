import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Image1 from '../../assets/img_about/image57.png';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="pt-[90px]">
        {/* About Section */}
        <div className="bg-[#503B28] w-[95%] h-[200px] mt-[2.5%] mb-8 py-[35px] flex items-center justify-center mx-auto">
          <p className="w-full max-w-[791px] text-white text-center text-[36px] leading-relaxed">
            meraki (v.) <br />
            to do something with soul, creativity, or love <br />
            to put something of yourself into your work <br />
          </p>
        </div>

        {/* Big Picture Section */}
        <div className="relative text-center text-white mt-8">
          <div className="w-full">
            <Image 
              src={Image1} 
              alt="ABOUT" 
              className="w-full h-auto"
              priority
            />
          </div>
          
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-[45%] max-w-lg text-lg md:text-xl lg:text-2xl text-white p-6 rounded-lg text-left">
            Cafe Meraki, led by owner Mark Marcos, is a renowned destination in Makati City. Known for its Taiwanese-style milk tea, frappes, and diverse menu, it has two branches. Mark&apos;s dedication to culinary excellence has made Cafe Meraki a beloved spot for exceptional beverages and delicious food. It&apos;s a testament to his commitment to providing an outstanding dining experience.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}