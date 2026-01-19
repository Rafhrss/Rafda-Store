import { Truck, MapPin, ShieldCheck, Clock } from 'lucide-react';

const Pengiriman = () => {
  const shippingPartners = [
    { name: "J&T Express", desc: "Pengiriman kilat dan terpercaya ke seluruh pelosok negeri." },
    { name: "JNE", desc: "Pilihan utama dengan berbagai layanan mulai dari reguler hingga YES." },
    { name: "Kantor Pos", desc: "Jangkauan terjauh hingga ke desa-desa terpencil di Indonesia." },
    { name: "TiKi", desc: "Solusi pengiriman aman dengan pengalaman puluhan tahun." }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section id='pengiriman' className="bg-stone-50 py-20 border-b border-stone-100 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] tracking-[0.4em] uppercase text-stone-400 mb-4 block font-bold">Logistics & Delivery</span>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">Informasi Pengiriman</h1>
          <p className="text-stone-500 text-sm leading-relaxed italic">
            "Menghubungkan keanggunan Rafda Syar'i ke depan pintu rumah Anda dengan aman dan tepat waktu."
          </p>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-stone-100 text-stone-800 flex items-center justify-center rounded-full mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="font-serif text-lg text-stone-800 mb-4 uppercase tracking-widest">Jangkauan Luas</h3>
            <p className="text-stone-500 text-xs leading-relaxed font-light">
              Kami melayani pengiriman ke seluruh provinsi di Indonesia, memastikan Sahabat Rafda di mana pun berada bisa memiliki koleksi kami.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-stone-100 text-stone-800 flex items-center justify-center rounded-full mb-6">
              <ShieldCheck size={28} />
            </div>
            <h3 className="font-serif text-lg text-stone-800 mb-4 uppercase tracking-widest">Pengemasan Aman</h3>
            <p className="text-stone-500 text-xs leading-relaxed font-light">
              Setiap paket dikemas dengan standar premium dan lapisan pelindung untuk memastikan kualitas kain tetap terjaga hingga sampai ke tangan Anda.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-stone-100 text-stone-800 flex items-center justify-center rounded-full mb-6">
              <Clock size={28} />
            </div>
            <h3 className="font-serif text-lg text-stone-800 mb-4 uppercase tracking-widest">Pengiriman Cepat</h3>
            <p className="text-stone-500 text-xs leading-relaxed font-light">
              Pesanan Anda akan segera diproses maksimal 1x24 jam setelah konfirmasi pembayaran di hari kerja.
            </p>
          </div>
        </div>
      </section>

      {/* SHIPPING PARTNERS SECTION */}
      <section className="bg-stone-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl text-stone-800 text-center mb-12 uppercase tracking-tight">Mitra Ekspedisi Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shippingPartners.map((partner, index) => (
              <div key={index} className="bg-white p-8 flex items-start gap-6 shadow-sm border border-stone-100 hover:shadow-md transition duration-300">
                <Truck className="text-stone-400 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-stone-800 mb-2 uppercase text-xs tracking-widest">{partner.name}</h4>
                  <p className="text-stone-500 text-sm font-light">{partner.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-xs text-stone-400 italic font-light">
            *Nomor resi akan dikirimkan secara otomatis melalui pesan WhatsApp segera setelah paket diserahkan ke kurir.
          </p>
        </div>
      </section>
    </>
  );
};

export default Pengiriman;