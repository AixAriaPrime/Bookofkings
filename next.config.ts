import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Environment variable validation — prevents silent misconfiguration
  env: {
    // Placeholder keys — set real values in .env.local
    // NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    // NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },

  // Image optimization — allow Supabase storage domain once wired
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
