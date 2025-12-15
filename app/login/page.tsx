import Image from "next/image";
import Link from "next/link";


export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-800 via-slate-900 to-black px-4 py-8">
      
      {/* LANDSCAPE CONTAINER (FIX SIZE) */}
      <div className="w-full max-w-3xl h-auto md:h-[520px] bg-slate-700/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* ================= LEFT SIDE - LOGIN FORM ================= */}
        <div className="w-full md:w-1/2 bg-[#222831] p-6 flex items-center justify-center">
          <div className="w-full max-w-xs bg-[#393E46] rounded-xl p-6 shadow-xl">
            
            {/* TITLE */}
            <h1 className="text-center text-3xl font-bold drop-shadow-[1px_4px_0px_#772B8B] mb-10">
              <span className="text-[#00ADB5]">LOGIN</span>
            </h1>

            {/* EMAIL */}
            <div className="mb-4">
              <label className="block text-xs text-white mb-1">Email</label>
              <div className="flex items-center border-2 border-white rounded-md focus-within:border-cyan-400">
                <span className="px-2 text-white text-xs">✉</span>
                <input
                  type="email"
                  className="w-full px-2 py-1.5 bg-transparent text-white text-xs focus:outline-none"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="mb-1">
              <label className="block text-xs text-white mb-1">Password</label>
              <div className="flex items-center border-2 border-white rounded-md focus-within:border-cyan-400">
                <span className="px-2 text-white text-xs">🔒</span>
                <input
                  type="password"
                  className="w-full px-2 py-1.5 bg-transparent text-white text-xs focus:outline-none"
                />
                <button className="px-2 text-white hover:text-cyan-400 text-xs">
                  👁
                </button>
              </div>
            </div>

            {/* FORGOT PASSWORD */}
            <div className="text-right mb-4">
              <a className="text-xs text-[#00ADB5] hover:underline cursor-pointer">
                Forget Password?
              </a>
            </div>

            {/* LOGIN BUTTON */}
            <button className="w-full bg-white hover:bg-gray-100 text-[#00ADB5] font-bold py-2 rounded-md mb-3 text-xs">
              Login
            </button>

            {/* SIGN UP */}
            <p className="text-center text-xs text-gray-300 mb-4">
              Dont have any account?{" "}
              <a href="/signup" className="text-[#00ADB5] font-semibold hover:underline">
                Sign Up
              </a>
            </p>

            {/* DIVIDER */}
            <div className="text-center text-gray-400 text-xs mb-3">
              Or Login With
            </div>

            {/* GOOGLE LOGIN */}
            <div className="flex justify-center">
              <button className="w-10 h-10 hover:bg-slate-500 rounded-md flex items-center justify-center border-2 border-slate-500">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE - BRANDING ================= */}
        <div className="w-full md:w-1/2 bg-[#00ADB5] flex flex-col items-center justify-center text-center p-6">

          {/* LOGO */}
          <div className="mb-3">
            <Image
              src="/OBJECTS.png"
              alt="Logo"
              width={70}
              height={70}
              priority
              className="rounded-xl md:w-[90px] md:h-[90px]"
            />
          </div>

          {/* TITLE */}
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            BrowStuff
          </h2>

          {/* SUBTITLE */}
          <p className="text-base md:text-lg text-black font-bold mb-1">
            Login your Account
          </p>

          {/* DESCRIPTION */}
          <p className="text-xs md:text-sm text-white font-medium">
            Ayo Memulai menyewa
            <br />
            barang di kami
          </p>

        </div>

      </div>
    </main>
  );
}
