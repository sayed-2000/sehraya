import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "سهراية",
  description: "عش أجواء السهر مع أفضل المشروبات والحلويات",

  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        {/* <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero_1.mp4" type="video/mp4" />
        </video> */}

        {/* <div
          className="
      absolute inset-0
      bg-[url('/hero.gif')]
      bg-cover
      bg-center
      bg-no-repeat
    "
        ></div> */}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
