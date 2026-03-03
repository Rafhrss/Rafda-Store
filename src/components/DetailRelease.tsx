import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { listNewRelease } from '../data/NewRelease'; // Menggunakan data NewRelease Anda

// Import Swiper React components & styles
import type { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

const DetailRelease = () => {
  const { id } = useParams();
  const product = listNewRelease.find((p) => p.id === Number(id));

  // --- STATE MANAGEMENT ---
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  // Default variant adalah index ke-0
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-stone-500">Produk tidak ditemukan. <Link to="/koleksi" className="underline">Kembali</Link></p>
      </div>
    );
  }

  const currentVariant = product.variant[selectedVariantIndex];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleWhatsAppOrder = () => {
    const phoneNumber = "6282318192719";
    const totalPrice = product.harga * quantity;
    
    const message = `Halo Admin Rafda Syar'i, saya ingin memesan:
*Produk:* ${product.nama}
*Warna:* ${currentVariant.warna}
*Ukuran:* ${selectedSize}
*Jumlah:* ${quantity}
*Total:* Rp ${totalPrice.toLocaleString('id-ID')}`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
      <nav className="text-[10px] uppercase tracking-widest text-stone-400 mb-8">
        <Link to="/" className="hover:text-stone-800">Home</Link> / 
        <Link to="/terbaru" className="mx-2 hover:text-stone-800">Terbaru</Link> / 
        <span className="text-stone-800">{product.nama}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* KOLOM KIRI: SWIPER SLIDER */}
        <div className="flex flex-col gap-4">
          <Swiper
            spaceBetween={10}
            navigation={true}
            pagination={{ clickable: true }}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            className="w-full aspect-3/4 bg-gray-50 overflow-hidden"
          >
            {currentVariant.images.map((img: string, index: number) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`${product.nama} ${currentVariant.warna}`} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* THUMBNAILS (Gambar Kecil di Bawah) */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full h-24 mt-2"
          >
            {currentVariant.images.map((img: string, index: number) => (
              <SwiperSlide key={index} className="cursor-pointer opacity-50 hover:opacity-100 transition-.3s border border-stone-200">
                <img src={img} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* KOLOM KANAN: INFO & ACTION */}
        <div className="flex flex-col">
          <span className="text-xs tracking-[0.3em] text-stone-400 uppercase mb-2">{product.kategori}</span>
          <h1 className="font-serif text-3xl md:text-4xl text-stone-800 uppercase mb-4">{product.nama}</h1>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-2xl text-red-600 font-bold">Rp {product.harga.toLocaleString('id-ID')}</span>
            {product.hargaCoret && <span className="text-lg text-stone-300 line-through italic">Rp {product.hargaCoret.toLocaleString('id-ID')}</span>}
          </div>

          {/* PILIHAN WARNA (COLOR SWATCHES) */}
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-800 mb-4">
              Color: <span className="font-light text-stone-500">{currentVariant.warna}</span>
            </h3>
            <div className="flex gap-3">
              {product.variant.map((v, index) => (
                <button
                  key={v.warna}
                  onClick={() => setSelectedVariantIndex(index)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${selectedVariantIndex === index ? 'border-stone-800 scale-110' : 'border-transparent'}`}
                  style={{ backgroundColor: v.kodeWarna }}
                  title={v.warna}
                />
              ))}
            </div>
          </div>

          {/* PILIHAN UKURAN */}
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-800 mb-4">Select Size</h3>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 text-xs border transition-all ${selectedSize === size ? 'border-stone-800 bg-stone-800 text-white' : 'border-stone-200 text-stone-400'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY & WA BUTTON */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-800 mb-2">Quantity</h3>
            <div className="flex gap-4">
              <div className="flex items-center border border-stone-200">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2">-</button>
                <span className="px-4 py-2 text-sm w-12 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2">+</button>
              </div>
              <button 
                onClick={handleWhatsAppOrder}
                className="flex-1 bg-[#25D366] text-white text-[10px] font-bold uppercase tracking-[0.2em] py-4 disabled:bg-gray-200 flex items-center justify-center gap-2"
                disabled={!selectedSize}
              >
                {selectedSize ? 'Pesan di WhatsApp' : 'Pilih Ukuran'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRelease;