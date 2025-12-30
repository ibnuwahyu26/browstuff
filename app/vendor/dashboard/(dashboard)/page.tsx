import {Store} from "lucide-react"

export default function DashboardPage() {
  const chartData = [
    { label: "Sen", value: 60 },
    { label: "Sel", value: 110 },
    { label: "Rab", value: 75 },
    { label: "Kam", value: 50 },
    { label: "Jum", value: 70 },
    { label: "Sab", value: 90 },
    { label: "Min", value: 65 },
  ]

  return (
    <>
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

      {/* ================= MAIN CONTENT ================= */}
      <div className="space-y-8">

        {/* STAT CARDS */}
        <div className="grid grid-cols-4 gap-6 text-center">
          {[
            { title: "Total Barang", value: 120 },
            { title: "Barang Tersedia", value: 85 },
            { title: "Barang Disewa", value: 35 },
            { title: "Pesanan Baru", value: 5 },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#00ADB5]  text-white p-6 rounded-2xl shadow-lg "
            >
              <p className="text-sm">{item.title}</p>
              <h3 className="text-3xl font-bold mt-2">{item.value}</h3>
            </div>
          ))}
        </div>

        {/* CHART */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-6">
            Grafik Peminjaman Barang
          </h3>

          <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-xl p-6 relative">

            {/* Y AXIS */}
            <div className="absolute left-3 top-6 flex flex-col justify-between h-56 text-white text-xs">
              {[120, 100, 80, 60, 40, 20].map((val) => (
                <span key={val}>{val}</span>
              ))}
            </div>

            {/* BAR */}
            <div className="flex items-end justify-around h-64 border-b border-gray-600 ml-10">
              {chartData.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-end h-full w-16"
                >
                  <div
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-900 rounded-t-lg transition-all hover:opacity-80"
                    style={{ height: `${(data.value / 120) * 100}%` }}
                  />
                </div>
              ))}
            </div>

            {/* X AXIS */}
            <div className="flex justify-around mt-4 text-white text-sm ml-10">
              {chartData.map((data) => (
                <span key={data.label}>{data.label}</span>
              ))}
            </div>
          </div>
        </div>

        {/* PESANAN TERBARU */}
        <div className="bg-white rounded-2xl p-6 text-black shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Pesanan Terbaru</h3>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">ID Order</th>
                <th className="py-2">Nama</th>
                <th className="py-2">Barang</th>
                <th className="py-2">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {[
                { id: "ORD-83", penyewa: "Andi Pratama", barang: "Camera SONY" },
                { id: "ORD-84", penyewa: "Budi Santoso", barang: "Handy Talkie" },
                { id: "ORD-85", penyewa: "Citra Lestari", barang: "Audio Mixer" },
                { id: "ORD-86", penyewa: "Dewi Anggraini", barang: "Lampu Sorot" },
                { id: "ORD-87", penyewa: "Eko Saputra", barang: "Mic Wireless" },
              ].map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-2 font-medium">{order.id}</td>
                  <td className="py-2">{order.penyewa}</td>
                  <td className="py-2">{order.barang}</td>
                  <td className="py-2">
                    <button className="px-3 py-1 bg-[#D9D9D9] text-black rounded-full text-xs hover:bg-teal-600 hover:text-white">
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}
