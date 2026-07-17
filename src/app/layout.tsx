import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Book of Kings · Your Daily Mirror",
    template: "%s · Book of Kings",
  },
  description: "A daily ritual of reflection inspired by Persian storytelling.",
  applicationName: "Book of Kings",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Book of Kings",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Book of Kings",
    title: "Book of Kings · Your Daily Mirror",
    description: "A daily ritual of reflection inspired by Persian storytelling.",
  },
  twitter: {
    card: "summary",
    title: "Book of Kings · Your Daily Mirror",
    description: "A daily ritual of reflection inspired by Persian storytelling.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  viewportFit: "cover",
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
