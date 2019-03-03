import Link from "next/link";

const NavLink = props => (
<Link href={"https://labs.chiedo.com/" + props.url}>
  <a className={props.style}>
    {props.name}
  </a>
  </Link>
);

export default NavLink;
