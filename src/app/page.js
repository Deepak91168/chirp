"use client";
import Image from "next/image";
// console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
import SocketIOComponent from "./components/SocketIOComponent";
import Chat from "./components/Chat";
export default function Home() {
  return (
    <>
      {/* <SocketIOComponent /> */}
      <Chat userEmail={"20bcs102@nith.ac.in"}/>
    </>
  );
}
