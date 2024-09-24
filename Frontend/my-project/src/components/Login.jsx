import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md outline-none py-1"
                {...register("email", { required: true })}
              />
              <br/>
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
              <br/>
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>

            <div className="flex justify-around items-center text-center mt-2">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <span>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 cursor-pointer underline"
                >
                  Signup
                </Link>
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
