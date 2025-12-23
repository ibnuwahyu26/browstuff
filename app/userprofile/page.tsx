export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-8">
      <div className="w-[1200px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-cyan-500 px-8 py-5 flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white text-3xl font-bold">B</span>
          </div>
          <h1 className="text-white text-5xl font-bold tracking-wide">BrowStuff</h1>
        </div>

        <div className="flex bg-gray-300">
          {/* Sidebar */}
          <div className="w-[450px] bg-gray-300 p-6 relative">
            {/* Profile Card */}
            <div className="bg-cyan-500 rounded-[2.5rem] p-8 pb-10 relative shadow-xl">
              {/* Edit Icon - Positioned outside card */}
              <button className="absolute -top-3 left-8 w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center hover:bg-cyan-600 transition shadow-lg z-10">
                <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>

              {/* Profile Picture - Overlapping top */}
              <div className="flex justify-center -mt-16 mb-6">
                <div className="w-40 h-40 bg-gray-400 rounded-full flex items-center justify-center shadow-2xl border-8 border-cyan-500">
                  <svg className="w-24 h-24 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Username */}
              <p className="text-white text-center text-lg mb-6">@jerichooyee</p>
              
              {/* Greeting */}
              <p className="text-white text-base mb-1 ml-1">Hello,</p>
              <h2 className="text-white text-4xl font-bold mb-8 ml-1">Jericho Pratama</h2>

              {/* Menu Items */}
              <div className="space-y-3">
                <button className="w-full bg-gray-200 hover:bg-gray-100 text-gray-900 font-bold py-4 px-6 rounded-full text-left transition shadow-md text-lg">
                  Mulai buka toko
                </button>
                <button className="w-full bg-gray-200 hover:bg-gray-100 text-gray-900 font-bold py-4 px-6 rounded-full text-left transition shadow-md text-lg">
                  Settings
                </button>
                <button className="w-full bg-gray-200 hover:bg-gray-100 text-gray-900 font-bold py-4 px-6 rounded-full text-left transition shadow-md text-lg">
                  Notifikasi
                </button>
                <button className="w-full bg-gray-200 hover:bg-gray-100 text-gray-900 font-bold py-4 px-6 rounded-full text-left transition shadow-md text-lg">
                  Pesanan
                </button>
                <button className="w-full bg-gray-200 hover:bg-gray-100 text-gray-900 font-bold py-4 px-6 rounded-full text-left transition shadow-md text-lg">
                  Review
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-gray-300 p-10 pt-8">
            <h2 className="text-6xl font-black text-gray-900 mb-10" style={{letterSpacing: '-0.02em'}}>Profile</h2>

            <div className="space-y-6 pr-8">
              {/* Name Field */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">Name</label>
                <input
                  type="text"
                  value="Jericho Pratama"
                  readOnly
                  className="w-full px-5 py-4 border-[3px] border-gray-900 rounded-2xl bg-white text-gray-900 font-semibold text-lg shadow-md"
                />
              </div>

              {/* Username Field */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">UserName</label>
                <input
                  type="text"
                  value="Jerichooyee"
                  readOnly
                  className="w-full px-5 py-4 border-[3px] border-gray-900 rounded-2xl bg-white text-gray-900 font-semibold text-lg shadow-md"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">Email</label>
                <input
                  type="email"
                  value="JerichoPratama@gmail.com"
                  readOnly
                  className="w-full px-5 py-4 border-[3px] border-gray-900 rounded-2xl bg-white text-gray-900 font-semibold text-lg shadow-md"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label className="block text-gray-900 font-bold mb-2 text-lg">No Handphone</label>
                <input
                  type="tel"
                  value="08xxxxxxxxxxx"
                  readOnly
                  className="w-full px-5 py-4 border-[3px] border-gray-900 rounded-2xl bg-white text-gray-900 font-semibold text-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}