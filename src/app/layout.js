import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { store } from "./redux/store";
import Provider from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "./redux/store";
export const metadata = {
  title: "Chrip",
  description: "Realtime chat application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
