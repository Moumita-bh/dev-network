import React from "react";

const MyApps = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-full max-w-md p-8 shadow-lg rounded-md border">
        <h2 className="text-2xl font-bold mb-4">Sign in</h2>
        
        <button className="w-full border py-2 mb-3 flex items-center justify-center rounded">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
          Continue with Google
        </button>

        <button className="w-full border py-2 mb-3 flex items-center justify-center rounded">
          <img src="https://www.svgrepo.com/show/452213/apple.svg" alt="Apple" className="w-5 h-5 mr-2" />
          Sign in with Apple
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <input
          type="text"
          placeholder="Email or phone"
          className="w-full border p-2 mb-3 rounded"
        />

        <div className="relative mb-3">
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
          />
          <span className="absolute right-3 top-2.5 text-blue-600 text-sm cursor-pointer">Show</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <a href="#" className="text-blue-600 text-sm">Forgot password?</a>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-1" /> Keep me logged in
          </label>
        </div>

        <button className="w-full bg-blue-700 text-white py-2 rounded text-sm font-medium hover:bg-blue-800">
          Sign in
        </button>

        <div className="text-center mt-6 text-sm">
          New to LinkedIn? <a href="#" className="text-blue-600 font-semibold">Join now</a>
        </div>
      </div>
    </div>
  );
};

export default MyApps;
