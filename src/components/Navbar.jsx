import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../themeProvider";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <div style={{ margin: "10px" }}>
        <Link to="/">Home</Link>
      </div>
      <div style={{ margin: "10px" }}>
        <Link to="/about">About</Link>
      </div>
      <div style={{ margin: "10px" }}>
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
      </div>
    </>
  );
};

export default Navbar;
