"use client";

import { useQuery } from "@tanstack/react-query";

export function useMe(token) {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to fetch user");

      return res.json();
    },
    enabled: !!token, // hanya fetch kalau token tersedia
  });
}
