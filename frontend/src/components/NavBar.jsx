import { Link } from "react-router-dom";

export const NavBar = ({ onLogout }) => 
    <div className="nav-bar">
        <div className="logo">
            Logotype
        </div>
        <div>
            <ul>
            <li>
                <Link className="link" to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link className="link" to="/feed">
                    Feed
                </Link>
            </li>
            <li>
                Mentorship
            </li>
            <li>
                My messages
            </li>
            <li>
                My Profile
            </li>
        </ul>
        </div>
        <div className="logout">
            <button className="logout-button" onClick={onLogout}>
                Logout
            </button>
        </div>
    </div>