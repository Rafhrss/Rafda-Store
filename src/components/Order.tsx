import { steps } from '../data/Helper';

const Order = () => {

  return (
    <>
      {/* Header Halaman */}
      <section id='caraorder' className="bg-stone-50 py-20 border-b border-stone-100">
        <div className="max-w-3xl mx-auto text-center px-4">
          <span className="text-[10px] tracking-[0.4em] uppercase text-stone-400 mb-4 block font-bold">Shopping Guide</span>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">Cara Memesan</h1>
          <p className="text-stone-500 text-sm leading-relaxed italic">
            "Kami berkomitmen memberikan pengalaman berbelanja yang mudah dan personal untuk setiap Sahabat Rafda."
          </p>
        </div>
      </section>

      {/* Langkah-langkah Order */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="relative group">
              {/* Nomor Langkah */}
              <div className="text-stone-100 font-serif text-8xl absolute -top-8 -left-4 z-0 group-hover:text-stone-200 transition-colors duration-500">
                0{step.id}
              </div>
              
              <div className="relative z-10 pt-10">
                <div className="w-12 h-12 bg-stone-800 text-white flex items-center justify-center rounded-full mb-6 shadow-xl">
                  {step.icon}
                </div>
                <h3 className="font-serif text-xl text-stone-800 mb-4 uppercase tracking-wider">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Tambahan & CTA */}
      <section className="bg-stone-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-serif text-3xl mb-8">Butuh Bantuan Lebih Lanjut?</h2>
          <p className="text-stone-400 text-sm mb-12 leading-relaxed max-w-2xl mx-auto">
            Jika Anda mengalami kendala saat memesan atau ingin berkonsultasi mengenai bahan dan ukuran, 
            admin kami siap membantu Anda setiap hari Senin - Sabtu pukul 09.00 - 17.00 WIB.
          </p>
          <button className="bg-white text-stone-900 px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-stone-200 transition duration-500">
            Hubungi Customer Service
          </button>
        </div>
      </section>
    </>
  );
};

export default Order;