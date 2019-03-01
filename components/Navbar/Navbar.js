// import Link from "next/link";
import css from "./Navbar.css";
import NavLink from "../NavLink/NavLink.js"

const Navbar = props => (
  <div className={css.navbar}>
    <NavLink name="About Us" url="page/about/"/>
    <NavLink name="Portfolio" url="case-studies/"/>
    <NavLink name="What We Do" url="#what-we-do"/>
    <NavLink name="Who We Serve" url="#who-we-serve"/>
    <NavLink name="Contact Us" url="page/contact/"/>
  </div>
);

export default Navbar;
