"use client";
import React from "react";
import OAuth from "./OAuth";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  signInSuccess,
  signInFailure,
  signInStart,
} from "../../redux/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [fromData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        fromData
      );
      console.log(response.data);
      console.log(currentUser);
      dispatch(signInSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(signInFailure(error));
    }
    
  };

  return (
    <div className="mt-16 max-w-xl mx-auto  pt-8">
      <div className="text-center font-bold text-xl">Login</div>
      <div className="">
        <form className="mt-4">
          <div className="border-slate-300 border-2 bg-slate-200 p-10 rounded-lg shadow-lg">
            <label className=" ">
              <div className="label">
                <span className="label-text">Email</span>
                {/* <span className="label-text-alt">Top Right label</span> */}
              </div>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                value={fromData.email}
                placeholder="example@gmail.com"
                className="input input-bordered w-full bg-slate-100"
              />
            </label>

            <label className=" ">
              <div className="label">
                <span className="label-text">Password</span>
                {/* <span className="label-text-alt">Top Right label</span> */}
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                value={fromData.password}
                onChange={handleChange}
                className="input input-bordered w-full bg-slate-100 "
              />
            </label>

            <div className="text-[12px] mt-4">
              <a href="/auth/sign-up" className="link link-primary">
                Create an account?
              </a>
            </div>

            <button
              onClick={handleLogin}
              className="btn mt-4 btn-primary w-full"
            >
              Log In
            </button>
            <div className="text-center mt-1 mb-1 text-sm">or</div>
            <OAuth />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
