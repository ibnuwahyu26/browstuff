"use client"

import type React from "react"
import { useState } from "react"
import PaymentForm from "./PaymentForm"


interface Item {
  id: number
  name: string
  price: string
  status: string
  img: string
}

interface FormData {
  namaLengkap: string
  noHandphone: string
  email: string
  alamat: string
  jaminan: string
  fotoKTP: File | null
}

interface RentalFormProps {
  selectedItem?: Item
  selectedItems?: Item[]
  onClose: () => void
  onSubmit: (formData: FormData) => void
}

export default function RentalForm({ selectedItem, selectedItems = [], onClose, onSubmit }: RentalFormProps) {
  const [step, setStep] = useState<1 | 2>(1)
  const [formData, setFormData] = useState<FormData>({ 
    namaLengkap: "",
    noHandphone: "",
    email: "",
    alamat: "",
    jaminan: "KTP",
    fotoKTP: null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        fotoKTP: e.target.files![0],
      }))
    }
  }

  const items = selectedItem
    ? [selectedItem]
    : selectedItems.length > 0
      ? selectedItems
      : [
          {
            id: 1,
            name: "Camera SONY",
            price: "2 HARI",
            status: "available",
            img: "/sony-camera.jpg",
          },
          {
            id: 2,
            name: "Handy Talky (HT)",
            price: "2 HARI",
            status: "available",
            img: "/walkie-talkie.jpg",
          },
        ]
        
        if (step === 2){
          return(
          <PaymentForm
          selectedItems={items}
          onClose={() => setStep (1)}
          onSubmit={() => onSubmit(formData)}
          />
          )
        }
        
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1e2530] rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        
        {/* --- HEADER BARU (Sesuai Foto) --- */}
        <div className="relative h-16 flex items-end">
          {/* Background Biru Paling Belakang */}
          <div className="absolute inset-0 bg-[#003366] rounded-t-2xl"></div>

          {/* Layer Biru Tengah dengan Lengkungan */}
          <div 
            className="absolute inset-0 bg-[#3b5998] w-2/3"
            style={{ 
              borderBottomRightRadius: '100px',
              borderTopRightRadius: '20px',
              borderTopLeftRadius: '15px'
            }}
          ></div>

          {/* Tab Judul "Form Penyewaan" */}
          <div 
            className="relative bg-[#343a40] px-8 py-5 flex items-center gap-2 z-10"
            style={{ 
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '40px',
              borderBottomRightRadius: '40px',
              boxShadow: '4px 0 10px rgba(0,0,0,0.3)'
            }}
          >
            {/* Icon Checkbox Putih */}
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
            <h2 className="text-white text-lg font-medium">Form Penyewaan</h2>
          </div>
        </div>
        {/* --- END HEADER BARU --- */}

        <div className="grid md:grid-cols-2 gap-6 p-6">
          {/* Left Column - Info Pesanan */}
          <div className="bg-white rounded-2xl p-6 h-fit">
            <h3 className="text-2xl font-bold text-[#00BCD4] mb-6">Info Pesanan</h3>

            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="border-2 border-gray-300 rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-white rounded-lg p-2 border border-gray-200">
                      <img src={item.img || "/placeholder.svg"} alt={item.name} className="w-16 h-16 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="bg-[#00BCD4] text-white text-xs font-bold px-2 py-1 rounded">
                          {item.price}
                        </span>
                        <span className="bg-[#00BCD4] text-white text-xs font-bold px-2 py-1 rounded">📦</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="space-y-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setStep(2)
              }}
              className="space-y-4"
            >
              {/* Nama Lengkap */}
              <div>
                <label className="block text-[#00BCD4] font-semibold mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  name="namaLengkap"
                  value={formData.namaLengkap}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#455A64] border border-[#607D8B] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent"
                  placeholder="Masukkan Nama Anda"
                />
              </div>

              {/* No Handphone */}
              <div>
                <label className="block text-[#00BCD4] font-semibold mb-2">No Handphone</label>
                <div className="flex gap-2">
                  <span className="px-4 py-3 bg-[#455A64] border border-[#607D8B] rounded-lg text-[#00BCD4] font-semibold">
                    +62
                  </span>
                  <input
                    type="tel"
                    name="noHandphone"
                    value={formData.noHandphone}
                    onChange={handleInputChange}
                    required
                    className="flex-1 px-4 py-3 bg-[#455A64] border border-[#607D8B] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent"
                    placeholder="Masukkan No HP Anda"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[#00BCD4] font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#455A64] border border-[#607D8B] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent"
                  placeholder="Masukkan Email Anda"
                />
              </div>

              {/* Alamat */}
              <div>
                <label className="block text-[#00BCD4] font-semibold mb-2">Alamat</label>
                <input
                  type="text"
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#455A64] border border-[#607D8B] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent"
                  placeholder="Masukkan Alamat Anda"
                />
              </div>

              {/* Jaminan */}
              <div>
                <label className="block text-[#00BCD4] font-semibold mb-2">Jaminan</label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="px-4 py-2 bg-[#00BCD4] text-white font-semibold rounded-lg border-2 border-[#00BCD4]"
                  >
                    KTP
                  </button>
                </div>
              </div>

              {/* Upload Foto KTP */}
              <div>
                <label className="block text-[#00BCD4] font-semibold mb-2">Upload Foto KTP</label>
                <label className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#455A64] border border-[#607D8B] rounded-lg text-[#00BCD4] cursor-pointer hover:bg-[#546E7A] transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  <span className="font-semibold">{formData.fotoKTP ? formData.fotoKTP.name : "Upload Foto KTP"}</span>
                  <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                </label>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700 transition flex items-center justify-center gap-2"
                >
                  <span className="text-xl">←</span>
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#00BCD4] text-white font-bold rounded-lg hover:bg-[#00ACC1] transition flex items-center justify-center gap-2"
                >
                  Save & Next
                  <span className="text-xl">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}