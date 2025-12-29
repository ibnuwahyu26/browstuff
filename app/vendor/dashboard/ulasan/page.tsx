"use client"

import { useState } from "react"

export default function UlasanPage() {
  const [activeTab, setActiveTab] = useState("all")
  const reviews = Array.from({ length: 7 })

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

      {/* TITLE */}
      <div className="flex justify-between items-center text-black">
        <h1 className="text-3xl font-bold">Reviews</h1>
        <div className="flex gap-4 text-sm">
          <button>Filter</button>
          <button>Reload</button>
        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="inline-flex bg-gray-200 rounded-full overflow-hidden text-sm text-black border-2 border-black">
        {["all", "publish", "deleted"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 font-semibold transition-all duration-200 ${
              activeTab === tab
                ? "bg-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {tab === "all"
              ? "All Reviews"
              : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* ================= LIST REVIEWS ================= */}
      <div className="space-y-3 border-t pt-4 text-black">
        {reviews.map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-[180px_220px_1fr] gap-2 border-b pb-4"
          >
            <div className="text-sm">
              <p>10/12/2025</p>
              <p className="font-semibold">12.00 PM</p>
            </div>

            <div className="text-sm">
              <p className="font-semibold">#C01234</p>
              <p>Jericho Pratama</p>
            </div>

            <div className="text-sm">
              <p className="font-semibold">Ramah Service</p>
              <p>4.5 ★★★★☆</p>
              <p className="text-gray-600">
                Pelayanannya bagus ramah dan tidak mengecewakan 
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
