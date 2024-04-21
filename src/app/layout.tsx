import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "@/store/provider";

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
      <Providers>
    <html lang="en">
      <body style={{ fontFamily: montserrat }}>{children}</body>
    </html>
      </Providers>
  );
}
