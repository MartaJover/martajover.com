import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marta Jover — Front-End Developer • UX/UI Designer",
  description:
    "Portfolio y CV online de Marta Jover. Front-End Developer y UX/UI Designer. Proyectos, experiencia, skills y contacto.",
  metadataBase: new URL("https://martajover.com"),
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${montserrat.variable} antialiased bg-white text-black`}>
        <Navbar />
        <main className="!text-black">
          {children}
        </main>
      </body>
    </html>
  );
}
