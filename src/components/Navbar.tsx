import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* 1. Tombol Burger (Hanya muncul di Mobile) */}
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
            <h1 className="font-serif text-3xl font-bold text-stone-700 tracking-wider">Rafda Syar'i</h1>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase">
            <a href="#" className="hover:text-stone-500 transition">Koleksi</a>
            <a href="#" className="hover:text-stone-500 transition">Terbaru</a>
            <a href="#" className="hover:text-stone-500 transition">Tentang Kami</a>
          </div>

          {/* Icon Search & Cart */}
          <div className="flex items-center space-x-5">
            <button className="hover:text-stone-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="relative hover:text-stone-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-stone-700 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Menu Dropdown Mobile */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100`}>
        <div className="px-4 pt-2 pb-6 space-y-4 text-center">
          <a href="#" className="block text-sm font-medium uppercase tracking-widest text-stone-700 hover:text-stone-500 transition">Koleksi</a>
          <a href="#" className="block text-sm font-medium uppercase tracking-widest text-stone-700 hover:text-stone-500 transition">Terbaru</a>
          <a href="#" className="block text-sm font-medium uppercase tracking-widest text-stone-700 hover:text-stone-500 transition">Tentang Kami</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar