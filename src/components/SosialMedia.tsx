import { Instagram, Facebook } from 'lucide-react';

  const SosialMedia = () => {
  // Data dummy untuk simulasi feed Instagram
  const socialFeed = [
    { id: 1, img: "https://images.unsplash.com/photo-1583394838336-acd977730f8a?q=80&w=500", type: "instagram" },
    { id: 2, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=500", type: "tiktok" },
    { id: 3, img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=500", type: "instagram" },
    { id: 4, img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=500", type: "facebook" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <span className="text-3xl md:text-5xl uppercase text-stone-800 mb-4 block font-bold">Connect With Us</span>
          <p className="text-stone-500 text-sm max-w-md mx-auto leading-relaxed">
            Dapatkan inspirasi harian dan update koleksi terbaru melalui komunitas kami di media sosial.
          </p>
        </div>

        {/* SOCIAL ICONS BAR */}
        <div className="flex justify-center gap-10 mb-16 text-stone-400">
          <a href="https://www.instagram.com/aisyah.nurfa.3?igsh=MTgyYWJ1aTIxeXRtMg==" target='_blank' className="flex items-center gap-2 hover:text-stone-800 transition group">
            <Instagram size={18} className="group-hover:scale-110 transition" />
            <span className="text-[10px] uppercase tracking-widest font-bold">Instagram</span>
          </a>
          <a href="https://www.tiktok.com/@aisyahcollection05?_r=1&_t=ZS-93CgOd8sVm9" target='_blank' className="flex items-center gap-2 hover:text-stone-800 transition group">
            <svg width={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:scale-110 transition">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
            <span className="text-[10px] uppercase tracking-widest font-bold">TikTok</span>
          </a>
          <a href="https://www.facebook.com/share/18ALJmKcrq/" target='_blank' className="flex items-center gap-2 hover:text-stone-800 transition group">
            <Facebook size={18} className="group-hover:scale-110 transition" />
            <span className="text-[10px] uppercase tracking-widest font-bold">Facebook</span>
          </a>
        </div>

        {/* IMAGE GRID (Simulasi Feed) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialFeed.map((item) => (
            <div key={item.id} className="relative aspect-square overflow-hidden group cursor-pointer bg-stone-100">
              <img 
                src={item.img} 
                alt="Social Media Feed" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  {item.type === 'instagram' && <Instagram size={24} />}
                  {item.type === 'facebook' && <Facebook size={24} />}
                  {item.type === 'tiktok' && (
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SosialMedia