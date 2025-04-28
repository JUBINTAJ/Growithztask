'use client'
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, User, Menu } from "lucide-react";
import { Pacifico } from "next/font/google";
import { useState } from "react";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#fdf8ed] py-4 px-6 flex items-center justify-between relative">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 relative">
          <Image 
            src="/Vector.png" 
            alt="Paws & Tails Logo" 
            layout="fill" 
            objectFit="contain" 
            priority
          />
        </div>
        <div className={`${pacifico.className} text-[#5EBFB5] text-3xl font-semibold`}>
          <Link href="/">Paws&Tails</Link>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="/product" className="text-[#333333] font-bold hover:text-[#5EBFB5] transition-colors">Products</Link>
        <Link href="/About" className="text-[#333333] font-bold hover:text-[#5EBFB5] transition-colors">About Us</Link>
        <Link href="/contact" className="text-[#333333] font-bold hover:text-[#5EBFB5] transition-colors">Contact</Link>
        <Link href="/Revieaw" className="text-[#333333] font-bold hover:text-[#5EBFB5] transition-colors">Reviews</Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link href="/Login" className="text-[#5EBFB5] hover:text-[#333333] transition-colors">
          <User size={24} />
        </Link>
        <div className="relative">
          <Link href="/Cart" className="text-[#5EBFB5] hover:text-[#333333] transition-colors">
            <ShoppingCart size={24} />
          </Link>
          <div className="absolute -top-2 -right-2 bg-[#E6A76F] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            3
          </div>
        </div>
        <button className="md:hidden text-[#5EBFB5]" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={28} />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#fdf8ed] flex flex-col items-center gap-4 py-4 shadow-md md:hidden">
          <Link href="/product" className="text-[#333333] font-bold hover:text-[#5EBFB5] transition-colors" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/About" className="text-[#333333] font-bold hover:text-[#5EBFB5] transition-colors" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/contact" className="text-[#333333] font-bold hover:text-[#5EBFB5] transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/Revieaw" className="text-[#333333] font-bold hover:text-[#5EBFB5] transition-colors" onClick={() => setMenuOpen(false)}>Reviews</Link>
        </div>
      )}
    </header>
  );
}
