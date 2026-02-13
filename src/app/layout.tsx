import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "@/store/Provider";

const montserrat = "Montserrat Alternates, sans-serif";

export const metadata: Metadata = {
  title: "Joel Pradhan — Full-Stack Developer",
  description: "Full-Stack Developer & Marketing Automation Expert. 10+ years building production websites and web apps.",
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
