// src/data/categories.ts

export interface Category {
  id: number;
  slug: string; // Digunakan untuk URL atau ID filter (huruf kecil, tanpa spasi)
  name: string; // Nama yang ditampilkan di UI
}

export const listCategories: Category[] = [
  { id: 1, slug: 'aksesoris', name: 'Aksesoris' },
  { id: 2, slug: 'gamis', name: 'Gamis' },
  { id: 3, slug: 'khimar-bergo', name: 'Khimar & Bergo' },
  { id: 4, slug: 'menswear', name: 'Menswear' },
  { id: 5, slug: 'outer', name: 'Outer' },
  { id: 6, slug: 'kokoh', name: 'Kokoh' },
];