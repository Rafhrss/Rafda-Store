interface Testimonial {
  id: number;
  nama: string;
  pesan: string;
  produk: string;
  rating: number;
}

export const dataTestimoni: Testimonial[] = [
    {
      id: 1,
      nama: "Siti Sarah",
      pesan: "Masya Allah, gamisnya cantik sekali! Bahannya adem dan jatuh banget saat dipakai. Pengirimannya juga cepat, adminnya ramah banget membantu pilih ukuran.",
      produk: "Zahra Silk Series",
      rating: 5
    },
    {
      id: 2,
      nama: "Aisyah Putri",
      pesan: "Sudah langganan di Rafda selama 2 tahun. Kualitas jahitan selalu rapi dan tidak pernah mengecewakan. Series terbaru ini bener-bener elegan buat ke kondangan.",
      produk: "Malaika Abaya Set",
      rating: 5
    },
    {
      id: 3,
      nama: "Ummu Fatimah",
      pesan: "Khimarnya menutup dada dengan sempurna dan tetap terlihat modern. Bahannya tidak menerawang tapi tetap ringan. Syukran Rafda Syar'i!",
      produk: "Khimar Khadijah",
      rating: 5
    }
  ];