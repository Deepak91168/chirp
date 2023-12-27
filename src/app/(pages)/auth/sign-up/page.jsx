import React from "react";
import OAuth from "@/app/components/auth/OAuth";
const page = () => {
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
                type="password"
                className="input input-bordered w-full bg-slate-100 "
              />
            </label>

            <div className="text-[12px] mt-4">
              <a href="/sign-up" className="link link-primary">
                Create an account?
              </a>
            </div>

            <button className="btn mt-4 btn-primary w-full">Register</button>
            <div className="text-center mt-1 mb-1 text-sm">or</div>
            <OAuth />
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
