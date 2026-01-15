// Import semua gambar
import Gamis1 from "../assets/images/gamis.jpeg";
import Gamis2 from "../assets/images/gamis2.jpeg";
import Gamis3 from "../assets/images/gamis3.jpeg";
import Gamis4 from "../assets/images/gamis4.jpeg";
import Gamis5 from "../assets/images/gamis5.jpeg";
import Gamis6 from "../assets/images/gamis6.jpeg";
import Gamis7 from "../assets/images/gamis7.jpeg";

// Definisikan Interface untuk keamanan data (TypeScript)
export interface Product {
  id: number;
  nama: string;
  harga: number;
  hargaCoret?: number; // Opsional
  gambar: string;
  kategori: string;
  isNew: boolean;
}

export const listProducts: Product[] = [
  {
    id: 1,
    nama: "Adiba Pashmina Instan",
    harga: 121500,
    hargaCoret: 135000,
    gambar: Gamis1,
    kategori: "Pashmina",
    isNew: true
  },
  {
    id: 2,
    nama: "Alba Square Instant",
    harga: 116100,
    hargaCoret: 129000,
    gambar: Gamis2,
    kategori: "Khimar",
    isNew: true
  },
  {
    id: 3,
    nama: "Aqsa Abaya Luxury",
    harga: 279000,
    hargaCoret: 310000,
    gambar: Gamis3,
    kategori: "Gamis",
    isNew: false
  },
  {
    id: 4,
    nama: "Aqsa Abaya Luxury",
    harga: 279000,
    hargaCoret: 310000,
    gambar: Gamis4,
    kategori: "Gamis",
    isNew: false
  },
  {
    id: 5,
    nama: "Aqsa Abaya Luxury",
    harga: 279000,
    hargaCoret: 310000,
    gambar: Gamis5,
    kategori: "Gamis",
    isNew: false
  },
  {
    id: 6,
    nama: "Aqsa Abaya Luxury",
    harga: 279000,
    hargaCoret: 310000,
    gambar: Gamis6,
    kategori: "Gamis",
    isNew: false
  },
  {
    id: 7,
    nama: "Aqsa Abaya Luxury",
    harga: 279000,
    hargaCoret: 310000,
    gambar: Gamis7,
    kategori: "Gamis",
    isNew: false
  },
];