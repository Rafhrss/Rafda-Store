import { ShoppingBag, Ruler, MessageCircle, Truck, ClipboardCheck, AlertCircle, CheckCircle2, Send, PackageCheck } from 'lucide-react';
import type { JSX } from 'react';


// ---------------- Tipe data untuk langkah-langkah pemesanan ----------------
export interface Step {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}
export const steps: Step[] = [
    {
      id: 1,
      title: "Pilih Koleksi",
      description: "Jelajahi galeri kami dan klik pada pakaian syar'i yang Anda inginkan untuk melihat detail lengkapnya.",
      icon: <ShoppingBag className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Pilih Ukuran & Jumlah",
      description: "Pilih ukuran yang sesuai (S/M/L/XL) dan tentukan jumlah pakaian yang ingin Anda pesan.",
      icon: <Ruler className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Pesan via WhatsApp",
      description: "Klik tombol 'Pesan di WhatsApp'. Sistem kami akan otomatis menyiapkan pesan berisi detail pesanan Anda.",
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Konfirmasi & Kirim",
      description: "Kirim pesan tersebut ke admin kami. Tunggu konfirmasi total biaya dan instruksi pembayaran.",
      icon: <Truck className="w-6 h-6" />,
    },
  ];



// ---------------- Tipe data untuk mitra pengiriman ----------------
export interface Partner {
  name: string;
  desc: string;
}
export const shippingPartners: Partner[] = [
    { name: "J&T Express", desc: "Pengiriman kilat dan terpercaya ke seluruh pelosok negeri." },
    { name: "JNE", desc: "Pilihan utama dengan berbagai layanan mulai dari reguler hingga YES." },
    { name: "Kantor Pos", desc: "Jangkauan terjauh hingga ke desa-desa terpencil di Indonesia." },
    { name: "TiKi", desc: "Solusi pengiriman aman dengan pengalaman puluhan tahun." }
  ];



// ---------------- Tipe data untuk persyaratan pengembalian ----------------
export interface Requirement {
    id: number;
    title: string;
    desc: string;
    icon: JSX.Element;
    style: string;
  }

export interface Procedure {
    id: string;
    title: string;
    desc: string;
    icon: JSX.Element;
    color: string;
  }

export const requirements : Requirement[] = [
    {
      id: 1,
      title: "Waktu Pengembalian",
      desc: "Permohonan pengembalian dilakukan maksimal 3 hari setelah barang diterima berdasarkan resi kurir.",
      icon: <AlertCircle size={24} />,
      // Sudut membulat hanya di pojok kiri atas
      style: "rounded-tl-[60px] rounded-br-[20px]"
    },
    {
      id: 2,
      title: "Kondisi Produk",
      desc: "Produk harus dalam kondisi asli, belum dicuci, tidak berbau parfum, dan tag label masih terpasang utuh.",
      icon: <CheckCircle2 size={24} />,
      // Sudut membulat di semua sisi (oval)
      style: "rounded-[40px]"
    },
    {
      id: 3,
      title: "Alasan Sah",
      desc: "Pengembalian hanya berlaku jika terdapat cacat produksi atau kesalahan pengiriman ukuran/warna dari pihak kami.",
      icon: <ClipboardCheck size={24} />,
      // Sudut membulat hanya di pojok kanan bawah
      style: "rounded-tr-[20px] rounded-bl-[60px]"
    }
  ];

export const procedures = [
    {
      id: "01",
      title: "Hubungi Admin",
      desc: "Chat admin WhatsApp kami dengan menyertakan nomor pesanan dan bukti foto cacat produksi.",
      icon: <MessageCircle size={28} />,
      color: "bg-stone-100"
    },
    {
      id: "02",
      title: "Kirim Kembali",
      desc: "Kirimkan produk ke workshop kami menggunakan jasa ekspedisi terpercaya pilihan Anda.",
      icon: <Send size={28} />,
      color: "bg-orange-50/50" // Sentuhan warna cream hangat
    },
    {
      id: "03",
      title: "Penggantian Cepat",
      desc: "Produk pengganti baru akan kami kirimkan gratis setelah proses verifikasi tim selesai.",
      icon: <PackageCheck size={28} />,
      color: "bg-stone-100"
    }
  ];