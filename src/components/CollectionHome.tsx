// import React from 'react'

const CollectionHome = () => {
  return (
    <section id="koleksi" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h3 className="text-4xl text-stone-800">Koleksi Terbaru</h3>
            <div className="w-20 h-0.5 bg-stone-300 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group cursor-pointer">
                <div className="relative aspect-3/4 overflow-hidden bg-gray-200">
                    <img src="assets/images/kokoh2.jpeg" alt="Gamis 1" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition bg-white/90 backdrop-blur-sm">
                        <button className="w-full py-2 text-xs font-bold uppercase tracking-tighter">Cek Detail</button>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <h4 className="text-sm font-medium text-gray-900">Fatima Series - Sage Green</h4>
                    <p className="text-stone-500 mt-1">Rp 459.000</p>
                </div>
            </div>

            <div className="group cursor-pointer">
                <div className="relative aspect-3/4 overflow-hidden bg-gray-200">
                    <img src="assets/images/lengan.jpeg" alt="Gamis 2" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition bg-white/90 backdrop-blur-sm">
                        <button className="w-full py-2 text-xs font-bold uppercase tracking-tighter">Cek Detail</button>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <h4 className="text-sm font-medium text-gray-900">Aisha Set - Dusty Rose</h4>
                    <p className="text-stone-500 mt-1">Rp 525.000</p>
                </div>
            </div>

            <div className="group cursor-pointer">
                <div className="relative aspect-3/4 overflow-hidden bg-gray-200">
                    <img src="assets/images/setfamily.jpeg" alt="Gamis 3" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition bg-white/90 backdrop-blur-sm">
                        <button className="w-full py-2 text-xs font-bold uppercase tracking-tighter">Cek Detail</button>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <h4 className="text-sm font-medium text-gray-900">Khadijah Abaya - Midnight Black</h4>
                    <p className="text-stone-500 mt-1">Rp 399.000</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CollectionHome