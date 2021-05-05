import { Link } from "react-router-dom";

export const Header = ({ onLogout }) => 
    <div className="main-header">
        <ul>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/feed">
                    Feed
                </Link>
            </li>
            <li>
                <button onClick={onLogout}>
                    Logout
                </button>
            </li>
        </ul>
    </div>