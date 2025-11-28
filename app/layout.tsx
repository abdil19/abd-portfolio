import type { Metadata } from "next";
import { Outfit, Dancing_Script } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ABD | Portfolio",
  description:
    "M. Sa'aduddin Abdillah Yusuf - Information Systems Student | Data Mining Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${dancingScript.variable} antialiased font-outfit`}
      >
        {children}
      </body>
    </html>
  );
}
