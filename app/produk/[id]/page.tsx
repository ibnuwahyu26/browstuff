"use client"

import Image from "next/image"
import { useState } from "react"
import { useParams } from "next/navigation"
import { products } from "@/app/data/products"
import RentalForm from "@/app/components/RentalForm"

export default function ProductDetailPage() {
  const params = useParams()
  const id = params.id as string
  const product = products.find((p) => p.id === id)

  // STATE untuk gambar utama
 const [mainImage, setMainImage] = useState<string | null>(null)

if (!product) {
  return <div className="p-10">Produk tidak ditemukan</div>
}

const image = mainImage ?? product.mainImage

  // ===============================
  // Step 2: State modal rental form
  const [showRentalForm, setShowRentalForm] = useState(false)

  // Step 3: fungsi klik SEWA untuk buka modal
  const handleSewaClick = () => {
    setShowRentalForm(true)
  }

  // Step 4: fungsi tutup modal
  const handleCloseModal = () => {
    setShowRentalForm(false)
  }

  // Step 4b: fungsi submit form
  const handleSubmitRental = (formData: any) => {
    alert(`Penyewaan ${product?.name} berhasil diajukan!`)
    setShowRentalForm(false)
  }
  // ===============================

  if (!product) {
    return <div className="p-10">Produk tidak ditemukan</div>
  }

  return (
    <main className="h-screen overflow-hidden bg-white px-6 py-4 text-black">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-12 gap-6">

        {/* LEFT - PRODUCT IMAGES */}
        <div className="col-span-4 flex flex-col justify-center">
          <div className="border rounded-xl p-4 flex justify-center">
            <Image
              src={mainImage ?? product.mainImage}
              alt={product.name}
              width={260}
              height={420}
              className="object-contain"
            />
          </div>

          <div className="flex gap-3 mt-3 justify-center">
            {product.thumbnails?.map((thumb, i) => (
              <div
                key={i}
                className="border rounded-lg p-2 cursor-pointer hover:border-black"
                onClick={() => setMainImage(thumb)}
              >
                <Image
                  src={thumb}
                  alt={`${product.name} thumbnail ${i + 1}`}
                  width={50}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CENTER - PRODUCT INFO */}
        <div className="col-span-5 flex flex-col gap-4 justify-between">
          <div className="bg-[#2E4A7D] rounded-xl p-4">
            <h1 className="text-xl font-bold text-white">{product.name}</h1>
            <p className="font-semibold text-white">Rp {product.price} / Day</p>
            <p className="text-sm text-white">{product.stock} Stok tersedia</p>
          </div>

          <div className="border-2 border-black rounded-xl flex-1 overflow-hidden">
            <div className="bg-gray-300 px-4 py-2 font-semibold">
              Spesifikasi Produk
            </div>
            <div className="p-3 text-sm space-y-1">
              {product.specs.map((spec, i) => (
                <p key={i}>• {spec}</p>
              ))}
            </div>
          </div>

          <div className="border-2 border-black rounded-xl p-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
            <div>
              <p className="font-semibold">{product.owner}</p>
              <p className="text-sm">⭐ {product.rating}</p>
            </div>
          </div>

          <div className="border-2 border-black rounded-xl p-3 h-[80px]">
            <p className="font-semibold">Ulasan</p>
            <p className="text-sm text-gray-500">
              {product.reviews.length > 0
                ? product.reviews.join(", ")
                : "Belum ada ulasan"}
            </p>
          </div>
        </div>

        {/* RIGHT - CHECKOUT */}
        <div className="col-span-3 flex flex-col justify-between">
          <div className="bg-gray-300 rounded-xl p-4 space-y-3 max-h-[520px]">
            <div>
              <p className="text-sm font-medium">TOTAL HARGA:</p>
              <p className="text-xl font-bold">Rp {product.price}</p>
            </div>

            <div>
              <p className="font-semibold text-sm mb-1">Kuantitas</p>
              <div className="flex items-center gap-3">
                <button className="w-7 h-7 border border-black rounded">−</button>
                <span>1</span>
                <button className="w-7 h-7 border border-black rounded">+</button>
              </div>
            </div>

            <div>
              <p className="font-semibold text-sm mb-1">Mulai sewa</p>
              <button className="w-full border border-black rounded-lg py-1 text-sm">
                Cari tanggal
              </button>
            </div>

            <div>
              <p className="font-semibold text-sm mb-1">Selesai Sewa</p>
              <input
                type="text"
                disabled
                value="8–10 Des 2025"
                className="w-full border border-black rounded-lg py-1 px-2 text-sm bg-white"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button className="w-10 h-10 bg-gray-800 text-white rounded-lg">
                🛒
              </button>
              <button
                onClick={handleSewaClick} // ✅ Step 3: klik SEWA buka modal
                className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold text-sm"
              >
                SEWA
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Step 5: MODAL RENTAL FORM */}
      {showRentalForm && product && (
        <RentalForm
          selectedItem={product}
          onClose={handleCloseModal}
          onSubmit={handleSubmitRental}
        />
      )}
    </main>
  )
}
