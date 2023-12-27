"use client";
import Image from "next/image";
// console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
import SocketIOComponent from "./components/SocketIOComponent";
import Chat from "./components/Chat";
import NavBar from "./components/common/NavBar";
export default function Home() {
  return (
    <>
      <NavBar />
    </>
  );
}
