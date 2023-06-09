import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Toaster } from "react-hot-toast";
import { Header } from "@/components";
config.autoAddCss = false;

import "animate.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sifedine | pengi dev",
  description:
    "an algerian self taught full stack developer, check my portfolio for more info",
  keywords: ["developer", "coder", "programmer", "portfolio", "full-stack"],
  themeColor: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <Header />
        {children}
      </body>
    </html>
  );
}
