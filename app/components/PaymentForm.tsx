"use client"

import React from "react"
import type { Item, FormData } from "../interfaces/type"

interface PaymentFormProps {
  selectedItems?: Item[]
  userData?: FormData
  onClose?: () => void
  onSubmit?: () => void
}

export default function PaymentForm({
  selectedItems = [],
  onClose,
  onSubmit,
}: PaymentFormProps) {

  const items: Item[] = selectedItems.length > 0 ? selectedItems : [
    {
      id: 1,
      name: "Camera SONY",
      price: 250000,
      img: "/sony-camera.jpg",
      duration: "1 Hari",
      startDate: "12 Jan 2026",
      endDate: "14 Jan 2026",
    },
    {
      id: 2,
      name: "Handy Talky (HT)",
      price: 50000,
      img: "/walkie-talkie.jpg",
      duration: "1 Hari",
      startDate: "12 Jan 2026",
      endDate: "13 Jan 2026",
    },
  ]

  const subtotal = items.reduce((sum, item) => sum + (item.price * 2), 0) // Contoh perhitungan subtotal

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1e2530] rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
       <div className="relative h-16 items-end">
  <div className="absolute inset-0 bg-[#003366] rounded-t-2xl"></div>

  {/* LAYER BIRU DI BELAKANG TAB */}
  <div
    className="absolute inset-y-0 left-10 w-1/2 bg-[#3b5998]"
    style={{
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "20px",
      borderBottomRightRadius: "100px",
    }}
  ></div>

  {/* WRAPPER TAB */}
  <div className="relative flex h-full items-center z-10 ">

    {/* TAB FORM PENYEWAAN */}
    <div
      className="h-full bg-[#343a40] px-8 flex items-center gap-2"
      style={{
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "40px",
        borderBottomRightRadius: "40px",
        boxShadow: "4px 0 10px rgba(0,0,0,0.3)",
      }}
    >
      <div className="border-[1.5px] border-white rounded-md p-0.5 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h2 className="text-white text-lg font-medium">
        Form Penyewaan
      </h2>
    </div>

    {/* TEKS PEMBAYARAN DI ATAS LAYER BIRU */}
<div className="h-full flex items-center gap-2 px-10">
  <div className="border-[1.5px] border-white rounded-md p-0.5 flex items-center justify-center opacity-80">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>

  <h2 className="text-white text-lg font-medium opacity-80">
    Pembayaran
  </h2>
</div>
  </div>
</div>


{/* CONTENT */}
<div className="grid md:grid-cols-2 gap-6 p-6">

          {/* --- LEFT COLUMN (Info Pesanan) --- */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="border-2 border-black rounded-xl p-4 flex gap-4 bg-gray-50">
                  <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                    <img src={item.img} alt={item.name} className="w-20 h-20 object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-black">{item.name}</h3>
                    <div className="text-xs text-gray-700 space-y-0.5">
                      <p>Tarif: Rp. {item.price.toLocaleString()} per Hari</p>
                      <p>Durasi Peminjaman: {item.duration}</p>
                      <p>Tanggal Mulai: {item.startDate}</p>
                      <p className="border-b border-black pb-1">Tanggal Kembali: {item.endDate}</p>
                      <p className="text-right font-bold pt-1">Sub Total : Rp. {(item.price * 2).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Section (Blue Background sesuai foto) */}
            <div className="bg-[#94b3e3] rounded-xl p-4 text-black font-semibold">
              <div className="flex justify-between border-b border-[#3b5998] pb-1">
                <span>Subtotal</span>
                <span>Rp. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b border-[#3b5998] py-1">
                <span>Shipping</span>
                <span>GRATIS</span>
              </div>
              <div className="flex justify-between pt-2 text-xl font-bold">
                <span>Total Harga</span>
                <span>Rp. {subtotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN (Form sesuai foto) --- */}
          <div className="bg-[#3a3f45] rounded-xl p-6 space-y-4 shadow-inner">
            
            {/* Nama Lengkap */}
            <div>
              <label className="block text-[#00BCD4] font-bold text-sm mb-1">Nama Lengkap</label>
              <input 
                type="text" 
                defaultValue="Jericho Wahyu"
                className="w-full px-4 py-2 bg-transparent border-2 border-white rounded-xl text-[#00BCD4] focus:outline-none"
              />
            </div>

            {/* Metode Pembayaran (Sesuai Box di Foto) */}
            <div className="border-2 border-white rounded-xl overflow-hidden">
              <div className="bg-transparent p-2">
                <label className="block text-[#00BCD4] font-bold text-sm mb-2 px-1">Metode Pembayaran</label>
                <div className="space-y-0">
                  <label className="flex items-center justify-between p-2 bg-[#94b3e3] text-black border-b border-black">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded font-bold">COD</div>
                      <span className="text-sm font-medium">Cash On Delivery</span>
                    </div>
                    <input type="radio" name="pay" className="w-4 h-4" />
                  </label>
                  <label className="flex items-center justify-between p-2 bg-[#94b3e3] text-black border-b border-black">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-400 text-white text-[10px] px-2 py-0.5 rounded font-bold">gopay</div>
                      <span className="text-sm font-medium">Gopay</span>
                    </div>
                    <input type="radio" name="pay" className="w-4 h-4" defaultChecked />
                  </label>
                  <div className="bg-[#e0e0e0] p-2 flex justify-between items-center text-[10px] text-gray-600">
                    <div className="flex gap-2 grayscale">
                      <span>BCA</span><span>Mandiri</span><span>DANA</span>
                    </div>
                    <button className="text-[#00BCD4] font-bold italic">Lihat Metode Lain &gt;</button>
                  </div>
                </div>
              </div>
            </div>

            {/* No Handphone */}
            <div>
              <label className="block text-[#00BCD4] font-bold text-sm mb-1">No Handphone</label>
              <div className="flex items-center gap-2">
                <span className="text-[#00BCD4] font-bold text-lg">+62</span>
                <input 
                  type="text" 
                  defaultValue="85697562453"
                  className="flex-1 px-4 py-2 bg-transparent border-2 border-white rounded-xl text-[#00BCD4] focus:outline-none"
                />
              </div>
            </div>

            {/* Alamat */}
            <div>
              <label className="block text-[#00BCD4] font-bold text-sm mb-1">Alamat</label>
              <input 
                type="text" 
                defaultValue="Univ. Paramadina (Ruangan HIMTI)"
                className="w-full px-4 py-2 bg-transparent border-2 border-white rounded-xl text-[#00BCD4] focus:outline-none"
              />
            </div>

            {/* Tombol Submit Tengah */}
            <div className="pt-2">
              <button
                onClick={onSubmit}
                className="w-full py-3 bg-[#00BCD4] text-black font-bold rounded-xl hover:bg-cyan-400 transition text-center"
              >
                Bayar Sekarang
              </button>
              <button onClick={onClose} className="w-full text-white text-xs mt-3 underline opacity-70">
                ← Kembali
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}