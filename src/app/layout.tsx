import type { Metadata } from "next";
import "./globals.css";

const montserrat = "Montserrat Alternates, sans-serif";

export const metadata: Metadata = {
  title: "inner-xr",
  description: "inner-XR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: montserrat }}>{children}</body>
    </html>
  );
}
