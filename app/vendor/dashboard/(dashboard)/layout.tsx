import React from "react"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const menu = [
    { label: "Dashboard", href: "/vendor/dashboard" },
    { label: "Kelola Barang", href: "/vendor/dashboard/kelolabarang" },
    { label: "Pemasukan", href: "/vendor/dashboard/pemasukan" },
    { label: "Info Pesanan", href: "/vendor/dashboard/infopesanan" },
    { label: "Laporan", href: "/vendor/dashboard/laporan" },
    { label: "Ulasan", href: "/vendor/dashboard/ulasan" },
    { label: "Profil", href: "/vendor/dashboard/profil" }
  ]
  
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-80 bg-[#393E46] text-white flex flex-col">
        {/* LOGO */}
        <div className="p-6 border-b border-[#393E46] text-center">
          <div className="w-12 h-12 mx-auto bg-teal-500 rounded-full flex items-center justify-center text-2xl font-bold">
            B
          </div>
          <h1 className="mt-3 text-xl font-semibold">BrowStuff</h1>
        </div>

        {/* MENU */}
        <nav className="flex-1 p-3 space-y-3 text-center">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 rounded-xl cursor-pointer text-base font-medium transition bg-[#003D79] hover:bg-[#00ADB5]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* FOOTER */}
        <div className="p-4 text-sm text-center text-slate-400 border-t border-[#393E46]">
          © 2025 BrowStuff
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 px-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}