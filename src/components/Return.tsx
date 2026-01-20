import { RefreshCcw } from 'lucide-react';
import { requirements, procedures } from '../data/Helper';
const Return = () => {

  return (
    <div className="overflow-hidden">
      {/* HEADER SECTION - Soft Gradient */}
      <section id="pengembalian" className="bg-linear-to-b from-stone-50 to-white py-24 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 border border-stone-200 rounded-full mb-6">
            <span className="text-[9px] tracking-[0.5em] uppercase text-stone-500 font-bold">Service Policy</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-stone-800 mb-8 leading-tight">Kebijakan<br/>Pengembalian</h1>
          <p className="text-stone-400 text-sm leading-relaxed max-w-xl mx-auto italic font-light">
            "Kepercayaan Anda adalah amanah bagi kami. Kami menjamin setiap produk sampai dengan kualitas terbaik."
          </p>
        </div>
      </section>

      {/* REQUIREMENTS - Asymmetric Design */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {requirements.map((item) => (
            <div key={item.id} className={`${item.style} bg-stone-50 p-10 hover:bg-white border border-transparent hover:border-stone-100 transition-all duration-700 group shadow-sm hover:shadow-xl`}>
              <div className="mb-8 text-stone-300 group-hover:text-stone-800 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-stone-800 mb-4 tracking-wide">{item.title}</h3>
              <p className="text-stone-500 text-xs leading-relaxed font-light line-clamp-3 group-hover:line-clamp-none transition-all">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCEDURE - Minimalist Line Flow */}
      <section className="bg-white py-24 px-4 relative">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-50/30 -z-10 rounded-l-full"></div>
        
        <div className="max-w-6xl mx-auto">
          {/* Perubahan: items-center di mobile, items-end di desktop. text-center di mobile, text-left di desktop */}
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-20 gap-6 text-center md:text-left">
            <div className="flex-1 ">
              <h2 className="font-serif text-3xl md:text-4xl text-stone-800 uppercase italic">Prosedur Klaim</h2>
              <p className="text-stone-400 text-xs mt-2 tracking-widest uppercase font-bold">Langkah mudah untuk kenyamanan Anda</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-stone-200 mx-10 mb-4"></div>
            <RefreshCcw className="text-stone-200 animate-spin-slow" size={40} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-stone-100">
            {procedures.map((proc) => (
              <div key={proc.id} className={`${proc.color} p-12 border-b md:border-b-0 md:border-r border-stone-100 last:border-0 hover:bg-white transition-all duration-500 group`}>
                <span className="text-stone-200 font-serif text-6xl block mb-6 group-hover:text-stone-800 transition-colors duration-700 opacity-50">
                  {proc.id}
                </span>
                <div className="w-10 h-px bg-stone-800 mb-8 group-hover:w-20 transition-all duration-700"></div>
                <h4 className="font-serif text-lg text-stone-800 mb-4 uppercase tracking-tighter">
                  {proc.title}
                </h4>
                <p className="text-stone-500 text-xs leading-relaxed font-light">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Return;