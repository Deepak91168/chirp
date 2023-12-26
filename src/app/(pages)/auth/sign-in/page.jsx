import React from "react";

const page = () => {
  return (
    <div className="mt-16 w-full">
      <div className="text-center font-bold text-xl">Login</div>
      <div className="flex justify-center w-full">
        <form className="pt-4 mx-auto">
          <div className="border-2 p-10 rounded-lg shadow-lg">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Email</span>
                {/* <span className="label-text-alt">Top Right label</span> */}
              </div>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="input input-bordered w-full max-w-md"
              />
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Password</span>
                {/* <span className="label-text-alt">Top Right label</span> */}
              </div>
              <input
                type="password"
                className="input input-bordered w-full max-w-md"
              />
            </label>

            <div className="text-[12px] mt-4">
              <a href="/sign-up" className="link link-primary">Create an account?</a>
            </div>

            <button className="btn mt-4 btn-primary w-full">Log In</button>
            <div className="text-center mt-1 mb-1 text-sm">or</div>
            <button className="btn btn-outline btn-primary w-full">
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
