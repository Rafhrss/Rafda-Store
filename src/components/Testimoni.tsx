import { Link } from "react-router-dom";
import { dataTestimoni } from "../data/Testimoni";

const Testimoni = () => {

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-stone-400 mb-4 block font-bold">Word of Mouth</span>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-800 mb-6">Apa Kata Mereka?</h2>
          <div className="w-16 h-px bg-stone-300 mx-auto"></div>
          <p className="mt-6 text-stone-500 font-light max-w-xl mx-auto italic">
            "Kepercayaan Anda adalah amanah bagi kami untuk terus memberikan kualitas terbaik dalam setiap jahitan."
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {dataTestimoni.map((item) => (
            <div 
              key={item.id} 
              className="bg-stone-50 p-8 md:p-10 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-stone-800" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote Icon */}
                <span className="text-4xl font-serif text-stone-200 block mb-4">“</span>
                
                <p className="text-stone-600 leading-relaxed text-sm italic mb-8">
                  {item.pesan}
                </p>
              </div>

              <div className="border-t border-stone-200 pt-6">
                <h4 className="font-serif text-lg text-stone-800">{item.nama}</h4>
                <p className="text-[10px] uppercase tracking-widest text-stone-400 mt-1">
                  Pembeli <span className="mx-1 text-stone-200">|</span> {item.produk}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-20 text-center">
          <p className="text-stone-400 text-xs uppercase tracking-widest mb-6">Bergabunglah dengan 10.000+ pelanggan puas kami</p>
          <button className="bg-stone-800 text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-stone-700 transition shadow-lg">
            <Link to="/koleksi">Belanja Sekarang</Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimoni;