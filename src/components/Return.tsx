import { RefreshCcw, ClipboardCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

const Return = () => {
  const requirements = [
    {
      id: 1,
      title: "Waktu Pengembalian",
      desc: "Permohonan pengembalian dilakukan maksimal 3 hari setelah barang diterima berdasarkan resi kurir.",
      icon: <AlertCircle size={20} className="text-stone-800" />
    },
    {
      id: 2,
      title: "Kondisi Produk",
      desc: "Produk harus dalam kondisi asli, belum dicuci, tidak berbau parfum, dan tag label masih terpasang utuh.",
      icon: <CheckCircle2 size={20} className="text-stone-800" />
    },
    {
      id: 3,
      title: "Alasan Sah",
      desc: "Pengembalian hanya berlaku jika terdapat cacat produksi atau kesalahan pengiriman ukuran/warna dari pihak kami.",
      icon: <ClipboardCheck size={20} className="text-stone-800" />
    }
  ];

  return (
    <>
      {/* HEADER SECTION */}
      <section id="pengembalian" className="bg-stone-50 py-20 border-b border-stone-100 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] tracking-[0.4em] uppercase text-stone-400 mb-4 block font-bold">Customer Care</span>
          <h1 className="font-serif text-4xl md:text-5xl text-stone-800 mb-6">Kebijakan Pengembalian</h1>
          <p className="text-stone-500 text-sm leading-relaxed italic">
            "Kenyamanan dan kepuasan Sahabat Rafda adalah prioritas utama kami dalam setiap pelayanan."
          </p>
        </div>
      </section>

      {/* REQUIREMENTS GRID */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {requirements.map((item) => (
            <div key={item.id} className="border border-stone-100 p-8 rounded-sm hover:bg-stone-50 transition duration-300">
              <div className="mb-6 flex justify-center">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg text-stone-800 text-center mb-4 uppercase tracking-widest">{item.title}</h3>
              <p className="text-stone-500 text-xs text-center leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCEDURE SECTION */}
      <section className="bg-stone-900 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 text-white">
            <div className="md:w-1/3 flex justify-center">
              <RefreshCcw size={120} className="text-stone-700 opacity-50" />
            </div>
            <div className="md:w-2/3 space-y-6">
              <h2 className="font-serif text-3xl mb-4 uppercase tracking-tight">Prosedur Klaim</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="font-bold text-stone-500">01.</span>
                  <p className="text-sm text-stone-300">Hubungi admin WhatsApp kami dengan menyertakan nomor pesanan dan foto detail bagian yang cacat.</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-stone-500">02.</span>
                  <p className="text-sm text-stone-300">Setelah dikonfirmasi, kirimkan kembali produk ke alamat workshop kami menggunakan kurir pilihan Anda.</p>
                </div>
                <div className="flex gap-4">
                  <span className="font-bold text-stone-500">03.</span>
                  <p className="text-sm text-stone-300">Produk pengganti akan kami kirimkan kembali secara gratis setelah produk retur kami terima dan periksa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Return;