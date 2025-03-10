"use client";
// import { LogIn } from "lucide-react";  // Import icon login dari lucide-react
import Image from "next/image";

const Header = () => {
  return (
    <>
      {/* Header / Navbar */}
      <header className="bg-green-700 shadow-md py-3 sticky top-0 z-30">
        <div className="w-full max-w-screen-xl mx-auto flex items-center px-4 md:px-8">
          {/* Logo dan Nama Perusahaan */}
          <div className="flex items-center space-x-5 mr-auto">
            <Image
              src="/planttt.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-white">Plant Co.</span>
          </div>

          {/* Navigasi untuk Desktop */}
          <nav className="hidden md:flex space-x-6 items-center">
            {["About Us", "Services", "Testimonials"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white hover:text-green-300 transition-colors"
              >
                {item}
              </a>
            ))}

            
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
