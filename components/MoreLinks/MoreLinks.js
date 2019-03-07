// Components
import FooterLink from "./FooterLink";

// CSS
import css from "./MoreLinks.css";


import Button from "../Button/Button.js";

const MoreLinks = props => (
  <div className={css.container}>
    <div className={css.sectionTitle}>
      <span className={css.firstWord}>More Links</span>
    </div>
    <div className={css.linksContainer}>
    <FooterLink
        text="Blog"
        href="https://labs.chiedo.com/page/blog/"
        target="_self"
    />
     <FooterLink
        text="Join the Team"
        href="https://chiedolabs.typeform.com/to/UROn3m"
        target="_blank"
    />
     <FooterLink
        text="Facebook"
        href="https://www.facebook.com/ChiedoLabs"
        target="_blank"
    />
     <FooterLink
        text="Twiter"
        href="https://twitter.com/chiedolabs"
        target="_blank"
    />
    </div>
    <div className={css.companyName}>CHIE<span style={{color: "#B92C2C"}}>DO</span> LABS</div>
  <div className={css.copyrightMobile}>Copyright 2019 © Chiedo Labs, LLC.</div>
  </div>
);

export default MoreLinks;
