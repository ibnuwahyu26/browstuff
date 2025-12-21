import Image from "next/image";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#222831] flex items-center justify-center px-4 py-10">
      {/* CARD */}
      <div className="w-full max-w-6xl bg-[#393E46] rounded-2xl shadow-2xl p-8 text-white">

        {/* HEADER */}
        <div className="relative mb-2">
          {/* Registrasi */}
          <h1 className="absolute top-1 left-1 text-4xl font-extrabold text-[#772B8B] select-none">Registration</h1>
          <h1 className="relative text-4xl font-extrabold text-[#00ADB5]">
            Registration
          </h1>
        </div>

        <p className="text-gray-300 mb-8">
          Mulai Jadi Bagian Dari BrowStuff
        </p>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* JENIS USAHA */}
          <div className="space-y-3">
            <label className="font-semibold">Jenis Usaha</label>

            <div className="flex items-center gap-3 border border-white rounded-lg p-3">
              <input type="checkbox" className="accent-cyan-400 w-4 h-4" />
              <span>Perorangan</span>
            </div>

            <div className="flex items-center gap-3 border border-white rounded-lg p-3">
              <input type="checkbox" className="accent-cyan-400 w-4 h-4" />
              <span>Perusahaan</span>
            </div>
          </div>

          {/* NAMA TOKO */}
          <div>
            <label className="font-semibold block mb-2">Nama Toko</label>
            <input
              className="w-full bg-transparent border-2 border-white rounded-md px-3 py-2 focus:outline-none focus:border-cyan-400"
              placeholder="Nama toko"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="font-semibold block mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-transparent border-2 border-white rounded-md px-3 py-2 focus:outline-none focus:border-cyan-400"
              placeholder="Email"
            />
          </div>

          {/* UPLOAD KTP */}
          <div className="md:row-span-3">
            <label className="font-semibold block mb-2">
              Upload Foto KTP
            </label>

            <div className="h-52 border-2 border-dashed border-cyan-400 rounded-xl flex items-center justify-center text-cyan-400 hover:bg-cyan-400/10 transition cursor-pointer">
              <span className="text-5xl">+</span>
            </div>

            <p className="text-xs text-gray-300 mt-2">
              *Contoh Foto KTP
            </p>

            <Image
              src="/contohktp.png"
              alt="Contoh KTP"
              width={200}
              height={120}
              className="mt-2 rounded-md opacity-80"
            />
          </div>

          {/* NIK */}
          <div>
            <label className="font-semibold block mb-2">NIK</label>
            <input
              className="w-full bg-transparent border-2 border-white rounded-md px-3 py-2 focus:outline-none focus:border-cyan-400"
              placeholder="NIK"
            />
          </div>

          {/* NO HP */}
          <div>
            <label className="font-semibold block mb-2">
              No. Handphone
            </label>
            <input
              className="w-full bg-transparent border-2 border-white rounded-md px-3 py-2 focus:outline-none focus:border-cyan-400"
              placeholder="08xxxxxxxxxx"
            />
          </div>

          {/* ALAMAT */}
          <div className="md:col-span-2">
            <label className="font-semibold block mb-2">Alamat</label>
            <textarea
              rows={3}
              className="w-full bg-transparent border-2 border-white rounded-md px-3 py-2 resize-none focus:outline-none focus:border-cyan-400"
              placeholder="Alamat lengkap"
            />
          </div>
        </div>

        {/* ACTION BUTTON */}
        <div className="flex justify-end gap-4 mt-10">
          <button
            type="button"
            className="px-6 py-2 border border-white rounded-md hover:bg-white/10 transition"
          >
            Cancel
          </button>

          <button
            type="button"
            className="px-6 py-2 bg-[#00ADB5] hover:bg-[#058A90] rounded-md font-semibold transition"
          >
            Submit & Next
          </button>
        </div>

      </div>
    </main>
  );
}
