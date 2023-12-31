"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { store } from "./redux/store";
import StoreProvider from "./redux/provider/StoreProvider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider store={store}>{children}</StoreProvider>
      </body>
    </html>
  );
}
