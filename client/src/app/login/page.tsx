import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function login() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white pt-40 pb-12">
        <div className="relative w-[300px] md:w-[550px] h-[350px] rounded-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.3),0_6px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-around">
            <form action="" method="post" className="flex flex-col items-center justify-center w-[70%] min-w-[238px] px-2">
              <h2 className="title text-2xl font-bold mb-6 text-center">Log in</h2>
              <div className="input-field mb-4 flex items-center border rounded px-3 py-2 w-full">
                <i className="fas fa-user mr-2"></i>
                <input type="text" name="email" placeholder="Email" required className="flex-1 outline-none bg-transparent" />
              </div>
              <div className="input-field mb-4 flex items-center border rounded px-3 py-2 w-full">
                <i className="fas fa-lock mr-2"></i>
                <input type="password" name="password" placeholder="Password" required className="flex-1 outline-none bg-transparent" />
              </div>
              <Link href="/login/order" className="w-full flex justify-center">
                <button type="button" className="btn w-full bg-[#2A1B0F] w-[200px] text-white py-2 rounded-full font-semibold hover:bg-[#1A1109] transition-colors mb-4 cursor-pointer">
                  LOGIN
                </button>
              </Link>
              <p className="guestmode text-center pt-2"><a href="/login/order" className="text-[#2A1B0F] underline hover:text-blue-600 text-[16px] font-sans">Guest mode</a></p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

