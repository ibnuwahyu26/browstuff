"use client"

export default function ProfileTokoPage() {
  return (
    <div className="space-y-8">

      {/* ================= HEADER ================= */}
      <div className="mt-5 mb-8 -ml-8">
        <div className="bg-[#00ADB5] rounded-r-3xl px-9 py-6 flex items-center justify-between max-w-xl h-[110px]">
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

      {/* ================= CONTENT ================= */}
      <div className="bg-[#00ADB5] px-8 pb-10 rounded-2xl text-black">
        <h1 className="text-3xl font-semibold my-7 text-white">Profile Toko</h1>

        <div className="grid grid-cols-3 gap-6">

          {/* ===== INFORMASI TOKO ===== */}
          <div className="col-span-2 bg-white rounded-xl p-6 border-4 border-black">
            <h2 className="text-xl font-semibold mb-4">Informasi Toko</h2>

            <div className="space-y-3">
              {[
                "Nama Toko",
                "Pemilik",
                "Email",
                "No Telepon",
                "Alamat",
                "Deskripsi",
              ].map((label) => (
                <div key={label} className="flex flex-col gap-1">
                  <label className="text-sm font-medium">{label}</label>
                  <input
                    type="text"
                    className="w-full border border-black px-3 py-2"
                  />
                </div>
              ))}
            </div>

            <button className="mt-4 w-full bg-gray-300 border border-black py-2">
              Edit Profil
            </button>
          </div>

          {/* ===== DETAIL OPERASIONAL ===== */}
          <div className="bg-white rounded-xl p-6 border-4 border-black">
            <h2 className="text-xl font-semibold mb-4">
              Detail Operasional
            </h2>

            <div className="space-y-3">
              {[
                "Jam Operasional",
                "Status Toko",
                "Metode Pembayaran",
                "Kebijakan Sewa",
                "Sistem Pengambilan Barang",
              ].map((label) => (
                <div key={label} className="flex flex-col gap-1">
                  <label className="text-sm font-medium">{label}</label>
                  <input
                    type="text"
                    className="w-full border border-black px-3 py-2"
                  />
                </div>
              ))}
            </div>

            <button className="mt-4 w-full bg-gray-300 border border-black py-2">
              Edit
            </button>
          </div>

          {/* ===== DAFTAR BARANG ===== */}
         {/* ===== DAFTAR BARANG ===== */}
<div className="col-span-2 bg-white rounded-xl p-6 border-4 border-black">
  <h2 className="text-xl font-semibold mb-4">
    Daftar Barang (Preview)
  </h2>

  <table className="w-full border-4 border-black text-center">
    {/* HEADER */}
    <thead className="bg-gray-200">
      <tr>
        {["No", "Nama Barang", "Kategori", "Harga", "Stok", "Status"].map(
          (h) => (
            <th
              key={h}
              className="border-2 border-black px-3 py-2 font-medium"
            >
              {h}
            </th>
          )
        )}
      </tr>
    </thead>

    {/* BODY */}
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
          <td className="border-2 border-black py-3">
            <span className="bg-gray-200 px-3 py-1 rounded-md">
              {i + 1}
            </span>
          </td>

          {/* NAMA */}
          <td className="border-2 border-black py-3">
            <span className="bg-[#BFEFF1] px-4 py-2 rounded-xl inline-block">
              {item[0]}
            </span>
          </td>

          {/* KATEGORI */}
          <td className="border-2 border-black py-3">
            <span className="bg-[#BFEFF1] px-4 py-2 rounded-xl inline-block">
              {item[1]}
            </span>
          </td>

          {/* HARGA */}
          <td className="border-2 border-black py-3">
            <span className="bg-[#BFEFF1] px-4 py-2 rounded-xl inline-block">
              {item[2]}
            </span>
          </td>

          {/* STOK */}
          <td className="border-2 border-black py-3">
            <span className="bg-[#BFEFF1] px-4 py-2 rounded-xl inline-block">
              {item[3]}
            </span>
          </td>

          {/* STATUS */}
          <td className="border-2 border-black py-3">
            <div className="flex justify-center">
              <select className="bg-white border-2 border-black px-4 py-2 pr-8 font-medium">
                <option>Status</option>
                <option>Tersedia</option>
                <option>Disewa</option>
                <option>Nonaktif</option>
              </select>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

          {/* ===== STATISTIK TOKO ===== */}
          <div className="bg-white rounded-xl p-6 border-4 border-black">
            <h2 className="text-xl font-semibold mb-4">Statistik Toko</h2>

            <div className="space-y-3">
              {[
                "Total Barang",
                "Total Penyewaan",
                "Aktif Disewa",
                "Penyewaan Selesai",
                "Pendapatan Total",
                "Rating",
              ].map((label) => (
                <div key={label} className="flex flex-col gap-1">
                  <label className="text-sm font-medium">{label}</label>
                  <input
                    type="text"
                    className="w-full border border-black px-3 py-2"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
