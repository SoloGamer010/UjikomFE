import { Link, useNavigate } from "react-router-dom";
import '../styles/Navbar.css';
import api from "../utils/axios";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await api.post("/pembeli/logout"); 
            localStorage.removeItem("token"); 
            navigate("/login"); 
        } catch (error) {
            console.error("Logout Failed", error);
        }
    };

    return (
        <nav className="navbar">
            <h2>Toko Film</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
