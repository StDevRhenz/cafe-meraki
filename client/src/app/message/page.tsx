import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Image1 from '../../assets/img_message/Group 1 (2).png';

export default function Message() {
  return (
    <div>
      <Navbar />
      <div className="pt-[90px]">
        {/* Contact Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            
            {/* Left Side - Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Image 
                  src={Image1}
                  alt="Contact Us" 
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-[#503B28] mb-2">Contact Us!</h2>
                <p className="text-gray-600">We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
              </div>
              
              <form action="#" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="34341a79-c523-41f8-b5c0-22ac3dfc8820" />
                
                <div>
                  <input 
                    type="text" 
                    name="Name" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#503B28] focus:border-transparent outline-none transition-all duration-300"
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="Email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#503B28] focus:border-transparent outline-none transition-all duration-300"
                    required 
                  />
                </div>
                
                <div>
                  <textarea 
                    name="Message" 
                    placeholder="Your message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#503B28] focus:border-transparent outline-none transition-all duration-300 resize-vertical"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#503B28] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#6B4E3D] transition-colors duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}