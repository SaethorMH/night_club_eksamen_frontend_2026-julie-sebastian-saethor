import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Night Club",
  description: "Have a good time",
  icons: "assets/icons/favicon.png",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${ubuntu.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
