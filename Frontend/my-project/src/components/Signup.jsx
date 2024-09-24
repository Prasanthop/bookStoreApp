import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showLoginModal, setShowLoginModal] = useState(false);

  const onSubmit = (data) => {
    console.log(data); // This will log the form data
    // Handle signup logic here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button for the modal */}
            <Link
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              to={"/"}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>

            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 border rounded-md outline-none py-1"
                {...register("name", { required: true })} // Changed to "name"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md outline-none py-1"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 px-3 border rounded-md outline-none py-1"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>

            <div className="flex justify-around items-center text-center mt-2">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Signup
              </button>
              <p className="text-md">
                Have an Account?{" "}
                <Link
                  type="button"
                  className="text-blue-500 cursor-pointer underline"
                  onClick={() => setShowLoginModal(true)}
                  to="/login"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
          {showLoginModal && <Login onClose={() => setShowLoginModal(false)} />}
        </div>
      </div>
    </div>
  );
};

export default Signup;
