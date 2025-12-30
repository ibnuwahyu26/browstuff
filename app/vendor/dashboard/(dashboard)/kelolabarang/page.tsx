"use client"
import Link from "next/link"
import { Pencil, Trash2, Store} from "lucide-react"

export default function KelolaBarangPage() {
  return (
    <div className="space-y-6 text-black">

       {/* ================= HEADER (DI LUAR CONTAINER) ================= */}
      <div className="mt-5 mb-8 -ml-8">
        <div className="bg-[#00ADB5] rounded-r-3xl rounded-l-none px-9 py-6 flex items-center justify-between max-w-xl h-[110px]">
          <div className="border-3 border-black rounded-xl px-6 py-3 w-[400px]">
            <p className="text-white text-sm">Hello Partners,</p>
            <h2 className="text-white text-xl font-bold">
              HIMTI PARAMADINA RENT
            </h2>
          </div>

          <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center">
          <Store size={28} className="text-black" /></div>
        </div>
      </div>

      {/* ================= ACTION ================= */}
      <div className="mb-6">
      <Link href="/vendor/dashboard/kelolabarang/tambahbarang">
        <button className="bg-[#00ADB5] text-white px-8 py-2 rounded-xl text-lg font-medium">
          + Tambah Barang
        </button>
      </Link>
    </div>
      {/* ================= TABLE ================= */}
  <table className="w-full text-center text-sm">
    <thead className="bg-gray-300">
      <tr>
        {[
          "No",
          "Nama Barang",
          "Kategori",
          "Harga",
          "Stok",
          "Status",
          "Aksi",
        ].map((h) => (
          <th
            key={h}
            className="border-2 border-black px-3 py-2 font-medium"
          >
            {h}
          </th>
        ))}
      </tr>
    </thead>

    <tbody className="bg-[#7FE1E3]">
      {[
        ["Handy Talkie", "Audio", "90K", "9"],
        ["Mic Wireless", "Audio", "50K", "8"],
        ["Kamera DSLR", "Kamera", "150K", "2"],
        ["Speaker", "Audio", "200K", "2"],
        ["Audio Mixer", "Audio", "250K", "1"],
        ["Lampu Sorot", "Lighting", "220K", "2"],
      ].map((item, i) => (
        <tr key={i} className="border-2 border-black">

          {/* NO */}
          <td className="py-3">
            <span className="bg-gray-200 px-2 py-0.5 rounded-md">
              {i + 1}
            </span>
          </td>

          {/* DATA */}
          {[item[0], item[1], item[2], item[3]].map((val, idx) => (
            <td key={idx} className="py-3">
              <span className="bg-[#BFEFF1] px-3 py-1.5 rounded-lg inline-block">
                {val}
              </span>
            </td>
          ))}

          {/* STATUS */}
          <td className="py-3">
            <select className="bg-[#D9D9D9] border-2 border-black px-3 py-1.5 rounded-md text-sm">
              <option>Status</option>
              <option>Tersedia</option>
              <option>Disewa</option>
              <option>Nonaktif</option>
            </select>
          </td>

          {/* AKSI */}
          <div className="flex justify-center gap-2 py-3">
  <button
    className="bg-[#BFEFF1] p-1.5 rounded-md text-sm hover:bg-[#9fe5e8] transition"
    title="Edit"
  >
    <Pencil size={16} className="text-black" />
  </button>

  <button
    className="bg-[#BFEFF1] p-1.5 rounded-md text-sm hover:bg-red-200 transition"
    title="Hapus"
  >
    <Trash2 size={16} className="text-red-600" />
  </button>
</div>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}
