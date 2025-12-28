export default function PemasukanPage() {
    const chartData = [
  { label: "Sen", value: 150_000 },
  { label: "Sel", value: 320_000 },
  { label: "Rab", value: 210_000 },
  { label: "Kam", value: 110_000 },
  { label: "Jum", value: 190_000 },
  { label: "Sab", value: 260_000 },
  { label: "Min", value: 180_000 },
]

const maxValue = 400_000
  return (
    <div className="space-y-8">

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
            <span className="text-2xl">🏪</span>
          </div>
        </div>
      </div>


      {/* TOP CARDS */}
      <div className="grid grid-cols-2 gap-6">
        {/* TOTAL TRANSAKSI */}
        <div className="bg-white rounded-2xl p-6 shadow-lg flex items-center gap-6 text-black">
          <div className="w-14 h-14 border-2 border-black rounded-xl flex items-center justify-center text-2xl">
            📄
          </div>
          <div>
            <p className="text-xl font-semibold">Total Transaksi</p>
            <h2 className="text-5xl font-bold mt-2">254</h2>
          </div>
        </div>

        {/* PRODUK SERING DISEWA */}
        <div className="bg-white rounded-2xl p-6 shadow-lg grid grid-cols-2 gap-4 text-black">
          <div>
            <p className="font-semibold mb-4">Produk sering disewa</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-400 rounded"></span>Kamera
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-500 rounded"></span>Tripod
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-pink-400 rounded"></span>Proyektor
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-sky-400 rounded"></span>Drone
              </li>
            </ul>
          </div>

          {/* DONUT PLACEHOLDER */}
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-[14px] border-purple-400 relative">
              <div className="absolute inset-2 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* CHART */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-black">Pendapatan Sewa</h3>
          <div className="bg-gray-800 rounded-full p-1 flex text-sm">
            <button className="px-4 py-1 bg-[#00ADB5] text-white rounded-full">
              Harian
            </button>
            <button className="px-4 py-1 text-white">Bulanan</button>
          </div>
        </div>

      <div className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-xl p-6 relative">

  {/* Y AXIS (UANG) */}
  <div className="absolute left-2 top-6 flex flex-col justify-between h-56 text-white text-xs">
    {[400, 300, 200, 100, 10].map((val) => (
      <span key={val}>Rp {val}k</span>
    ))}
  </div>

  {/* BAR */}
  <div className="flex items-end justify-around h-56 border-b border-gray-600 ml-12">
    {chartData.map((data, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-end h-full w-10"
      >
        <div
          className="w-full bg-gradient-to-t from-blue-600 to-blue-900 rounded-t-lg hover:opacity-80 transition-all"
          style={{ height: `${(data.value / maxValue) * 100}%` }}
        />
      </div>
    ))}
  </div>

  {/* X AXIS */}
  <div className="flex justify-around mt-4 text-white text-sm ml-12">
    {chartData.map((data) => (
      <span key={data.label}>{data.label}</span>
    ))}
  </div>
</div>
      </div>

    </div>
  )
}
