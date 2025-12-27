import React from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-800 text-white flex flex-col">
        {/* LOGO */}
        <div className="p-6 border-b border-slate-700 text-center">
          <div className="w-12 h-12 mx-auto bg-teal-500 rounded-full flex items-center justify-center text-2xl font-bold">
            B
          </div>
          <h1 className="mt-3 text-xl font-semibold">BrowStuff</h1>
        </div>

        {/* MENU */}
        <nav className="flex-1 p-4 space-y-3">
          {[
            "Dashboard",
            "Kelola Barang",
            "Pemasukan",
            "Info Pesanan",
            "Laporan",
            "Ulasan",
          ].map((item, index) => (
            <div
              key={index}
              className={`px-4 py-3 rounded-xl cursor-pointer text-base font-medium transition
                ${
                  item === "Dashboard"
                    ? "bg-teal-500 text-white"
                    : "bg-blue-900 hover:bg-blue-800"
                }`}
            >
              {item}
            </div>
          ))}
        </nav>

        {/* FOOTER */}
        <div className="p-4 text-sm text-center text-slate-400 border-t border-slate-700">
          © 2025 BrowStuff
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
