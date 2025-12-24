export default function NewPage() {
  return (
    <div className="min-h-screen w-full bg-gray-600 flex justify-center py-10 overflow-hidden">
      
      {/* CARD */}
      <div className="w-[900px] h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* HEADER */}
        <div className="bg-[#00ADB5] h-[64px] px-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 rounded-lg flex items-center justify-center">
            <span className="text-white text-xl font-bold">B</span>
          </div>
          <h1 className="text-white text-2xl font-bold">BrowStuff</h1>
        </div>

        {/* BODY */}
        <div className="flex h-[calc(100%-64px)] bg-gray-300">
          
          {/* SIDEBAR */}
          <div className="w-[300px] p-4">
            <div className="bg-[#00ADB5] rounded-3xl p-5 pb-6 shadow-lg relative h-full">

              {/* Edit Button */}
              <button className="absolute -top-2 left-5 w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow hover:bg-cyan-600 text-sm">
                ✎
              </button>

              {/* Avatar */}
              <div className="flex justify-center -mt-7 mb-3">
                <div className="w-24 h-24 bg-gray-400 rounded-full border-4 border-cyan-500 flex items-center justify-center shadow">
                  <svg
                    className="w-12 h-12 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
              </div>

              <p className="text-white text-center text-xs mb-1">
                @jerichooyee
              </p>
              <p className="text-white text-xs">Hello,</p>
              <h2 className="text-white text-lg font-bold mb-4">
                Jericho Pratama
              </h2>

              {/* MENU */}
              <div className="space-y-2 flex flex-col items-end">
                {[
                  "Mulai buka toko",
                  "Settings",
                  "Notifikasi",
                  "Pesanan",
                  "Review",
                ].map((item) => (
                  <button
                    key={item}
                    className="w-full ml-3.5 bg-gray-200 hover:bg-gray-100 text-black font-semibold py-2 px-3 rounded-l-full rounded-r-none text-left shadow text-xs"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="flex-1 p-6">
            <h2 className="text-3xl font-black text-black mb-5">
              Profile
            </h2>

            <div className="space-y-4 max-w-[460px] text-black">
              {[
                { label: "Name", value: "Jericho Pratama" },
                { label: "Username", value: "Jerichooyee" },
                { label: "Email", value: "JerichoPratama@gmail.com" },
                { label: "No Handphone", value: "08xxxxxxxxxxx" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block font-semibold mb-1 text-xs">
                    {field.label}
                  </label>
                  <input
                    readOnly
                    value={field.value}
                    className="w-full px-3 py-2 border-2 border-gray-900 rounded-lg font-medium shadow text-xs bg-white"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
