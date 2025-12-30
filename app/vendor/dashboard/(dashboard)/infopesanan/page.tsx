"use client"

import { Store } from "lucide-react"
import Image from "next/image"

const orders = Array.from({ length: 8 }, () => ({
  id: "#08576",
  name: "Jericho Pratama",
  type: "COD",
  status: "paid",
  total: "Rp. 550.000",
  date: "8-10 Desember 2025",
}))

export default function InfoPesananPage() {
  return (
    <div className="w-full">

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

      {/* ================= CONTENT ================= */}
      <div className="px-6">
        <h1 className="text-2xl font-bold mb-4 text-black">Pesanan</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm text-black">
            <thead>
              <tr className="border-b">
                <th className="py-2 w-8"></th>
                <th className="py-2 text-left">id Order</th>
                <th className="py-2 text-left">Nama</th>
                <th className="py-2 text-left">Type</th>
                <th className="py-2 text-left">Status</th>
                <th className="py-2 text-left">Product</th>
                <th className="py-2 text-left">Total</th>
                <th className="py-2 text-left">Tanggal Sewa</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, i) => (
                <tr
                  key={i}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="py-2">
                    <input
                      type="checkbox"
                      className="w-3.5 h-3.5 accent-[#00ADB5]"
                    />
                  </td>

                  <td className="py-2 font-medium">{order.id}</td>
                  <td className="py-2">{order.name}</td>
                  <td className="py-2">{order.type}</td>

                  <td className="py-2 text-green-600 font-medium flex items-center gap-1">
                    ✓ {order.status}
                  </td>

                  <td className="py-2">
                    <div className="flex items-center gap-2">
                      <Image src="/camera.png" alt="" width={26} height={26} />
                      <Image src="/ht.png" alt="" width={14} height={26} />
                    </div>
                  </td>

                  <td className="py-2">{order.total}</td>
                  <td className="py-2">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
