import { Link } from "react-router-dom";

<<<<<<< HEAD
export const Header = () => 
    <div className="main-header">
        <Link to="/">
            <h3>Home</h3>
        </Link>
=======
export const Header = ({ onLogout }) => 
    <div className="main-header">
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
>>>>>>> d983047ee41ec799956a7627c9cd584bb1b41ed1
    </div>