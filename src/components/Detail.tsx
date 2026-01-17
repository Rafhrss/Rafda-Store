import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { listProducts } from '../data/products';

const Detail = () => {
  const { id } = useParams();
  const product = listProducts.find((p) => p.id === Number(id));

  // State Management
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-stone-500">Produk tidak ditemukan. <Link to="/koleksi" className="underline">Kembali</Link></p>
      </div>
    );
  }

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
      {/* Breadcrumb Navigasi */}
      <nav className="text-[10px] uppercase tracking-widest text-stone-400 mb-8">
        <Link to="/" className="hover:text-stone-800">Home</Link> / 
        <Link to="/koleksi" className="mx-2 hover:text-stone-800">Koleksi</Link> / 
        <span className="text-stone-800">{product.nama}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* KOLOM KIRI: IMAGE WITH ZOOM FEATURE */}
        <div className="relative group overflow-hidden bg-gray-50 cursor-zoom-in"
            onClick={() => setIsZoomed(!isZoomed)}>
          <img 
            src={product.gambar} 
            alt={product.nama} 
            className={`w-full transition-transform duration-500 ease-in-out ${isZoomed ? 'scale-200' : 'scale-100'}`}
          />
          {!isZoomed && (
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-tighter">
              Click to Zoom
            </div>
          )}
        </div>

        {/* KOLOM KANAN: PRODUCT INFO & ACTION */}
        <div className="flex flex-col">
          <span className="text-xs tracking-[0.3em] text-stone-400 uppercase mb-2">
            {product.kategori}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-stone-800 uppercase mb-4 leading-tight">
            {product.nama}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-2xl text-red-600 font-bold">
              Rp {product.harga.toLocaleString('id-ID')}
            </span>
            {product.hargaCoret && (
              <span className="text-lg text-stone-300 line-through italic">
                Rp {product.hargaCoret.toLocaleString('id-ID')}
              </span>
            )}
          </div>

          <div className="h-px bg-stone-100 w-full mb-8"></div>

          {/* PILIHAN UKURAN */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-stone-800">Select Size</h3>
              <button className="text-[10px] underline text-stone-400 uppercase">Size Guide</button>
            </div>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 text-xs border transition-all duration-300 ${
                    selectedSize === size 
                    ? 'border-stone-800 bg-stone-800 text-white' 
                    : 'border-stone-200 text-stone-400 hover:border-stone-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY & ADD TO CART */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-800 mb-4">Quantity</h3>
            <div className="flex gap-4">
              <div className="flex items-center border border-stone-200">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-stone-50 text-stone-500"
                >-</button>
                <span className="px-4 py-2 text-sm w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-stone-50 text-stone-500"
                >+</button>
              </div>
              <button 
                className="flex-1 bg-stone-800 text-white text-[10px] font-bold uppercase tracking-[0.2em] py-4 hover:bg-stone-700 transition disabled:bg-stone-200"
                disabled={!selectedSize}
              >
                {selectedSize ? 'Add to Shopping Bag' : 'Select a Size'}
              </button>
            </div>
          </div>

          {/* INFORMASI TAMBAHAN */}
          <div className="mt-12 space-y-6 text-sm text-stone-600 leading-relaxed">
            <div className="border-t border-stone-100 pt-6">
              <h4 className="text-xs font-bold uppercase text-stone-800 mb-2">Product Description</h4>
              <p>Busana Syar'i eksklusif dari Rafda Syar'i. Dibuat dengan bahan premium yang adem, jatuh, dan tidak menerawang. Sangat cocok untuk acara formal maupun harian.</p>
            </div>
            <div className="border-t border-stone-100 pt-6">
              <h4 className="text-xs font-bold uppercase text-stone-800 mb-2">Shipping & Returns</h4>
              <p>Pengiriman seluruh Indonesia. Pengembalian barang maksimal 3 hari setelah barang diterima jika terdapat cacat produksi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;