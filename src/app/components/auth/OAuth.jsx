"use client";
import React from "react";
import app from "../../firebase";
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
  return (
    <button
      type="button"
      className="btn btn-outline btn-primary w-full"
      onClick={handleAuth}
    >
      Continue with Google
    </button>
  );
};

export default OAuth;
