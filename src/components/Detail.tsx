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

  // --- FUNGSI WHATSAPP CLICK TO CHAT ---
  const handleWhatsAppOrder = () => {
    const phoneNumber = "6282318192719"; // Ganti dengan nomor WhatsApp Admin Anda
    const totalPrice = product.harga * quantity;
    
    // Format Pesan
    const message = `Halo Admin Rafda Syar'i, saya ingin memesan produk berikut:

*Produk:* ${product.nama}
*Kategori:* ${product.kategori}
*Ukuran:* ${selectedSize}
*Jumlah:* ${quantity}
*Harga Satuan:* Rp ${product.harga.toLocaleString('id-ID')}
*Total Harga:* Rp ${totalPrice.toLocaleString('id-ID')}

Mohon informasi mengenai produk berikut. Terima kasih.`;

    // Encode URI agar karakter khusus bisa terbaca
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Buka WhatsApp di tab baru
    window.open(whatsappUrl, '_blank');
  };

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
        {/* KOLOM KIRI: IMAGE */}
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

        {/* KOLOM KANAN: INFO */}
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
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-800 mb-4">Select Size</h3>
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

          {/* QUANTITY & WHATSAPP BUTTON */}
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
              
              {/* TOMBOL WHATSAPP DINAMIS */}
              <button 
                onClick={handleWhatsAppOrder}
                className="flex-1 bg-[#25D366] text-white text-[10px] font-bold uppercase tracking-[0.2em] py-4 hover:bg-[#1ebd57] transition disabled:bg-gray-200 disabled:text-gray-400 flex items-center justify-center gap-2"
                disabled={!selectedSize}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .01 5.403.007 12.039c0 2.12.543 4.19 1.57 6.075L0 24l6.135-1.61a11.803 11.803 0 005.912 1.586h.005c6.636 0 12.04-5.404 12.042-12.041a11.8 11.8 0 00-3.48-8.495z"/>
                </svg>
                {selectedSize ? 'Pesan di WhatsApp' : 'Pilih Ukuran'}
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