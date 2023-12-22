import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

  const {user,logOut}=useContext(AuthContext);

  const signOut = () => {
    logOut().then().catch();
  };

  const navLinks=<>
  <li className="mr-2">
        {" "}
        <NavLink
           className="text-lg hover:text-xl"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              background: isActive ? "white" : "#F8601F",
              textDecoration: isActive ? "underline" : "",
              color: isActive ? "#F8601F" : "white",
            };
          }}
          to="/"
        >
          Home
        </NavLink>{" "}
      </li>
      <li className="mr-2">
        {" "}
        <NavLink
          className="text-lg hover:text-xl"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              background: isActive ? "white" : "#F8601F",
              textDecoration: isActive ? "underline" : "",
              color: isActive ? "#F8601F" : "white",
            };
          }}
          to="/registration"
        >
          Registration
        </NavLink>{" "}
      </li>
      <li className="mr-2">
        {" "}
        <NavLink
           className="text-lg hover:text-xl"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              background: isActive ? "white" : "#F8601F",
              textDecoration: isActive ? "underline" : "",
              color: isActive ? "#F8601F" : "white",
            };
          }}
          to="/tasks"
        >
         Tasks
        </NavLink>{" "}
      </li>


  
  </>

  return (
    <div className="border-2 border-black">
      <div className="navbar bg-[#F8601F]">
        <div className="navbar-start">
        <h1 className="text-xl font-bold text-white">Task Management System</h1>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>
        <img className="h-[70px] w-[70px] rounded-full bg-white p-3" src="https://i.ibb.co/NrJ3HMD/task-logo-2.png" alt="" />
        <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="" src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between text-[#F8601F] text-lg font-bold">
                    {user?.displayName}
                    <span className="badge indicator-item badge-secondary bg-green-500"></span>
                  </a>
                </li>
                <li className="mr-2">
                      {" "}
                      <div
                        style={{
                          backgroundColor: "#F8601F",
                          fontSize: "20px",
                          fontWeight: "600",
                          color: "white",
                        }}
                      >
                        <NavLink to="/dashboard/userHome">Dashboard</NavLink>{" "}
                      </div>
                    </li>
                <li className="w-full">
                  <button
                    onClick={signOut}
                    className="text-lg bg-[#F8601F] hover:bg-[#F8601F] text-white text-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            {" "}
            <NavLink
              className="text-lg px-3 py-2 rounded-xl"
              style={{
                backgroundColor: "#F8601F",
                fontSize: "20px",
                fontWeight: "600",
                color: "white",
              }}
              to="/login"
            >
              Join Us
            </NavLink>{" "}
          </>
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
