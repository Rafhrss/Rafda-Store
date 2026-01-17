import { Link } from "react-router-dom";
import { listProducts } from "../data/products"
import Testimoni from "../components/Testimoni";

const HomePage = () => {
  // Mengambil gambar spesifik untuk Hero Banner (ID 7)
  const heroProduct = listProducts.find(product => product.id === 7);

  // Mengambil 3 produk pertama untuk ditampilkan di "Koleksi Terbaru"
  // Anda bisa mengganti .slice(0, 3) menjadi .slice(0, 6) jika ingin tampil 6 produk
  const displayProducts = listProducts.slice(0, 3);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroProduct?.gambar} 
            alt={heroProduct?.nama} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h2 className="text-5xl md:text-7xl mb-6 font-serif">Kemurnian dalam <br />Balutan Syari</h2>
          <p className="max-w-md text-lg mb-8 font-light">Koleksi eksklusif dengan bahan premium yang menjaga kenyamanan ibadah dan aktivitas harian Anda.</p>
          <a href="#koleksi" className="inline-block bg-white text-stone-800 px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-stone-100 transition shadow-lg">Lihat Produk</a>
        </div>
      </section>

      {/* KOLEKSI TERBARU SECTION */}
      <section id="koleksi" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl text-stone-800 font-serif">Koleksi Kami</h3>
          <div className="w-20 h-0.5 bg-stone-300 mx-auto mt-4"></div>
        </div>

        {/* GRID PRODUK OTOMATIS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {displayProducts.map((product) => (
            <Link to={`/detail/${product.id}`} key={product.id}>
              <div key={product.id} className="group cursor-pointer">
                <div className="relative aspect-3/4 overflow-hidden bg-gray-200">
                  {/* Gambar diambil otomatis dari data.ts */}
                  <img 
                    src={product.gambar} 
                    alt={product.nama} 
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105" 
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition bg-white/90 backdrop-blur-sm">
                    <button className="w-full py-2 text-xs font-bold uppercase tracking-tighter hover:bg-stone-800 hover:text-white transition">
                      Cek Detail
                    </button>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                    {product.nama}
                  </h4>
                  <p className="text-stone-500 mt-1 font-semibold">
                    {/* Format mata uang Rupiah otomatis */}
                    Rp {product.harga.toLocaleString('id-ID')}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Testimoni/>
    </>
  )
}

export default HomePage