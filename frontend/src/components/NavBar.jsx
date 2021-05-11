import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export const NavBar = ({ onLogout }) => (
  <div className="nav-bar">
    <div className="logo">Logotype</div>
    <Menu right>
      <Link id="home" className="menu-item" to="/">
        Home
      </Link>
      <Link id="feed" className="menu-item" to="/feed">
        Feed
      </Link>
      <Link id="mentorship" className="menu-item" href="/mentorship">
        Mentorship
      </Link>
      <Link id="messages" className="menu-item" href="/messages">
        My messages
      </Link>
      <Link id="profile" className="menu-item" href="/profile">
        My Profile
      </Link>
      <div className="logout">
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </Menu>
  </div>
);