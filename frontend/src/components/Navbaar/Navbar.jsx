import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Images/gcmslogo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { useSelector } from "react-redux";
import { Avatar, Menu, MenuItem } from "@mui/material";

function Navbar() {
  const navigator = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const { token, role } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigation = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutsession = () => {
    var content = window.confirm("Do you really want to logout"); // The "hello" means to show the following text
    if (content === true) {
      localStorage.clear();

      navigation("/");
      window.location.reload();
    }
  };

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="services">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </NavLink>

        <ul
          className={isMobile ? "nav-links nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <NavLink to="/" className="services">
            <li>Services</li>
          </NavLink>
          <NavLink to="/faqs" className="faqs">
            <li>FAQ’s</li>
          </NavLink>
          <NavLink to="/blogs" className="blogs">
            <li>Blogs</li>
          </NavLink>
          <NavLink to="/contact" className="contactus">
            <li>Contact  Us</li>
          </NavLink>

          {!token && (
            <NavLink to="/login" className="contactus">
              <li>Login</li>
            </NavLink>
          )}

          <NavLink to="/order-now" className="ordernow">
            <li>Order Now</li>
          </NavLink>

          {token && (
            // <NavLink  to="/no-page" onClick={handleClick}>
            <li onClick={handleClick}>
              <Avatar
                sx={{ width: 35, height: 35 }}
                alt="Remy Sharp"
                // src="/static/images/avatar/1.jpg"
              />
            </li>
            // </NavLink>
          )}
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i>
              <FeatherIcon icon="x" />
            </i>
          ) : (
            <i>
              <FeatherIcon icon="menu" />
            </i>
          )}{" "}
        </button>
      </nav>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            navigator("/trackform");
          }}
        >
          Track
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigator("/UserProfile");
          }}
        >
          Profile
        </MenuItem>

        {role === 1 && (
          <MenuItem
            onClick={() => {
              navigator("/admin-panel/dashboard");
            }}
          >
            Dashboard
          </MenuItem>
        )}
        <MenuItem onClick={logoutsession}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default Navbar;
