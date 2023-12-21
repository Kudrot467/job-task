import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    const [showPassword, setShowPassWord] = useState(false);
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from=location.state?.from?.pathname ||"/";
    const axiosPublic=useAxiosPublic();
  
    const handleGoogleLog = () => {
      googleSignIn()
      .then(result=>{
        const userInfo={
          email:result.user?.email,
          name:result.user?.displayName,
          image_url:result.user?.photoURL
        }
        axiosPublic.post('/users',userInfo)
       .then(res=>{
        console.log(res.data);
        navigate('/')
       })
      })
      .catch();
    };
  
    const onSubmit = (data) => {
      const email = data.email;
    const password = data.password;
      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "login successful",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from,{replace:true});
         reset();
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          
        });
    };

    return (
        <div>
             <div className="hero min-h-screen">
      <div className="hero-content md:w-3/4 lg:w-1/2 flex-col md:flex-row">
      <div className="">
            <img className="w-full rounded-lg" src="" alt="" />
          <img
            className="w-full"
            src="https://i.ibb.co/ZK6xP04/Blue-and-White-Illustrated-Login-Page-Mobile-Prototype.png"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
            <div className="form-control mt-6">
             
             <button className="btn text-white hover:bg-[#30c02bd6] bg-[#F8601F]">
                Login
              </button>
             
            </div>
          </form>
          <p className="text-center font-medium text-lg text-[#F8601F]">
            New Applicant ?{" "}
            <Link className="text-red-700" to="/registration">
              Register
            </Link>
          </p>
          <div className="flex items-center justify-center my-6">
            <button onClick={handleGoogleLog} className="btn  text-[#F8601F]">
              <FaGoogle></FaGoogle>Continue with Google
            </button>
          </div>
        </div>
        
      </div>
    </div>
        </div>
    );
};

export default Login;