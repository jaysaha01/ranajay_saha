import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/style.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ranajay Saha - Best Frontend Developmer",
  description:
    "Welcome to my website. I specialize in React, Next.js, TypeScript, and frontend development.",
  keywords: ["React", "Next.js", "Frontend Developer", "Web Development"],
  creator: "Ranajay Saha",
  openGraph: {
    title: "Ranajay Saha - Best Frontend Developmer",
    description:
      "I am a React & Next.js frontend developer specializing in building high-performance websites.",
    url: "https://ranajay-saha.vercel.app/",
    siteName: "Your Website Name",
    images: [
      {
        url: "https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio-1170x658.jpg",
        width: 1200,
        height: 630,
        alt: "My Website Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
