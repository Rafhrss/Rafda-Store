import { useState } from 'react'
import { listProducts } from "../data/products"
import { listCategories } from '../data/categories';
import { Link } from 'react-router-dom' // Import Link untuk navigasi

interface FilterState {
  availability: boolean;
  productType: boolean;
}

const Collections = () => {
  // 1. Tambahkan State untuk melacak kategori yang dipilih
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // State untuk kontrol buka/tutup filter sidebar
  const [openFilters, setOpenFilters] = useState<FilterState>({
    availability: false,
    productType: false
  });

// --- FUNGSI BARU: MENGHITUNG JUMLAH PRODUK SECARA DINAMIS ---
  const getCategoryCount = (categorySlug: string) => {
    return listProducts.filter(
      (product) => product.kategori.toLowerCase() === categorySlug.toLowerCase()
    ).length;
  };

  const toggleFilter = (section: keyof FilterState) => {
    setOpenFilters(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // 2. LOGIKA FILTERING: Filter produk berdasarkan selectedCategory
  const filteredProducts = selectedCategory === 'all' 
    ? listProducts 
    : listProducts.filter(product => 
        // Menggunakan toLowerCase() agar "Gamis" dan "gamis" dianggap sama
        product.kategori.toLowerCase() === selectedCategory.toLowerCase()
      );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8 text-xs tracking-widest text-gray-500 uppercase">
        {/* Update jumlah produk berdasarkan hasil filter */}
        <span>{filteredProducts.length} PRODUCTS</span>
        <div className="flex items-center gap-2 cursor-pointer">SORT BY ↓</div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        
        {/* SIDEBAR FILTER */}
        <aside className="w-full md:w-64 space-y-6">
          
          {/* Availability Filter */}
          <div className="border-b border-gray-100 pb-4">
            <button onClick={() => toggleFilter('availability')} className="w-full flex justify-between items-center text-xs font-bold tracking-widest uppercase mb-4">
              Availability 
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${openFilters.availability ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${openFilters.availability ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-9 h-5 bg-gray-200 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full shadow-sm"></div>
                </div>
                In stock only
              </div>
            </div>
          </div>

          {/* Product Type Filter */}
          <div className="border-b border-gray-100 pb-4">
            <button onClick={() => toggleFilter('productType')} className="w-full flex justify-between items-center text-xs font-bold tracking-widest uppercase mb-4">
              Product Type
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${openFilters.productType ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${openFilters.productType ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="text-sm text-gray-600 space-y-3">
                <li 
                  onClick={() => setSelectedCategory('all')}
                  className={`cursor-pointer transition flex justify-between items-center ${selectedCategory === 'all' ? 'text-stone-900 font-bold underline underline-offset-4 decoration-1' : 'hover:text-stone-800'}`}
                >
                  <span>All Collections</span>
                  {/* Menampilkan total semua produk */}
                  <span className="text-[10px] text-gray-400">({listProducts.length})</span>
                </li>

                {listCategories.map((category) => (
                  <li 
                    key={category.id} 
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`cursor-pointer flex justify-between items-center transition ${selectedCategory === category.slug ? 'text-stone-900 font-bold underline underline-offset-4 decoration-1' : 'hover:text-stone-800'}`}
                  >
                    <span>{category.name}</span>
                    {/* MEMANGGIL FUNGSI COUNTING DINAMIS */}
                    <span className="text-[10px] text-gray-400">({getCategoryCount(category.slug)})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* PRODUCT GRID */}
        <main className="flex-1">
          {/* Tampilkan pesan jika produk tidak ditemukan */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p>Maaf, produk dalam kategori ini belum tersedia.</p>
              <button onClick={() => setSelectedCategory('all')} className="mt-4 text-xs font-bold underline uppercase tracking-widest">Lihat Semua Produk</button>
            </div>
          ) : (
            /* PERUBAHAN DISINI: Tambahkan grid-cols-2 agar mobile tampil 2 kolom */
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 md:gap-x-6 gap-y-8 md:gap-y-12">
            {filteredProducts.map((product) => (
              /* GUNAKAN LINK: Navigasi ke /detail/id_produk */
              <Link 
                to={`/detail/${product.id}`} 
                key={product.id} 
                className="group cursor-pointer"
              >
                <div className="relative aspect-3/4 overflow-hidden bg-gray-100">
                  <img 
                    src={product.gambar} 
                    alt={product.nama} 
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105" 
                  />
                  {product.hargaCoret && (
                    <div className="absolute top-1 left-1 md:top-2 md:left-2 bg-red-500 text-white text-[8px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 md:py-1 uppercase">
                      SAVE RP {(product.hargaCoret - product.harga).toLocaleString('id-ID')}
                    </div>
                  )}
                </div>

                <div className="mt-3 md:mt-6 text-center px-1 md:px-2">
                  <h4 className="text-[9px] md:text-[11px] font-bold tracking-widest text-stone-800 uppercase mb-1 md:mb-2 leading-relaxed line-clamp-2 group-hover:underline">
                    {product.nama}
                  </h4>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-0.5 md:gap-2">
                    <span className="text-[10px] md:text-xs text-red-600 font-bold">
                      RP {product.harga.toLocaleString('id-ID')}
                    </span>
                    {product.hargaCoret && (
                      <span className="text-[8px] md:text-[10px] text-gray-400 line-through italic">
                        RP {product.hargaCoret.toLocaleString('id-ID')}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] md:text-[10px] text-gray-400 mt-2 uppercase tracking-[0.2em] font-medium">
                    {product.kategori}
                  </p>
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