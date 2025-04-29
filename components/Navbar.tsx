"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();
  return (
    <nav className="bg-gray-200 p-4 flex justify-between">
      <div>
        <Link href="/dashboard" className="mr-4">Dashboard</Link>
        <Link href="/dashboard/users" className="mr-4">Users</Link>
        <Link href="/dashboard/documents" className="mr-4">Documents</Link>
        <Link href="/dashboard/ingestion" className="mr-4">Ingestion</Link>
        <Link href="/dashboard/qa">Q&A</Link>
      </div>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}