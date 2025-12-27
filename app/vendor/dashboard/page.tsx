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
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex items-center justify-between bg-teal-500 text-white p-6 rounded-2xl">
        <div>
          <p className="text-lg">Halo Partner,</p>
          <h2 className="text-2xl font-bold">
            HIMTI PARAMADINA RENT
          </h2>
        </div>
        <div className="w-12 h-12 bg-white rounded-full" />
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-4 gap-6">
        {[
          { title: "Total Barang", value: 120 },
          { title: "Barang Tersedia", value: 85 },
          { title: "Barang Disewa", value: 35 },
          { title: "Pesanan Baru", value: 5 },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-teal-500 text-white p-6 rounded-2xl shadow-lg"
          >
            <p className="text-sm">{item.title}</p>
            <h3 className="text-3xl font-bold mt-2">{item.value}</h3>
          </div>
        ))}
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-3 gap-6">

        {/* CHART */}
        <div className="col-span-2 bg-white rounded-2xl p-6 shadow-lg relative">
          <h3 className="text-2xl font-bold mb-6">
            Grafik Peminjaman Barang
          </h3>

          <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-xl p-6 relative">
            
            {/* Y AXIS */}
            <div className="absolute left-3 top-6 flex flex-col justify-between h-56 text-white text-xs">
              {[120, 100, 80, 60, 40, 20].map((val, i) => (
                <span key={i}>{val}</span>
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
                    style={{
                      height: `${(data.value / 120) * 100}%`,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* X AXIS */}
            <div className="flex justify-around mt-4 text-white text-sm ml-10">
              {chartData.map((data, index) => (
                <span key={index}>{data.label}</span>
              ))}
            </div>
          </div>
        </div>

        {/* PESANAN TERBARU */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Pesanan Terbaru
          </h3>

          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th>ID Order</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {[
                "ORD-83",
                "ORD-84",
                "ORD-85",
                "ORD-86",
                "ORD-87",
                "ORD-88",
              ].map((id) => (
                <tr key={id} className="border-b">
                  <td className="py-2">{id}</td>
                  <td>
                    <button className="px-3 py-1 bg-teal-500 text-white rounded-full text-xs hover:bg-teal-600">
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}
