'use client';
import React from "react";
import app from "../firebase"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const OAuth = () => {
  // console.log(app);
  const handleAuth = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return <button onClick={handleAuth}>OAuth</button>;
};

export default OAuth;
