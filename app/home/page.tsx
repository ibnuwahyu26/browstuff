import React from "react";

export default function HomePage() {
  const items = [
    { id: 1, name: "Camera SONY", price: "250.000", status: "tersedia", img: "/items/camera.png" },
    { id: 2, name: "Handy Talkie", price: "50.000", status: "tersedia", img: "/items/ht.png" },
    { id: 3, name: "Audio Mixer", price: "250.000", status: "tidak", img: "/items/mixer.png" },
    { id: 4, name: "Lampu Sorot", price: "250.000", status: "tersedia", img: "/items/lampu.png" },
    { id: 5, name: "Layar Proyektor", price: "250.000", status: "tersedia", img: "/items/proyektor.png" },
    { id: 6, name: "Lampu Taktis", price: "250.000", status: "tersedia", img: "/items/moving.png" },
    { id: 7, name: "Tenda", price: "250.000", status: "tersedia", img: "/items/tenda.png" },
    { id: 8, name: "Mic", price: "250.000", status: "tersedia", img: "/items/mic.png" },
  ];

  return (
    <main className="min-h-screen bg-[#E5E5E5] font-sans">

      {/* HEADER */}
      <header className="bg-[#00ADB5] px-8 py-4 flex items-center justify-between">
        <h1 className="text-white text-3xl font-extrabold">BrowStuff</h1>

        <div className="bg-[#3A4750] text-white px-8 py-3 rounded-xl flex gap-10 text-xs">
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#00ADB5] transition">
            <i className="fa-solid fa-bell text-lg"></i>
            <span>Notifikasi</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#00ADB5] transition">
            <i className="fa-solid fa-store text-lg"></i>
            <span>Buka Toko</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#00ADB5] transition">
            <i className="fa-solid fa-bag-shopping text-lg"></i>
            <span>Orders</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#00ADB5] transition">
            <i className="fa-solid fa-user text-lg"></i>
            <span>Akun</span>
          </div>
        </div>
      </header>

      {/* ACTION BAR (CATEGORY + SEARCH) */}
      <section className="max-w-6xl mx-auto mt-6 px-4 flex items-center gap-6">

        {/* CATEGORY DROPDOWN */}
        <div className="relative group z-50">
          <button className="flex items-center gap-2 bg-[#222831] text-white px-5 py-3 rounded-xl font-semibold shadow hover:bg-[#1b2027] transition">
            <span className="text-xl">☰</span>
            PILIH KATEGORI
            <i className="fa-solid fa-chevron-down text-xs"></i>
          </button>

          <div className="absolute left-0 mt-2 w-44 bg-white shadow-xl rounded-xl
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transform -translate-y-2 group-hover:translate-y-0
            transition-all duration-300 overflow-hidden"
          >
            <ul className="text-gray-700 text-sm">
              {["Sound System", "Lighting", "Kamera", "Olahraga", "Lainnya"].map((cat) => (
                <li
                  key={cat}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="flex-1">
          <div className="flex items-center bg-white px-4 py-3 shadow rounded-xl">
            <input
              type="text"
              placeholder="Mau sewa apa hari ini?"
              className="w-full focus:outline-none text-gray-800"
            />
            <i className="fa-solid fa-magnifying-glass text-gray-500 ml-2"></i>
          </div>
        </div>

      </section>

      {/* GRID PRODUK */}
      <section className="max-w-6xl mx-auto pt-14 pb-16 px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center">

            {/* PUTIH (ATAS) */}
            <div className="bg-white w-full rounded-3xl p-9 shadow-md flex justify-center z-10">
              <img src={item.img} alt={item.name} className="h-28 object-contain" />
            </div>

            {/* ABU (BAWAH) */}
            <div className="bg-[#3A4750] w-full -mt-8 rounded-3xl p-4 pt-10 shadow-lg text-white flex flex-col">
              <h3 className="text-sm font-semibold text-center mb-3">
                {item.name}
              </h3>

              <div className="flex justify-between items-center mb-4">
                <p className="text-sm">
                  Rp. {item.price}
                  <span className="text-xs">/Hari</span>
                </p>

                <span
                  className={`text-xs px-3 py-0.5 rounded-full ${
                    item.status === "tersedia" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {item.status === "tersedia" ? "tersedia" : "tidak tersedia"}
                </span>
              </div>

              <button
                disabled={item.status !== "tersedia"}
                className={`mt-auto w-full py-1.5 rounded-full border-2 text-sm transition
                  ${
                    item.status === "tersedia"
                      ? "border-white hover:bg-white hover:text-[#3A4750]"
                      : "border-gray-400 text-gray-400 cursor-not-allowed"
                  }`}
              >
                Sewa
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
