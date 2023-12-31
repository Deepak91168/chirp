"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { store } from "./redux/store";
import StoreProvider from "./redux/provider/StoreProvider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider store={store}>
        <body className={inter.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
