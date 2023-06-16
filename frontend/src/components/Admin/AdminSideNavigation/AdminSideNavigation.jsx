import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import adminNavCollection from "../../../JSONCollection/adminNavCollection";
import adminLogo from "../../../Assets/gcmslogo.png";
import "./AdminSideNavigation.css";

export default function AdminSideNavigation({ closeNav }) {
  // const auth = useAuth();

  const navigation = useNavigate();

  const logoutsession = () => {
    var content = window.confirm("Do you really want to logout"); // The "hello" means to show the following text
    if (content === true) {
      localStorage.clear();
      navigation("/");
      window.location.reload();
    }
  };

  return (
    <nav className="admin-side-navigation">
      <Link to="/admin-panel/dashboard">
        <img src={adminLogo} className="admin-panel-logo" alt="" />
      </Link>
      <ul className="nav-list">
        {adminNavCollection.map((item, index) => (
          <li key={index} className="nav-btn">
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link--active" : "nav-link"
              }
              onClick={() => closeNav()}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
        <li className="nav-btn" onClick={logoutsession}>
          <span className="nav-link">Logout</span>
        </li>
      </ul>
    </nav>
  );
}
