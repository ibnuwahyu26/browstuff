"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function TambahBarangPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#00ADB5] px-8 py-6 text-white">

      {/* HEADER (TETAP) */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-full px-8 py-4 mb-6 flex items-center gap-4 max-w-2xl">
        <div className="border-[1.5px] border-white rounded-md p-1 flex items-center justify-center">
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
        <h1 className="text-xl font-semibold">Form Tambah Barang</h1>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT */}
        <div className="col-span-5 bg-slate-900 rounded-xl p-5 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Info Barang</h2>

          {/* PREVIEW */}
          <div className="bg-white rounded-lg p-4 flex gap-4 text-black mb-4">
            <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📷</span>
            </div>
            <div className="text-sm">
              <h3 className="text-lg font-semibold">Camera</h3>
              <p className="text-gray-500">Kategori</p>
              <p className="mt-1 font-medium">Rp 0 / hari</p>
              <p className="mt-2 text-green-600">● Tersedia</p>
            </div>
          </div>

          {/* UPLOAD */}
          <div className="mb-4 text-sm">
            <label className="block mb-1">Upload Foto</label>
            <div className="border-2 border-dashed border-gray-500 rounded-lg p-6 text-center text-gray-300">
              <p className="mb-1">🖼 Upload / Drag</p>
              <p className="text-xs">Max 3 foto (JPG / PNG)</p>
            </div>
          </div>

          {/* DESC */}
          <div className="text-sm">
            <label className="block mb-1">Deskripsi Barang</label>
            <textarea
              rows={3}
              className="w-full rounded-lg bg-slate-800 border border-gray-500 p-3 focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-7 bg-slate-900 rounded-xl p-6 shadow-lg">
          <div className="space-y-4 text-sm">

            <div>
              <label className="block mb-1">Nama Barang</label>
              <input className="w-full rounded-md bg-slate-800 border border-gray-500 px-3 py-2 focus:ring-2 focus:ring-[#00ADB5] outline-none" />
            </div>

            <div>
              <label className="block mb-1">Kategori</label>
              <select className="w-full rounded-md bg-slate-800 border border-gray-500 px-3 py-2">
                <option>Pilih Kategori</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Harga / Hari</label>
              <div className="flex items-center bg-slate-800 border border-gray-500 rounded-md">
                <span className="px-3">Rp</span>
                <input className="flex-1 bg-transparent px-2 py-2 outline-none" />
              </div>
            </div>

            <div>
              <label className="block mb-1">Jumlah Stok</label>
              <input
                type="number"
                className="w-full rounded-md bg-slate-800 border border-gray-500 px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1">Syarat & Ketentuan</label>
              <textarea
                rows={2}
                className="w-full rounded-md bg-slate-800 border border-gray-500 px-3 py-2"
              />
            </div>

            {/* ACTION */}
            <div className="flex justify-end gap-3 pt-2">
              <Link href="/vendor/dashboard/kelolabarang">
                <button className="bg-gray-300 text-black px-5 py-2 rounded-md text-sm">
                  Cancel
                </button>
              </Link>

              <button
                onClick={() => {
                  alert("Barang berhasil diajukan untuk verifikasi")
                  router.push("/vendor/dashboard/kelolabarang")
                }}
                className="bg-[#00ADB5] px-5 py-2 rounded-md text-sm font-medium"
              >
                Verifikasi
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}