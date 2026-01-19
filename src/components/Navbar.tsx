import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fungsi untuk menutup menu mobile
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
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

          {/* Logo - Tambahkan closeMenu juga di sini jika logo diklik */}
          <div className="shrink-0">
            <h1 className="font-serif text-3xl font-bold tracking-wider text-stone-700">
              <Link to="/" onClick={closeMenu}>Rafda Syar'i</Link>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase text-stone-600">
            <Link to="/koleksi" className="hover:text-stone-900 transition">Koleksi</Link>
            <Link to="/terbaru" className="hover:text-stone-900 transition">Terbaru</Link>
            <Link to="/aboutus" className="hover:text-stone-900 transition">Tentang Kami</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5 text-stone-700">
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div 
        className={`md:hidden transition-all duration-300 bg-white border-t border-gray-100 overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-5 text-center">
          {/* Tambahkan onClick={closeMenu} pada setiap Link */}
          <Link 
            to="/koleksi" 
            onClick={closeMenu}
            className="block text-sm font-medium uppercase tracking-widest text-stone-700"
          >
            Koleksi
          </Link>
          <Link 
            to="/terbaru" 
            onClick={closeMenu}
            className="block text-sm font-medium uppercase tracking-widest text-stone-700"
          >
            Terbaru
          </Link>
          <Link 
            to="/aboutus" 
            onClick={closeMenu}
            className="block text-sm font-medium uppercase tracking-widest text-stone-700"
          >
            Tentang Kami
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;