
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/CM_Logo.jpg';

export default function Navbar() {
  return (
    <nav className="w-full h-[90px] m-0 flex bg-white border-black z-[999] fixed top-0 border-b-[3px] border-b-[#2A1B0F]">
      <div className="flex justify-between items-center w-full px-10 font-bold">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image 
              src={Logo} 
              alt="Cafe Meraki Logo" 
              width={50} 
              height={50} 
              className="max-h-16"
            />
          </Link>
          <ul className="flex items-center gap-8">
            <li>
              <Link 
                href="/about" 
                className="text-black uppercase text-sm font-medium hover:text-[#2A1B0F] transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bottom-[-10px] after:left-0 after:bg-[#2A1B0F] after:transition-all after:duration-500 hover:after:w-full"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="text-black uppercase text-sm font-medium hover:text-[#2A1B0F] transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bottom-[-10px] after:left-0 after:bg-[#2A1B0F] after:transition-all after:duration-500 hover:after:w-full"
              >
                FRANCHISE
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className="text-black uppercase text-sm font-medium hover:text-[#2A1B0F] transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bottom-[-10px] after:left-0 after:bg-[#2A1B0F] after:transition-all after:duration-500 hover:after:w-full"
              >
                LOCATIONS
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <Link 
            href="#" 
            className="bg-white text-[#2A1B0F] border-2 border-[#2A1B0F] px-6 py-2 rounded-[25px] hover:bg-[#2A1B0F] hover:text-white transition-all duration-300 font-medium"
          >
            LOGIN/SIGNUP
          </Link>
        </div>
      </div>
    </nav>
  );
}
