// src/hooks/useAuth.js
import { useState } from "react";

// Simple example auth hook (you can later connect it to real auth logic)
export function useAuth() {
  // Replace with real authentication state (maybe from context or localStorage)
  const [user] = useState(() => {
    return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  });

  return { user, isAuthenticated: !!user };
}
