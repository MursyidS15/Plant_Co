"use client";
import Image from "next/image";

const Header = () => {
  return (
    <>
      
      <header className="bg-green-700 shadow-md py-3 sticky top-0 z-30">
        <div className="w-full max-w-screen-xl mx-auto flex items-center px-4 md:px-8">
          
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
