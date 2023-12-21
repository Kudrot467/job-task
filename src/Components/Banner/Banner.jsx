import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div
        className="hero "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/fdYFrZW/Yellow-Corporate-Linked-In-Banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-30 "></div>
        <div className="hero-content text-center">
          <div className="max-w-md py-20">
            <h1 className="mb-5 text-5xl font-bold">Hello there..</h1>
            <p className="mb-5 text-white font-bold">
            🌟 Are you ready to take control of your tasks and boost your productivity? We are thrilled to introduce our new and improved Task Management System – designed to make your work life simpler, more organized, and downright efficient!
            </p>
            <Link to="/login"><button className="btn bg-[#F8601F] text-xl text-white hover:bg-[#F8601F] hover:text-2xl">Let`s Explore</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
