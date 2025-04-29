"use client";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthForm({ type }: { type: "login" | "signup" }) {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    login({ email, role: "admin" });
    router.push("/dashboard");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">{type === "login" ? "Login" : "Signup"}</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border w-full p-2 mb-2" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border w-full p-2 mb-2" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 w-full">
        {type === "login" ? "Login" : "Signup"}
      </button>
    </div>
  );
}