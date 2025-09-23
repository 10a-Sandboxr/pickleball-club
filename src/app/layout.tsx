import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ace Pickleball Club",
  description: "Join Ace Pickleball Club and experience the excitement of pickleball in a welcoming community. Professional courts, expert coaching, and programs for all skill levels.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%23059669' stroke='%23ffffff' stroke-width='4'/><circle cx='35' cy='35' r='3' fill='%23ffffff'/><circle cx='65' cy='35' r='3' fill='%23ffffff'/><circle cx='35' cy='50' r='3' fill='%23ffffff'/><circle cx='65' cy='50' r='3' fill='%23ffffff'/><circle cx='35' cy='65' r='3' fill='%23ffffff'/><circle cx='65' cy='65' r='3' fill='%23ffffff'/><circle cx='50' cy='35' r='3' fill='%23ffffff'/><circle cx='50' cy='50' r='3' fill='%23ffffff'/><circle cx='50' cy='65' r='3' fill='%23ffffff'/></svg>",
        type: "image/svg+xml",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
