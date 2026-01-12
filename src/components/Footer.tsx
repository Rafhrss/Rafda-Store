import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="font-serif text-3xl text-white mb-6 tracking-widest">Rafda Syar'i</h2>
                    <p className="max-w-sm text-sm leading-relaxed">
                        Menyediakan busana muslimah yang memenuhi kaidah syar'i tanpa mengesampingkan estetika dan kenyamanan. Setiap jahitan adalah dedikasi kami untuk Anda.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Bantuan</h4>
                    <ul className="space-y-4 text-sm">
                        <li><a href="#" className="hover:text-white transition">Cara Order</a></li>
                        <li><a href="#" className="hover:text-white transition">Pengiriman</a></li>
                        <li><a href="#" className="hover:text-white transition">Kebijakan Pengembalian</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Kontak</h4>
                    <ul className="space-y-4 text-sm">
                        <li>WhatsApp: +62 812 3456 789</li>
                        <li>Email: salam@alaura.com</li>
                        <li>Instagram: @alaura.syari</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-stone-800 mt-16 pt-8 text-center text-xs">
                <p>&copy; 2024 Rafda Syar'i Syari Official Store. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer