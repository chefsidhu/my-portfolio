import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhi Sidhu | Full Stack Developer Portfolio",
  description: "Full Stack Developer Portfolio showcasing my projects and skills",
  keywords: ["Full Stack Developer", "Web Development", "React", "Next.js", "Portfolio"],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative min-h-screen overflow-x-hidden bg-slate-900`}>
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
