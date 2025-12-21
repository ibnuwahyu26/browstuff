import React from "react";
import Link from "next/link";
import "@/app/globals.css";

export default function LandingPage() {
  // ================= DATA BARANG =================
  const items = [
    { id: 1, name: "Camera SONY", price: "250.000", img: "/items/camera.png" },
    { id: 2, name: "Handy Talkie", price: "50.000", img: "/items/ht.png" },
    { id: 3, name: "Audio Mixer", price: "250.000", img: "/items/mixer.png" },
    { id: 4, name: "Lampu Sorot", price: "250.000", img: "/items/lampu.png" },
    {
      id: 5,
      name: "Layar Proyektor",
      price: "250.000",
      img: "/items/proyektor.png",
    },
    { id: 6, name: "Lampu Taktis", price: "250.000", img: "/items/moving.png" },
  ];

  return (
    <main className="w-full font-sans bg-gray-100">
      {/* ================= NAVBAR ================= */}
      <nav className="w-full bg-[#00ADB5] px-4 md:px-6 py-4 shadow z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* LEFT SIDE */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 relative">
            {/* Logo */}
            <div className="flex flex-col items-center">
              <img src="/OBJECTS.png" alt="Logo" className="w-14 h-14 mb-1" />
              <h1 className="text-2xl font-bold text-white">BROOWSTUFF</h1>
            </div>

            {/* CATEGORY DROPDOWN */}
            <div className="relative group z-50">
              <button className="flex items-center gap-2 bg-[#222831] text-white px-5 py-3 rounded-lg font-semibold">
                <span className="text-xl">☰</span>
                PILIH KATEGORI
                <span className="text-sm">▼</span>
              </button>

              <div
                className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible 
                group-hover:opacity-100 group-hover:visible
                transform -translate-y-2 group-hover:translate-y-0
                transition-all duration-300 overflow-hidden"
              >
                <ul className="text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Sound Sytem
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Lightning
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Kamera
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Olahraga
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Lainnya
                  </li>
                </ul>
              </div>
            </div>

            {/* SEARCH BAR */}
            <div className="flex items-center">
              <div className="flex items-center bg-white px-4 py-2 shadow w-full md:w-[600px] rounded-lg">
                <input
                  type="text"
                  placeholder="Mau sewa apa hari ini?"
                  className="w-full focus:outline-none text-gray-800"
                />
                <i className="fa-solid fa-magnifying-glass text-gray-500 ml-2"></i>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* RIGHT SIDE */}
            <div className="flex items-center">
              <div className="flex space-x-6 text-sm font-semibold">
                <Link
                  href="/signup"
                  className="px-5 py-2 rounded-lg border-2 border-white text-white font-semibold text-sm
               hover:bg-white hover:-translate-y-0.5
 hover:text-[#00ADB5] transition-all duration-300"
                >
                  SIGN UP
                </Link>
                <Link
                  href="/login"
                  className="px-5 py-2 rounded-lg border-2 border-white text-white font-semibold text-sm
               hover:bg-white hover:-translate-y-0.5
 hover:text-[#00ADB5] transition-all duration-300"
                >
                  LOGIN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <img
          src="BG.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover blur-xs"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-xl text-stroke">
            SEWA ALAT EVENT <br /> PALING LENGKAP DI <br /> PARAMADINA
          </h1>

          <p className="text-white mt-4 tracking-[2px] md:tracking-[5px] text-sm md:text-base">
            "Wujudkan Event Impianmu Bersama Kami!"
          </p>

          <Link
            href="/home"
            className="mt-6 inline-block bg-[#222831] text-white px-4 md:px-6 py-3 rounded-xl shadow-lg hover:bg-[#1b1f24] transition text-sm md:text-base"
          >
            KLIK DI SINI UNTUK PILIH PRODUK TERBAIK KAMI
          </Link>
        </div>
      </section>

      {/* ================= KENAPA BROWSTUFF ================= */}
      <section className="max-w-6xl mx-auto py-12 md:py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* TEXT */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black">
            Kenapa Memilih BrowStuff
          </h2>
          <p className="text-gray-600 mb-4">
            Lagi cari platform peminjaman perlengkapan kegiatan kampus yang
            lengkap, mudah diakses, dan terpercaya? BrowStuff hadir sebagai
            solusi utama bagi mahasiswa.
          </p>
          <p className="text-gray-600 mb-4">
            Sistem ini dirancang untuk memenuhi kebutuhan peminjaman barang
            seperti kamera, HT, proyektor, perlengkapan dokumentasi, hingga alat
            acara lainnya.
          </p>
          <p className="text-gray-600">
            Semua katalog barang tersedia lengkap dengan harga, ketersediaan,
            dan detail barang.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="bg-white shadow-2xl rounded-2xl p-4 md:p-6 border-[3px] md:border-[5px] border-[#00ADB5]">
            <img src="OBJECTS.png" alt="OBJECTS" className="w-48 md:w-64" />
          </div>
        </div>
      </section>

      {/* ================= BARANG TERPOPULER ================= */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-4xl font-extrabold text-[#393E46] tracking-wide text-center drop-shadow-[4px_4px_0px_#98B3DF] mb-10">
          Barang Terpopuler
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#393E46] rounded-3xl overflow-hidden flex flex-col items-center pb-4"
            >
              {/* Image container */}
              <div className="w-full bg-white rounded-3xl p-6 mb-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-contain"
                />
              </div>

              {/* Text & Button */}
              <div className="px-4 w-full">
                <p className="font-semibold text-white text-center mb-3">
                  {item.name}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-white text-sm">Rp. {item.price}/Day</p>
                  <button className="px-8 py-1.5 bg-[#393E46] border-4 border-white text-white text-sm rounded-full transition-colors hover:bg-[#2E3238]">
                    Sewa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Lebih Lanjut */}
        <div className="flex justify-center mt-12">
          <Link
            href="/home"
            className="px-10 py-3 bg-white text-teal-600 text-lg font-semibold rounded-full border-4 border-teal-600 shadow-lg transition-all hover:bg-teal-600 hover:text-white hover:scale-105"
          >
            LEBIH LANJUT
          </Link>
        </div>
      </section>

      {/* ================= VENDOR ================= */}
      <section className="w-full bg-gray-200/30 backdrop-blur-sm py-20 text-center px-4 rounded-none">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Ingin Menjadi Vendor?
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-6">
          Daftarkan barang yang kamu miliki dan mulai hasilkan uang tambahan
          dengan menyewakannya.
        </p>

        <Link href="/register">
        <button className="px-6 py-3 bg-[#00ADB5] text-white rounded-lg shadow-lg hover:bg-[#058A90] transition-colors font-semibold">DAFTAR
        </button>
        </Link>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-teal-600 text-white text-center py-8">
        <h3 className="text-lg font-semibold mb-2">
          Sewa Perlengkapan Event Menjadi Mudah, Murah & Cepat!
        </h3>
        <p className="text-xs mt-4 opacity-80">
          Copyright © BROWSTUFF.ID All Rights Reserved
        </p>
      </footer>
    </main>
  );
}
