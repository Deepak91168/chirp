"use client";
import React from "react";
import OAuth from "./OAuth";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";
const Register = () => {
  const router = useRouter();
  const [fromData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contacts: [],
  });

  const handleChange = (e) => {
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log("Called!");
      const response = await axios.post(
        "http://localhost:8000/auth/sign-up",
        fromData
      );
      console.log(response.data);
      router.push("/auth/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-16 max-w-xl mx-auto  pt-8">
      <div className="text-center font-bold text-xl">Register</div>
      <div className="">
        <form className="mt-4">
          <div className="border-slate-300 border-2 bg-slate-200 p-10 rounded-lg shadow-lg">
            <label className=" ">
              <div className="label">
                <span className="label-text">Name</span>
                {/* <span className="label-text-alt">Top Right label</span> */}
              </div>
              <input
                type="text"
                name="name"
                id-="name"
                onChange={handleChange}
                placeholder="Full Name"
                className="input input-bordered w-full bg-slate-100"
              />
            </label>

            <label className=" ">
              <div className="label">
                <span className="label-text">Email</span>
                {/* <span className="label-text-alt">Top Right label</span> */}
              </div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="input input-bordered w-full bg-slate-100 "
              />
            </label>

            <label className=" ">
              <div className="label">
                <span className="label-text">Password</span>
                {/* <span className="label-text-alt">Top Right label</span> */}
              </div>
              <input
                name="password"
                id="password"
                onChange={handleChange}
                type="password"
                className="input input-bordered w-full bg-slate-100 "
              />
            </label>

            <div className="text-[12px] mt-4">
              <Link href="/auth/sign-in" className="link link-primary">
                Already have an account?
              </Link>
            </div>

            <button
              type="submit"
              onClick={handleRegister}
              className="btn mt-4 btn-primary w-full"
            >
              Register
            </button>
            <div className="text-center mt-1 mb-1 text-sm">or</div>
            <OAuth />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
