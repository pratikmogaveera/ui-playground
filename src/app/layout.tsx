import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI Playground",
  description:
    "A playground for trying UI packages, libraries, ideas, and layouts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
