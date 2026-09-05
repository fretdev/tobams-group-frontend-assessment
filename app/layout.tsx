import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tobams Group Frontend Assessment",
  description: "A frontend assessment project developed for Tobams Group.",
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