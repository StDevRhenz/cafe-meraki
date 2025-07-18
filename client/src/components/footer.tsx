

import Image from 'next/image';
import Link from 'next/link';
import Facebook from '../assets/fb.png';
import Instagram from '../assets/ig.png';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 border-2 border-black">
      <div className="w-[90%] max-w-6xl mx-auto">
        {/* Divider Line */}
        {/* <hr className="border-black/30 mb-8" /> */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/cafemerakiph" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src={Facebook} 
                  alt="Facebook" 
                  width={40} 
                  height={40}
                  className="rounded"
                />
              </a>
              <a 
                href="https://www.instagram.com/cafemerakiph/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src={Instagram} 
                  alt="Instagram" 
                  width={40} 
                  height={40}
                  className="rounded"
                />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-black/70">Phone:</p>
              <p className="font-semibold">0929 674 0658</p>
              <p className="text-black/70">Email:</p>
              <Link 
                href="/message" 
                className="font-semibold hover:text-[#2A1B0F] transition-colors"
              >
                onemerakicafe@gmail.com
              </Link>
            </div>
          </div>

          {/* Order Online Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Order Online</h3>
            <div className="space-y-2">
              <a 
                href="https://food.grab.com/ph/en/restaurant/cafe-meraki-reyes-street-delivery/2-CYVAFAL2GE4JKE?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-black/70 hover:text-[#2A1B0F] transition-colors"
              >
                GrabFood
              </a>
              <a 
                href="#" 
                className="block text-black/70 hover:text-[#2A1B0F] transition-colors"
              >
                Food Panda
              </a>
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <div className="space-y-2">
              <p className="text-black/70">Makati Main Branch:</p>
              <p className="font-semibold leading-relaxed">
                2079 M. Reyes St.,<br />
                Pio del Pilar, Makati,<br />
                Philippines
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-black/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Café Meraki</h2>
              <p className="text-black/70 text-sm">Experience a soulful taste</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-black/70 text-sm">
                © 2023 Café Meraki. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}