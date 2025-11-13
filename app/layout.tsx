import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const dmSans = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mentra - AI Teaching Platform",
  description: "An AI-powered platform to create personalized AI tutors for enhanced learning experiences.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        <ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933" } }} >
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
