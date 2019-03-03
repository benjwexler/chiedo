// import Link from "next/link";
import React, { Component } from "react";
import css from "./Navbar.css";
import NavLink from "./NavLink";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    showMobileDropDown: false,
    showBorderBottom: false
  };

  toggleMobileNav = () => {
    console.log("Mobile Nav");

    if (!this.state.showMobileDropDown) {
      this.setState({
        showBorderBottom: true
      });
    }

    this.setState({
      showMobileDropDown: !this.state.showMobileDropDown
    });
  };

  removeBorderBottom = () => {
    if (!this.state.showMobileDropDown) {
        console.log("removing border!")
      this.setState({
        showBorderBottom: false
      });
    }
  };

  render() {
    return (
      // const Navbar = props => (
      <div className={css.OuterNavContainer}>
        <div
          onClick={this.toggleMobileNav}
          className={`${css.navbar} ${css.regNav}`}
        >
          <NavLink name="About Us" url="page/about/" style={css.navLink} />
          <NavLink name="Portfolio" url="case-studies/" style={css.navLink} />
          <NavLink name="What We Do" url="#what-we-do" style={css.navLink} />
          <NavLink
            name="Who We Serve"
            url="#who-we-serve"
            style={css.navLink}
          />
          <NavLink name="Contact Us" url="page/contact/" style={css.navLink} />
          <img
            className={css.hamburgerMenu}
            src="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/mob-trig.png"
            alt="Mobile menu hamburger icon"
            title="Mobile menu icon"
          />
        </div>
        <div
          ref={this.myRef}
          onTransitionEnd={this.removeBorderBottom}
          className={`${css.mobileNav} 
          ${
            this.state.showMobileDropDown
              ? css.showMobileDropDown
              : css.hideMobileDropDown
          }
          ${
            this.state.showBorderBottom
              ? css.showBorderBottom
              : css.hideBorderBottom
          }
          `}
        >
          <NavLink
            name="About Us"
            url="page/about/"
            style={css.mobileNavLink}
          />
          <NavLink
            name="Portfolio"
            url="case-studies/"
            style={css.mobileNavLink}
          />
          <NavLink
            name="What We Do"
            url="#what-we-do"
            style={css.mobileNavLink}
          />
          <NavLink
            name="Who We Serve"
            url="#who-we-serve"
            style={css.mobileNavLink}
          />
          <NavLink
            name="Contact Us"
            url="page/contact/"
            style={css.mobileNavLink}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
