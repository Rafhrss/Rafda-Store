import { useState, useMemo } from 'react'
import { listProducts } from "../data/products"
import { listCategories } from '../data/categories';
import { Link } from 'react-router-dom'

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  
  // 1. Tambahkan State untuk Sorting
  const [sortBy, setSortBy] = useState<string>('default');

  const [openFilters, setOpenFilters] = useState({
    availability: false,
    productType: false
  });

  const toggleFilter = (section: keyof typeof openFilters) => {
    setOpenFilters(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // 2. LOGIKA FILTERING & SORTING (Digabung dalam useMemo untuk performa)
  const filteredAndSortedProducts = useMemo(() => {
    // Jalankan Filtering terlebih dahulu
    const result = listProducts.filter(product => {
      const matchCategory = selectedCategory === 'all' || product.kategori.toLowerCase() === selectedCategory.toLowerCase();
      const matchAvailability = inStockOnly ? product.isAvailability : true;
      return matchCategory && matchAvailability;
    });

    // Jalankan Sorting berdasarkan pilihan user
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.harga - b.harga);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.harga - a.harga);
    } else if (sortBy === 'name-az') {
      result.sort((a, b) => a.nama.localeCompare(b.nama));
    }

    return result;
  }, [selectedCategory, inStockOnly, sortBy]);

  const getCategoryCount = (categorySlug: string) => {
    return listProducts.filter((product) => {
      const matchCategory = product.kategori.toLowerCase() === categorySlug.toLowerCase();
      if (inStockOnly) return matchCategory && product.isAvailability;
      return matchCategory;
    }).length;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* 3. HEADER: PRODUCT COUNT (TENGAH & BIRU MUDA) & SORT BY */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-6 mb-8 gap-4">
        
        {/* Placeholder agar Count tetap di tengah pada desktop */}
        <div className="hidden md:block w-32"></div>

        {/* Product Count Box */}
        <div className="bg-sky-300 px-8 py-3 rounded-full border border-sky-50 shadow-sm">
          <span className="text-xs font-bold tracking-[0.2em] text-sky-900 uppercase">
            {filteredAndSortedProducts.length} Products
          </span>
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center gap-3">
          <label className="text-[13px] font-bold tracking-widest text-gray-400 uppercase">Sort By</label>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-[13px] font-bold uppercase tracking-widest text-stone-700 bg-transparent border-none focus:ring-0 cursor-pointer outline-none"
          >
            <option value="default">Featured</option>
            <option value="name-az">Alphabet, A-Z</option>
            <option value="price-low">Price Low - High</option>
            <option value="price-high">Price High - Low</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* SIDEBAR FILTER */}
        <aside className="w-full md:w-64 space-y-6">
          {/* Availability */}
          <div className="border-b border-gray-100 pb-4">
            <button onClick={() => toggleFilter('availability')} className="w-full flex justify-between items-center text-xs font-bold tracking-widest uppercase mb-4">
              Availability 
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${openFilters.availability ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${openFilters.availability ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div 
                className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer"
                onClick={() => setInStockOnly(!inStockOnly)}
              >
                <div className={`w-9 h-5 rounded-full relative transition-colors ${inStockOnly ? 'bg-stone-800' : 'bg-gray-200'}`}>
                  <div className={`absolute top-1 bg-white w-3 h-3 rounded-full shadow transition-all ${inStockOnly ? 'left-5' : 'left-1'}`}></div>
                </div>
                <span className={inStockOnly ? 'text-stone-800 font-medium' : ''}>In stock only</span>
              </div>
            </div>
          </div>

          {/* Product Type */}
          <div className="border-b border-gray-100 pb-4">
            <button onClick={() => toggleFilter('productType')} className="w-full flex justify-between items-center text-xs font-bold tracking-widest uppercase mb-4">
              Product Type
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${openFilters.productType ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${openFilters.productType ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="text-sm text-gray-600 space-y-3">
                <li onClick={() => setSelectedCategory('all')} className={`cursor-pointer flex justify-between ${selectedCategory === 'all' ? 'text-stone-900 font-bold underline underline-offset-4' : 'hover:text-stone-800'}`}>
                  <span>All Collections</span>
                  <span className="text-[10px]">({listProducts.length})</span>
                </li>
                {listCategories.map((category) => (
                  <li key={category.id} onClick={() => setSelectedCategory(category.slug)} className={`cursor-pointer flex justify-between ${selectedCategory === category.slug ? 'text-stone-900 font-bold underline underline-offset-4' : 'hover:text-stone-800'}`}>
                    <span>{category.name}</span>
                    <span className="text-[10px]">({getCategoryCount(category.slug)})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

{/* PRODUCT GRID */}
        <main className="flex-1">
          {/* PERBAIKAN: Cek jika produk kosong, tampilkan desain sesuai permintaan Anda */}
          {filteredAndSortedProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 animate-fadeIn">

              <p className="text-stone-400 font-serif italic mb-6">
                Maaf, koleksi yang Anda cari sedang tidak tersedia.
              </p>

              {/* Tombol Reset */}
              <button 
                onClick={() => {
                  setSelectedCategory('all'); 
                  setInStockOnly(false);
                  setSortBy('default');
                }} 
                className="text-[10px] font-bold underline uppercase tracking-[0.2em] text-stone-800 hover:text-sky-500 transition"
                >Lihat Semua Koleksi
              </button>
            </div>
          ) : (
            /* Jika ada produk, baru tampilkan grid ini */
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-12">
              {filteredAndSortedProducts.map((product) => (
                <Link to={`/detail/${product.id}`} key={product.id} className="group cursor-pointer animate-fadeIn">
                  <div className="relative aspect-3/4 overflow-hidden bg-gray-50">
                    <img src={product.gambar} alt={product.nama} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                    {!product.isAvailability && (
                      <div className="absolute inset-0 bg-white/40 flex items-center justify-center backdrop-blur-[1px]">
                        <span className="bg-white/90 px-4 py-2 text-[10px] font-bold tracking-[0.2em] border border-stone-800 uppercase">Sold Out</span>
                      </div>
                    )}
                    {product.isAvailability && product.hargaCoret && (
                      <div className="absolute top-1 left-1 md:top-2 md:left-2 bg-red-600 text-white text-[8px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 md:py-1 uppercase shadow-sm">
                        SAVE RP {(product.hargaCoret - product.harga).toLocaleString('id-ID')}
                      </div>
                    )}
                  </div>
                  <div className="mt-4 text-center px-2">
                    <h4 className="text-[10px] md:text-[11px] font-bold tracking-widest text-stone-800 uppercase mb-2 line-clamp-2">{product.nama}</h4>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2">
                      <span className="text-[11px] md:text-sm text-red-600 font-bold">RP {product.harga.toLocaleString('id-ID')}</span>
                      {product.hargaCoret && (
                        <span className="text-[9px] md:text-[11px] text-gray-400 line-through italic font-light font-sans">
                          RP {product.hargaCoret.toLocaleString('id-ID')}
                        </span>
                      )}
                    </div>
                    <p className="text-[9px] text-gray-400 mt-2 uppercase tracking-[0.2em] font-medium italic">{product.kategori}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
export default Collections;