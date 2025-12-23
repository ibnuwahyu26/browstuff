"use client"

import { useState } from "react"
import { useRouter } from "next/navigation" // ✅ TAMBAHAN
import RentalForm from "@/app/components/RentalForm"

interface Item {
  id: number
  name: string
  price: string
  status: string
  img: string
}

export default function HomePage() {
  const router = useRouter() // ✅ TAMBAHAN

  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [showRentalForm, setShowRentalForm] = useState(false)

  const items = [
    { id: 1, name: "Camera SONY", price: "250.000", status: "tersedia", img: "/items/camera.png" },
    { id: 2, name: "Handy Talkie", price: "50.000", status: "tersedia", img: "/items/ht.png" },
    { id: 3, name: "Audio Mixer", price: "250.000", status: "tidak", img: "/items/mixer.png" },
    { id: 4, name: "Lampu Sorot", price: "250.000", status: "tersedia", img: "/items/lampu.png" },
    { id: 5, name: "Layar Proyektor", price: "250.000", status: "tersedia", img: "/items/proyektor.png" },
    { id: 6, name: "Lampu Taktis", price: "250.000", status: "tersedia", img: "/items/moving.png" },
    { id: 7, name: "Tenda", price: "250.000", status: "tersedia", img: "/items/tenda.png" },
    { id: 8, name: "Mic", price: "250.000", status: "tersedia", img: "/items/mic.png" },
  ]

  // ✅ DIUBAH ISINYA SAJA (UI TIDAK DISENTUH)
  const handleRentClick = (item: Item) => {
    if (item.status === "tersedia") {
      router.push(`/produk/${item.id}`)
    }
  }

  const handleCloseModal = () => {
    setShowRentalForm(false)
    setSelectedItem(null)
  }

  const handleSubmitRental = (formData: any) => {
    console.log("Form data:", formData)
    alert(
      `Penyewaan ${selectedItem?.name} berhasil diajukan!\nTotal: Rp. ${(Number.parseInt(selectedItem!.price.replace(/\./g, "")) * formData.jumlahHari).toLocaleString("id-ID")}`,
    )
    handleCloseModal()
  }

  return (
    <main className="min-h-screen bg-[#E5E5E5] font-sans">
      {/* HEADER */}
      <header className="bg-[#00ADB5] px-4 md:px-8 py-4 flex items-center justify-between">
        <h1 className="text-white text-2xl md:text-3xl font-extrabold">BrowStuff</h1>

        <div className="bg-[#3A4750] text-white px-2 md:px-4 lg:px-8 py-3 rounded-xl flex flex-wrap gap-2 md:gap-4 lg:gap-10 text-xs justify-center md:justify-end">
          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#00ADB5] transition min-w-0">
            <i className="fa-solid fa-bell text-sm md:text-lg"></i>
            <span className="text-xs">Notifikasi</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#00ADB5] transition min-w-0">
            <i className="fa-solid fa-store text-sm md:text-lg"></i>
            <span className="text-xs">Buka Toko</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#00ADB5] transition min-w-0">
            <i className="fa-solid fa-bag-shopping text-sm md:text-lg"></i>
            <span className="text-xs">Orders</span>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#00ADB5] transition min-w-0">
            <i className="fa-solid fa-user text-sm md:text-lg"></i>
            <span className="text-xs">Akun</span>
          </div>
        </div>
      </header>

      {/* ACTION BAR */}
      <section className="max-w-6xl mx-auto mt-6 px-4 flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="relative group z-50">
          <button className="flex items-center gap-2 bg-[#222831] text-white px-5 py-3 rounded-xl font-semibold shadow hover:bg-[#1b2027] transition">
            <span className="text-xl">☰</span>
            PILIH KATEGORI
            <i className="fa-solid fa-chevron-down text-xs"></i>
          </button>
        </div>

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
      <section className="max-w-6xl mx-auto pt-14 pb-16 px-2 md:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="bg-white w-full rounded-3xl p-4 md:p-9 shadow-md flex justify-center z-10">
              <img src={item.img} alt={item.name} className="h-20 md:h-28 object-contain" />
            </div>

            <div className="bg-[#3A4750] w-full -mt-8 rounded-3xl p-3 md:p-4 pt-8 md:pt-10 shadow-lg text-white flex flex-col">
              <h3 className="text-xs md:text-sm font-semibold text-center mb-2 md:mb-3">{item.name}</h3>

              <div className="flex justify-between mb-4">
                <p className="text-xs md:text-sm">Rp. {item.price}/Hari</p>
                <span className={`text-xs px-3 rounded-full ${item.status === "tersedia" ? "bg-green-500" : "bg-red-500"}`}>
                  {item.status}
                </span>
              </div>

              <button
                onClick={() => handleRentClick(item)}
                disabled={item.status !== "tersedia"}
                className={`mt-auto w-full py-1.5 rounded-full border-2 text-xs md:text-sm transition
                  ${item.status === "tersedia"
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

      {showRentalForm && selectedItem && (
        <RentalForm selectedItems={[selectedItem]} onClose={handleCloseModal} onSubmit={handleSubmitRental} />
      )}
    </main>
  )
}
