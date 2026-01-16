// Import semua gambar
import Gamis1 from "../assets/images/gamis.jpeg";
import Gamis2 from "../assets/images/gamis2.jpeg";
import Gamis3 from "../assets/images/gamis3.jpeg";
import Gamis4 from "../assets/images/gamis4.jpeg";
import Gamis5 from "../assets/images/gamis5.jpeg";
import Gamis6 from "../assets/images/gamis6.jpeg";
import Gamis7 from "../assets/images/gamis7.jpeg";
import kokoh1 from "../assets/images/kokoh.jpeg";
import kokoh2 from "../assets/images/kokoh2.jpeg";
import lengan1 from "../assets/images/lengan.jpeg";
import lengan2 from "../assets/images/lengan2.jpeg";
import mukena1 from "../assets/images/mukena.jpeg";
import mukena2 from "../assets/images/mukena2.jpeg";
import setfamily1 from "../assets/images/setfamily.jpeg";
import setfamily2 from "../assets/images/setfamily2.jpeg";

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
    kategori: "gamis",
    isNew: true
  },
  {
    id: 2,
    nama: "Alba Square Instant",
    harga: 116100,
    hargaCoret: 129000,
    gambar: Gamis2,
    kategori: "khimar-bergo",
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
    isNew: true
  },
  {
    id: 7,
    nama: "Aqsa Abaya Luxury",
    harga: 279000,
    hargaCoret: 310000,
    gambar: Gamis7,
    kategori: "Gamis",
    isNew: true
  },
  {
    id: 8,
    nama: "Baju Kokoh Hitam",
    harga: 279000,
    hargaCoret: 310000,
    gambar: kokoh1,
    kategori: "kokoh",
    isNew: true
  },
  {
    id: 9,
    nama: "Baju Kokoh Hitam polos",
    harga: 279000,
    hargaCoret: 310000,
    gambar: kokoh2,
    kategori: "kokoh",
    isNew: true
  },
  {
    id: 10,
    nama: "Pelindung Lengan",
    harga: 279000,
    hargaCoret: 310000,
    gambar: lengan1,
    kategori: "Aksesoris",
    isNew: true
  },
  {
    id: 11,
    nama: "Pelindung Lengan Coklat",
    harga: 279000,
    hargaCoret: 310000,
    gambar: lengan2,
    kategori: "Aksesoris",
    isNew: true
  },
  {
    id: 12,
    nama: "Mukena Putih",
    harga: 279000,
    hargaCoret: 310000,
    gambar: mukena1,
    kategori: "Aksesoris",
    isNew: true
  },
  {
    id: 13,
    nama: "Mukena Biru",
    harga: 279000,
    hargaCoret: 310000,
    gambar: mukena2,
    kategori: "Aksesoris",
    isNew: true
  },
  {
    id: 14,
    nama: "Set Family Faza Series",
    harga: 279000,
    hargaCoret: 310000,
    gambar: setfamily1,
    kategori: "Aksesoris",
    isNew: true
  },
  {
    id: 15,
    nama: "Set Family alyn",
    harga: 279000,
    hargaCoret: 310000,
    gambar: setfamily2,
    kategori: "Aksesoris",
    isNew: true
  },
];