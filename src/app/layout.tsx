import type { Metadata } from "next";
import { Play} from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const play = Play({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"]
});


export const metadata: Metadata = {
  title: "My Tasks",
  description: "Gerenciador de tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${play.variable} antialiased bg-pink-50`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
