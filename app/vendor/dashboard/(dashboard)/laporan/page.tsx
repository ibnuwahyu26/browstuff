import { Store, Search} from "lucide-react"

export default function LaporanPage() {
  return (
    <div className="space-y-6">

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
            <Store size={28} className="text-black" />
          </div> 
        </div>
      </div>

      {/* FILTER */}
      <div className="flex items-center gap-4 text-black font-poppins">
        <div className="border-2 border-black flex items-center bg-[#D9D9D9] rounded-full px-4 py-2 w-90 gap-2">
         <input
         placeholder="Search"
         className="bg-transparent outline-none flex-1 text-sm"/>
         <Search size={18} className="text-black opacity-70" />
        </div>

        <select className="px-4 py-2 bg-[#D9D9D9] rounded">
          <option>Jenis Laporan</option>
        </select>

        <select className="px-4 py-2 bg-[#D9D9D9]  rounded">
          <option>Status</option>
        </select>
      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-3 bg-[#D9D9D9] text-black rounded-xl overflow-hidden text-center font-semibold">
        <div className="py-3">Total Laporan: 13</div>
        <div className="py-3 border-x">Belum Diproses: 5</div>
        <div className="py-3">Selesai: 8</div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl overflow-hidden text-black">
        <table className="w-full text-sm">
          <thead className="border-b font-semibold">
            <tr>
              <th className="py-3">id Laporan</th>
              <th>id Order</th>
              <th>User</th>
              <th>Jenis Laporan</th>
              <th>Tanggal</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 7 }).map((_, i) => (
              <tr key={i} className="border-b text-center">
                <td className="py-3">#08324</td>
                <td>#08576</td>
                <td>Jericho Pratama</td>
                <td>Barang Rusak</td>
                <td>22/12/2025</td>
                <td>
                  <button className="px-4 py-1 bg-gray-300 rounded-full">
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
