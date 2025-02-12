import { Link, useNavigate } from "react-router-dom";
import '../styles/Navbar.css';
import api from "../utils/axios";

const Navbar = () => {
    const navigate = useNavigate();

    // const handleLogout = async () => {
    //     try {
    //         await api.post("/pembeli/logout"); 
    //         localStorage.removeItem("token"); 
    //         navigate("/login"); 
    //     } catch (error) {
    //         console.error("Logout Failed", error);
    //     }
    // };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">Home</Link>
            </div>
            <div className="nav-search">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="nav-profile">
                <Link to="/profile">Profil</Link>
            </div>
        </nav>
    );
};

export default Navbar;
