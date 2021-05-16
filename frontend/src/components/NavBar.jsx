import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export const NavBar = ({ onLogout }) => (
  <div className="nav-bar">
    <div className="logo">Logotype</div>

    <Menu right>
      {/* <Link id="home" className="menu-item" to="/" exact>
        Home
      </Link> */}
      <Link id="feed" className="menu-item" to="/">
        Feed
      </Link>
      <Link id="profile" className="menu-item" to="/profile">
        My Profile
      </Link>
      {/* <Link id="mentorship" className="menu-item" to="/mentorship">
        Mentorship
      </Link> */}
      <Link id="organizations" className="menu-item" to="/organizations">
        Organizations
      </Link>
      <Link id="faq" className="menu-item" to="/faq">
        FAQ about Sweden
      </Link>

      <div className="logout">
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </Menu>
  </div>
);