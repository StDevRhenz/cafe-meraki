


"use client";
import Link from "next/link";

const menuItems = [
  { label: "Tea & Coffee", href: "/login/order/tea&coffee" },
  { label: "Frappe", href: "/login/order/FRAPPE" },
  { label: "Cold Drinks", href: "/login/order/Cold-Drinks" },
  { label: "Rice Meal", href: "/login/order/Rice%20Meal" },
  { label: "Foods", href: "/login/order/Foods" },
  { label: "Meraki Hotbox", href: "/login/order/hotbox" },
];

export default function NavbarMenu() {
  return (
    <nav className="fixed top-[93px] w-full z-[999] bg-[#503B28] overflow-x-auto whitespace-nowrap flex justify-around items-center">
      {menuItems.map((item, idx) => (
        <div key={item.label} className="relative flex items-center">
          <Link
            href={item.href}
            className="block text-[#f2f2f2] text-center px-8 py-3 text-[17px] font-bold hover:text-white transition-colors duration-150"
          >
            {item.label}
          </Link>
          {idx !== menuItems.length - 1 && (
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#f2f2f2] px-2 select-none">|</span>
          )}
        </div>
      ))}
    </nav>
  );
}




