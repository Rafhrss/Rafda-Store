import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar muncul hanya jika scroll lebih dari 50px
      // Anda bisa mengatur angkanya menjadi 10 jika ingin langsung muncul saat scroll sedikit
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "translate-y-0 opacity-100 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100" 
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Burger Button (Mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="shrink-0">
            <h1 className="font-serif text-3xl font-bold tracking-wider text-stone-700"><a href="/">Rafda Syar'i</a>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase text-stone-600">
            <Link to="/koleksi" className="hover:text-stone-900 transition">Koleksi</Link>
            <a href="#" className="hover:text-stone-500 transition">Terbaru</a>
            <a href="#" className="hover:text-stone-500 transition">Tentang Kami</a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5 text-stone-700">
            <button className="hover:text-stone-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="relative hover:text-stone-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-stone-700 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div 
        className={`md:hidden transition-all duration-300 bg-white border-t border-gray-100 overflow-hidden ${
          isOpen ? 'max-h-64' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-5 text-center">
          <Link to="/koleksi" className="block text-sm font-medium uppercase tracking-widest text-stone-700">Koleksi</Link>
          <a href="#" className="block text-sm font-medium uppercase tracking-widest text-stone-700">Terbaru</a>
          <a href="#" className="block text-sm font-medium uppercase tracking-widest text-stone-700">Tentang Kami</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;