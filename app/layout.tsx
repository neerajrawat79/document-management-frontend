"use client";
import "../styles/globals.css";
import { AuthProvider, useAuth } from "../context/AuthContext";

function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  if (!user && typeof window !== 'undefined') {
    if (window.location.pathname.startsWith("/dashboard")) {
      window.location.href = "/login";
      return null;
    }
  }

  return <>{children}</>;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <AuthGuard>{children}</AuthGuard>
        </AuthProvider>
      </body>
    </html>
  );
}
