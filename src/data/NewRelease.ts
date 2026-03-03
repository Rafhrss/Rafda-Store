import fendi from "../assets/NewRelease/fendi_white.jpeg";
import fendi1 from "../assets/NewRelease/fendi_denim.jpeg";
import fendi2 from "../assets/NewRelease/fendi_army.jpeg";
import fendi3 from "../assets/NewRelease/fendi_bata.jpeg";
import fendi4 from "../assets/NewRelease/fendi_burgundi.jpeg";
import fendi5 from "../assets/NewRelease/fendi_grey.jpeg";
import fendi6 from "../assets/NewRelease/fendi_olive.jpeg";

export interface Variant {
  warna: string;
  kodeWarna: string;
  images: string[]; // Mendukung banyak gambar per warna
}

export interface NewRelease {
  id: number;
  nama: string;
  variant: Variant[];
  harga: number;
  hargaCoret?: number;
  gambar: string;
  kategori: string;
  isNew: boolean;
}

export const listNewRelease: NewRelease[] = [
  {
    id: 1,
    nama: "Fendi Kemko",
    variant: [
      {
        warna: "Denim",
        kodeWarna: "#1560BD", // Untuk lingkaran pilihan warna
        images: [fendi1],
      },
      {
        warna: "Army",
        kodeWarna: "#4B5320",
        images: [fendi2],
      },
      {
        warna: "Bata",
        kodeWarna: "#A45A52",
        images: [fendi3],
      },
      {
        warna: "Burgundi",
        kodeWarna: "#800020",
        images: [fendi4],
      },
    ],
    harga: 170000,
    hargaCoret: 150000,
    gambar: fendi,
    kategori: "Koko",
    isNew: true
  },
]