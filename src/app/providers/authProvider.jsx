"use client";
import { useEffect } from "react";
import { useAuthStore } from "@/app/store/useAuthStore";

export default function AuthProvider({ children }) {
  const { checkUser } = useAuthStore();

  useEffect(() => {
    checkUser(); // App load hote hi fire
  }, [checkUser]);

  return children;
}
