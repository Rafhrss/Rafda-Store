import { listProducts } from "../data/products";
import { Link } from "react-router-dom";

const Terbaru = () => {
  // Mengambil produk yang memiliki properti isNew: true
  const newReleases = listProducts.filter(product => product.isNew);

  // Mengambil gambar untuk Hero Banner (contoh: ID 5 atau ID pertama dari newReleases)
  const heroImage = newReleases[0]?.gambar;

  // Mengambil gambar untuk Section Highlight (contoh: ID 3)
  const highlightProduct = listProducts.find(p => p.id === 3);

  return (
    <div className="bg-white">
      {/* SECTION 1: HERO REVEAL */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-stone-100">
        <div className="absolute inset-0 opacity-40">
          <img 
            src={heroImage} 
            className="w-full h-full object-cover scale-110 blur-sm" 
            alt="New Season Background"
          />
        </div>
        <div className="relative text-center px-4">
          <span className="text-[10px] tracking-[0.5em] uppercase text-stone-500 mb-4 block">Just Released</span>
          <h1 className="font-serif text-5xl md:text-7xl text-stone-800 tracking-tight">The New Era of <br/>Elegant Syar'i</h1>
          <div className="mt-8 w-12 h-px bg-stone-400 mx-auto"></div>
        </div>
      </section>

      {/* SECTION 2: FEATURED SERIES GRID */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="font-serif text-3xl text-stone-800">New Arrivals</h2>
            <p className="text-stone-500 text-sm mt-2">Koleksi pilihan yang baru saja mendarat di galeri kami.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {newReleases.map((product, index) => (
            <div 
              key={product.id}
              className={`group cursor-pointer ${
                index === 0 ? "md:col-span-8" : "md:col-span-4"
              }`}
            >
              <Link to={`/detail/${product.id}`}>
                <div className="relative overflow-hidden aspect-4/5 md:aspect-auto md:h-125 bg-stone-50">
                  <img 
                    src={product.gambar} 
                    alt={product.nama}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  <div className="absolute top-6 left-6 space-y-2">
                    <span className="block bg-white/90 backdrop-blur-md text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 shadow-sm text-stone-800">
                      New Release
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest">{product.kategori}</span>
                    <h3 className="font-serif text-xl text-stone-800 mt-1 uppercase">{product.nama}</h3>
                  </div>
                  <p className="text-sm font-medium text-stone-700">
                    Rp {product.harga.toLocaleString('id-ID')}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: SERIES HIGHLIGHT */}
      <section className="bg-stone-50 py-20 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src={highlightProduct?.gambar} 
              className="w-full h-125 object-cover shadow-2xl" 
              alt="Highlight Series"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-stone-400">Series Spotlight</h3>
            <h2 className="font-serif text-4xl text-stone-800 leading-tight">{highlightProduct?.nama}</h2>
            <p className="text-stone-600 leading-relaxed text-sm">
              Dirancang khusus untuk momen istimewa, koleksi ini memberikan kenyamanan premium namun tetap syar'i dengan potongan yang anggun.
            </p>
            <button className="bg-stone-800 text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-stone-700 transition shadow-lg">
              Explore Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terbaru;