"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { auth, db } from "../src/firebase";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // 👈 modal state

  const router = useRouter();

  const handleRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      alert("Semua field wajib diisi");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password tidak sama");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        username,
        email,
        role: "user",
        createdAt: new Date(),
      });

      // 🔥 JANGAN redirect langsung
      setSuccess(true);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Registrasi gagal");
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
            <h1 className="text-center text-3xl font-bold mb-6">
              <span className="text-[#00ADB5]">SIGN UP</span>
            </h1>

            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mb-2 px-3 py-2 bg-transparent border-2 border-white rounded-md text-white text-xs"
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-2 px-3 py-2 bg-transparent border-2 border-white rounded-md text-white text-xs"
            />

            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-2 px-3 py-2 bg-transparent border-2 border-white rounded-md text-white text-xs"
            />

            <input
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mb-4 px-3 py-2 bg-transparent border-2 border-white rounded-md text-white text-xs"
            />

            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full bg-white text-[#00ADB5] font-bold py-2 rounded-md text-xs disabled:opacity-50"
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>

            <p className="text-center text-xs text-gray-300 mt-4">
              Sudah punya akun?{" "}
              <Link href="/login" className="text-[#00ADB5] font-semibold">
                Login
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

      {/* ✅ SUCCESS MODAL */}
      {success && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 text-center w-[300px]">
            <h2 className="text-xl font-bold mb-2 text-green-600">
              Registrasi Berhasil 🎉
            </h2>
            <p className="text-sm mb-4">Akun berhasil dibuat, silakan login.</p>
            <button
              onClick={() => router.replace("/login")}
              className="w-full bg-[#00ADB5] text-white py-2 rounded-md"
            >
              Login Sekarang
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
