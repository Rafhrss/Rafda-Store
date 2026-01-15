// src/data/categories.ts

export interface Category {
  id: number;
  slug: string; // Digunakan untuk URL atau ID filter (huruf kecil, tanpa spasi)
  name: string; // Nama yang ditampilkan di UI
  count?: number; // Opsional: Jumlah produk dalam kategori tersebut
}

export const listCategories: Category[] = [
  { id: 1, slug: 'aksesoris', name: 'Aksesoris', count: 5 },
  { id: 2, slug: 'gamis', name: 'Gamis', count: 33 },
  { id: 3, slug: 'gamis-khimar-set', name: 'Gamis Khimar Set', count: 8 },
  { id: 4, slug: 'khimar-bergo', name: 'Khimar & Bergo', count: 12 },
  { id: 5, slug: 'menswear', name: 'Menswear', count: 4 },
  { id: 6, slug: 'outer', name: 'Outer', count: 2 },
  { id: 7, slug: 'skirt', name: 'Skirt', count: 1 },
];