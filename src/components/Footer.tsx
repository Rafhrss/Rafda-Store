import { Instagram, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Tahun dinamis agar tidak perlu update manual setiap tahun
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* KOLOM 1 & 2: INFO BRAND & SOSIAL MEDIA */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl text-white mb-6 tracking-widest uppercase">
              Rafda Syar'i
            </h2>
            <p className="max-w-sm text-sm leading-relaxed mb-8">
              Menyediakan busana muslimah yang memenuhi kaidah syar'i tanpa mengesampingkan estetika dan kenyamanan. Setiap jahitan adalah dedikasi kami untuk keanggunan Anda.
            </p>
            
            {/* IKON SOSIAL MEDIA - Menambah Kepercayaan Customer */}
            <div className="flex space-x-6 text-white">
              <a href="https://instagram.com/rafda.syari" target="_blank" rel="noopener noreferrer" className="hover:text-stone-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/rafda.syari" target="_blank" rel="noopener noreferrer" className="hover:text-stone-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://tiktok.com/@rafda.syari" target="_blank" rel="noopener noreferrer" className="hover:text-stone-400 transition-colors">
                <svg width={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* KOLOM 3: BANTUAN */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Bantuan</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/koleksi" className="hover:text-white transition">Koleksi Terbaru</Link></li>
              <li><a href="#" className="hover:text-white transition">Cara Order</a></li>
              <li><a href="#" className="hover:text-white transition">Informasi Pengiriman</a></li>
              <li><a href="#" className="hover:text-white transition">Kebijakan Pengembalian</a></li>
            </ul>
          </div>

          {/* KOLOM 4: HUBUNGI KAMI */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .01 5.403.007 12.039c0 2.12.543 4.19 1.57 6.075L0 24l6.135-1.61a11.803 11.803 0 005.912 1.586h.005c6.636 0 12.04-5.404 12.042-12.041a11.8 11.8 0 00-3.48-8.495z"/>
                </svg>
                <span>WhatsApp</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-stone-500" />
                <span>rafdasyari@gmail.com</span>
              </li>
              <li className="pt-2 italic text-stone-500 text-xl">
                Senin - Sabtu: 07.00 - 22.00 WITA
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="border-t border-stone-800 mt-16 pt-8 text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase">
            &copy; {currentYear} Rafda Syar'i Official Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;