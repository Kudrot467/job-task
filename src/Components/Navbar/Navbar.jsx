import { NavLink } from "react-router-dom";

const Navbar = () => {

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
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
