import type { Metadata } from "next";
import { Play} from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { SessionProvider } from "next-auth/react";

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
    <html lang="pt-br">
      <body
        className={`${play.variable} antialiased bg-pink-50 text-black`}
      >
        <SessionProvider>
          <Header />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
