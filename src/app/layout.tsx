import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Book of Kings · Your Daily Mirror",
  description: "A daily ritual of reflection inspired by Persian storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
