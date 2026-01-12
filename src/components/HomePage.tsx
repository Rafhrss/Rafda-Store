// import React from 'react'

const HomePage = () => {
  return (
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=2000" alt="Gamis Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h2 className="text-5xl md:text-7xl mb-6">Kemurnian dalam <br />Balutan Syari</h2>
            <p className="max-w-md text-lg mb-8 font-light">Koleksi eksklusif dengan bahan premium yang menjaga kenyamanan ibadah dan aktivitas harian Anda.</p>
            <a href="#koleksi" className="inline-block bg-white text-stone-800 px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-stone-100 transition">Lihat Produk</a>
        </div>
    </section>
  )
}

export default HomePage