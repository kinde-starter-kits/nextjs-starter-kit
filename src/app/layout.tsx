"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import Auth from "./auth";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <KindeProvider>
      <html lang="en">
        <body className={inter.className}>
          <Auth>{children}</Auth>
        </body>
      </html>
    </KindeProvider>
  );
}
