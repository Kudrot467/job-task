import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaArrowAltCircleDown } from "react-icons/fa";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl mt-20 mb-10">
        <figure>
          <img
            className="w-full md:w-auto lg:w-1/3"
            src={user?.photoURL}
            alt="Album"
          />
        </figure>
          <div className="card-body bg-[#F8601F] text-center">
            <h2 className="card-title text-white text-xl font-semibold rounded-xl">
              <span className=" flex items-center">
                {" "}
                <span className="mr-2">Details</span>{" "}
                <FaArrowAltCircleDown></FaArrowAltCircleDown>
              </span>
            </h2>
            <h1 className=" text-white text-xl font-semibold rounded-xl">
              Name: {user?.displayName}
            </h1>
            <p className="text-white text-xl font-semibold rounded-xl">
              Email:{user?.email}
            </p>
          </div>
      </div>
    </div>
  );
};

export default MyProfile;
