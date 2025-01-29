import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import style from "./style.module.css";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={[style.navbar, isHidden && style.hidden].join(" ")}>
      <div className={style["navbar-content"]}>
        <Link to="/" className={style["navbar-logo"]}>
          <h1>Local Business Directory</h1>
        </Link>

        <button
          className={[
            style["mobile-menu-button"],
            isMobileMenuOpen && style.open,
          ].join(" ")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={[style["nav-links"], isMobileMenuOpen && style.open].join(
            " "
          )}
        >
          <Link to="/" className={style["nav-link"]}>
            Home
          </Link>
          <Link to="/listings" className={style["nav-link"]}>
            Listings
          </Link>
          <Link to="/about" className={style["nav-link"]}>
            About
          </Link>
          <Link to="/contact" className={style["nav-link"]}>
            Contact
          </Link>
          <Link to="/faq" className={style["nav-link"]}>
            FAQ
          </Link>
          <Link
            to="/login-signup"
            className={[style["nav-link"], style.highlight].join(" ")}
          >
            Login/Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
