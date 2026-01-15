// import React from 'react'

const AboutUs = () => {
  const stats = [
    { label: 'Tahun Berjalan', value: '3+' },
    { label: 'Produk Terjual', value: '10k+' },
    { label: 'Pelanggan Puas', value: '5k+' },
    { label: 'Koleksi Eksklusif', value: '50+' },
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1: HEADER STORY */}
      <section className="py-20 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-stone-400 mb-6 block font-bold">Our Story</span>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-800 mb-8 leading-tight">
            Menghadirkan Keanggunan <br/> dalam Kesantunan Sejak 2021
          </h1>
          <div className="w-16 h-px bg-stone-300 mx-auto mb-8"></div>
          <p className="text-stone-600 leading-relaxed text-base md:text-lg font-light">
            Rafda Syar'i lahir dari sebuah mimpi sederhana: memberikan pilihan busana muslimah yang tidak hanya memenuhi kaidah syar'i, 
            namun juga memancarkan aura keanggunan dan rasa percaya diri bagi setiap pemakainya.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE 3 YEARS JOURNEY (IMAGE & TEXT) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-4/5 overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="/assets/images/gamis2.jpeg" 
                alt="Rafda Journey" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge 3 Tahun */}
            <div className="absolute -bottom-6 -right-6 bg-stone-800 text-white p-8 rounded-sm hidden md:block">
              <p className="text-4xl font-serif">3+</p>
              <p className="text-[10px] tracking-widest uppercase mt-2">Years of Trust</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-stone-800">Tiga Tahun Menemani Langkah Hijrah Anda</h2>
            <p className="text-stone-600 leading-relaxed italic">
              "Kepercayaan adalah amanah yang kami jaga dalam setiap jahitan."
            </p>
            <p className="text-stone-600 leading-relaxed">
              Selama 3 tahun perjalanan kami, Rafda Syar'i telah berkembang dari sebuah toko online kecil menjadi rumah bagi ribuan muslimah 
              untuk menemukan identitasnya. Kami percaya bahwa kualitas bahan premium dan detail jahitan yang presisi adalah 
              cara kami menghargai setiap pelanggan yang telah mempercayakan busananya kepada kami.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-2xl font-serif text-stone-800">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VALUES (VISI MISI) */}
      <section className="bg-stone-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="text-2xl mb-4">🌿</div>
            <h3 className="font-serif text-xl">Kualitas Premium</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Kami menyeleksi bahan terbaik yang nyaman digunakan di iklim tropis, memastikan Anda tetap sejuk sepanjang hari.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-2xl mb-4">✨</div>
            <h3 className="font-serif text-xl">Desain Eksklusif</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Setiap series dirancang terbatas untuk menjaga eksklusivitas penampilan Anda di setiap momen istimewa.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-2xl mb-4">🤝</div>
            <h3 className="font-serif text-xl">Pelayanan Amanah</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Tim kami berdedikasi memberikan konsultasi ukuran dan pelayanan terbaik hingga paket sampai di tangan Anda.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION */}
      <section className="py-24 text-center px-4">
        <h2 className="font-serif text-3xl text-stone-800 mb-6">Siap Menjadi Bagian dari Keluarga Rafda?</h2>
        <p className="text-stone-500 mb-10 max-w-lg mx-auto text-sm leading-relaxed">
          Temukan koleksi yang paling sesuai dengan karakter Anda dan rasakan kenyamanan berbusana syar'i bersama kami.
        </p>
        <button className="inline-block border border-stone-800 text-stone-800 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-stone-800 hover:text-white transition-all duration-500">
          Lihat Koleksi Terbaru
        </button>
      </section>
    </div>
  )
}

export default AboutUs