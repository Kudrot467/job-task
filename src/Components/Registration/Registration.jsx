import {  useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";


const Registration = () => {
  const { createUser, setProfilePicture } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassWord] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic=useAxiosPublic();
  const onSubmit = (data) => {
    const userName = data.userName;
    const image_url = data.image_url;
    const email = data.email;
    const password = data.password;
    const role=data.role;

    const user = {
      userName,
      image_url,
      email,
      password,
      role
    };

    axiosPublic.post("/users",(user))
    //   .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          reset();
          Swal.fire("Thank You!", "Now you got a bronze medal !", "success");
        }
      });

    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        setProfilePicture(data.userName, data.image_url);
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="py-20">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:w-3/4 lg:w-full flex-col md:flex-row">
          <div>
            <img src="" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="flex flex-col md:flex-col lg:flex-row gap-1">
                <div className="form-control"></div>
                <div className="form-control w-full">
                  <div className=" text-[#F8601F] font-medium text-lg text-center flex">
                    <h1 className=" text-[#F8601F] font-bold text-2xl rounded-xl w-full underline">
                      Registration
                    </h1>
                  </div>
                  <label className="label">
                    <span className="label-text text-[#F8601F] font-medium text-lg">
                      User Name
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("userName", { required: true })}
                    placeholder="User Name"
                    name="userName"
                    className="input input-bordered border-[#F8601F]"
                  />
                  {errors.userName && (
                    <span className="text-red-700">*User Name is required</span>
                  )}
                </div>
              </div>
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#F8601F] font-medium text-lg">
                      Image URL
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("image_url", { required: true })}
                    placeholder="Image url"
                    name="image_url"
                    className="input input-bordered border-[#F8601F]"
                  />
                  {errors.image_url && (
                    <span className="text-red-700">*image is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#F8601F] font-medium text-lg">
                     What is your job/responsibility type?
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("role", { required: true })}
                    placeholder="enter your role"
                    name="role"
                    className="input input-bordered border-[#F8601F]"
                  />
                  {errors.role && (
                    <span className="text-red-700">*role is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#F8601F] font-medium text-lg">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    name="email"
                    className="input input-bordered border-[#F8601F]"
                  />
                  {errors.email && (
                    <span className="text-red-700">*Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#F8601F] font-medium text-lg">
                      Password
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern:
                          /(?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]/,
                      })}
                      placeholder="password"
                      name="password"
                      className="input input-bordered w-full border-[#F8601F]"
                    />
                    {errors.password?.type === "required" && (
                      <span className="text-red-700">
                        *Password is required
                      </span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span className="text-red-700">
                        *Provie a special Character,one capital letter
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="text-red-700">
                        *Password must be 6 characters
                      </span>
                    )}
                    <span
                      className="absolute top-3 right-2"
                      onClick={() => setShowPassWord(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </span>
                  </div>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white hover:bg-[#F8601F] bg-[#F8601F]">
                  Registration
                </button>
              </div>
            </form>
            <p className="text-center font-medium text-lg text-[#F8601F]">
              Already have an account ?{" "}
              <Link className="text-green-400 font-bold" to="/login">
                Login
              </Link>
            </p>
            {registerError && (
              <p className="text-red-700 text-center text-xl font-medium">
                {registerError}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
