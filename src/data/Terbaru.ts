import terbaru1 from "../assets/terbaru/.jpeg";
import terbaru2 from "../assets/terbaru/.jpeg";
import terbaru3 from "../assets/terbaru/.jpeg";


// Definisikan Interface untuk keamanan data (TypeScript)
export interface Terbaru {
  id: number;
  nama: string;
  harga: number;
  hargaCoret?: number; // Opsional
  gambar: string;
  kategori: string;
  isNew: boolean;
}


export const listTerbaru: Terbaru[] = [
  {
    id: 1,
    nama: "Terbaru",
    harga: 121500,
    hargaCoret: 135000,
    gambar: terbaru1,
    kategori: "Pashmina",
    isNew: true
  },
];
