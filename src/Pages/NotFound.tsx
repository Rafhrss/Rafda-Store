import { Link } from 'react-router-dom' // Pastikan Anda menggunakan react-router-dom

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        {/* Dekorasi Angka 404 */}
        <h1 className="font-serif text-9xl text-stone-200 tracking-tighter relative">
          404
          <span className="absolute inset-0 flex items-center justify-center text-3xl font-light tracking-[0.3em] text-stone-800 mt-4 uppercase">
            Not Found
          </span>
        </h1>

        {/* Pesan Kesalahan */}
        <div className="mt-10 space-y-4">
          <h2 className="font-serif text-2xl md:text-3xl text-stone-800">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-stone-500 max-w-md mx-auto text-sm leading-relaxed">
            Mohon maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan. 
            Mari kembali ke koleksi terbaik kami untuk menemukan busana yang Anda impikan.
          </p>
        </div>

        {/* Tombol Navigasi */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-3 bg-stone-800 text-white text-xs font-bold uppercase tracking-widest hover:bg-stone-700 transition-all duration-300"
          >
            Kembali ke Beranda
          </Link>
          <Link
            to="/koleksi"
            className="w-full sm:w-auto px-8 py-3 border border-stone-800 text-stone-800 text-xs font-bold uppercase tracking-widest hover:bg-stone-50 transition-all duration-300">Lihat Koleksi</Link>
        </div>

        {/* Elemen Dekoratif Tambahan */}
        <div className="mt-20 opacity-20">
          <div className="w-16 h-0.5 bg-stone-400 mx-auto"></div>
        </div>
      </div>
    </div>
  )
}

export default NotFound