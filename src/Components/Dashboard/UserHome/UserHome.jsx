import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const UserHome = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
             <h2 className="text-3xl">
                Hi Welcome,
                <span>{user?.displayName ? user?.displayName : "Back"}</span>
            </h2>
        </div>
    );
};

export default UserHome;