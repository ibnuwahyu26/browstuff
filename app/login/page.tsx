"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../src/firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Email dan password wajib diisi");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login berhasil");
      router.push("/home");
    } catch (error) {
      alert("Email atau password salah");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-800 via-slate-900 to-black px-4 py-8">
      <div className="w-full max-w-3xl md:h-[520px] bg-slate-700/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* LEFT */}
        <div className="w-full md:w-1/2 bg-[#222831] p-6 flex items-center justify-center">
          <div className="w-full max-w-xs bg-[#393E46] rounded-xl p-6 shadow-xl">
            <h1 className="text-center text-3xl font-bold mb-10">
              <span className="text-[#00ADB5]">LOGIN</span>
            </h1>

            {/* EMAIL */}
            <div className="mb-4">
              <label className="block text-xs text-white mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-transparent border-2 border-white rounded-md text-white text-xs"
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-4">
              <label className="block text-xs text-white mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-transparent border-2 border-white rounded-md text-white text-xs"
              />
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-white text-[#00ADB5] font-bold py-2 rounded-md text-xs disabled:opacity-50"
            >
              {loading ? "Loading..." : "Login"}
            </button>

            <p className="text-center text-xs text-gray-300 mt-4">
              Belum punya akun?{" "}
              <Link href="/signup" className="text-[#00ADB5] font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 bg-[#00ADB5] flex flex-col items-center justify-center text-center p-6">
          <Image src="/OBJECTS.png" alt="Logo" width={80} height={80} />
          <h2 className="text-3xl font-bold text-white mt-4">BrowStuff</h2>
        </div>
      </div>
    </main>
  );
}
