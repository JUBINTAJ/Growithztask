import Link from "next/link"
import { Facebook, Linkedin, Instagram } from "lucide-react"
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});


export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className={`text-2xl font-semibold italic mb-2 ${pacifico.className}`}>Paws & Tails</h2>
            <p className="text-center md:text-left text-sm mb-4">Quality pet products for your beloved companions.</p>
            <div className="flex space-x-3 mt-2">
              <Link
                href="#"
                className="bg-[#7DD3C8] text-[#2A2A2A] w-8 h-8 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="bg-[#7DD3C8] text-[#2A2A2A] w-8 h-8 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="#"
                className="bg-[#7DD3C8] text-[#2A2A2A] w-8 h-8 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="#" className="text-sm hover:text-[#7DD3C8] transition-colors">
                  Dogs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#7DD3C8] transition-colors">
                  Cats
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#7DD3C8] transition-colors">
                  Birds
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4">Help</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link href="#" className="text-sm hover:text-[#7DD3C8] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#7DD3C8] transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#7DD3C8] transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-[#7DD3C8] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-medium mb-4">Visit Us</h3>
            <address className="not-italic text-sm text-center md:text-left">
              <p>123 Pet Avenue</p>
              <p>Pawtown, PT 12345</p>
              <div className="mt-4">
                <p>Mon-Sat: 9AM-7PM</p>
                <p>Sunday: 10AM-5PM</p>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © 2025 Paws & Tails. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
