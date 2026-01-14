import  { useState } from 'react'

interface FilterState {
  availability: boolean;
  price: boolean;
  productType: boolean;
}

const Collections = () => {
  // State untuk kontrol buka/tutup filter
  const [openFilters, setOpenFilters] = useState<FilterState>({
    availability: true,
    price: true,
    productType: true
  });

  // Fungsi toggle filter
  const toggleFilter = (section: keyof FilterState) => {
    setOpenFilters(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const products = [
    { id: 1, name: "ADIBA PASHMINA INSTAN JERSEY", price: "121.500", oldPrice: "135.000", save: "13.500", image: "/assets/images/gamis5.jpeg", colors: 9 },
    { id: 2, name: "ALBA SQUARE INSTANT", price: "116.100", oldPrice: "129.000", save: "12.900", image: "/assets/images/gamis6.jpeg", colors: 25 },
    { id: 3, name: "AQSA ABAYA", price: "279.000", oldPrice: "310.000", save: "31.000", image: "/assets/images/gamis7.jpeg", colors: 5 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8 text-xs tracking-widest text-gray-500 uppercase">
        <span>{products.length} PRODUCTS</span>
        <div className="flex items-center gap-2 cursor-pointer">SORT BY ↓</div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        
        {/* SIDEBAR FILTER */}
        <aside className="w-full md:w-64 space-y-6">
          
          {/* Availability */}
          <div className="border-b border-gray-100 pb-4">
            <button 
              onClick={() => toggleFilter('availability')}
              className="w-full flex justify-between items-center text-xs font-bold tracking-widest uppercase mb-4"
            >
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

          {/* Price Filter */}

          {/* Product Type */}
          <div className="border-b border-gray-100 pb-4">
            <button 
              onClick={() => toggleFilter('productType')}
              className="w-full flex justify-between items-center text-xs font-bold tracking-widest uppercase mb-4"
            >
              Product Type
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${openFilters.productType ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${openFilters.productType ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="text-sm text-gray-600 space-y-3">
                <li className="hover:text-stone-800 cursor-pointer">Aksesoris (5)</li>
                <li className="hover:text-stone-800 cursor-pointer font-semibold text-stone-900 underline decoration-1 underline-offset-4">Gamis (33)</li>
                <li className="hover:text-stone-800 cursor-pointer">Gamis Khimar Set (8)</li>
                <li className="hover:text-stone-800 cursor-pointer">Khimar & Bergo (12)</li>
              </ul>
            </div>
          </div>

        </aside>

        {/* PRODUCT GRID */}
        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-3/4 overflow-hidden bg-gray-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase">SAVE RP {product.save}</div>
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-[11px] font-bold tracking-widest text-stone-800 uppercase mb-2">{product.name}</h4>
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-xs text-red-600 font-bold">RP {product.price}</span>
                    <span className="text-[10px] text-gray-400 line-through italic">RP {product.oldPrice}</span>
                  </div>
                  <p className="text-[9px] text-gray-400 mt-2 uppercase tracking-[0.2em]">{product.colors} COLORS AVAILABLE</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Collections