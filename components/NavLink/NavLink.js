import Link from "next/link";
import css from "./NavLink.css";

const NavLink = props => (
<Link>
  <a href={"https://labs.chiedo.com/" + props.url}className={css.navLink}>
    {props.name}
  </a>
  </Link>
);

export default NavLink;
