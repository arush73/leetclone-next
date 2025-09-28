// src/app/(with-navbar)/layout.js
"use server"
import Navbar from "@/app/components/Navbar";

export default async  function WithNavbarLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
