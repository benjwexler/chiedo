import Link from "next/link";


const NavLink = props => (
<Link>
  <a href={"https://labs.chiedo.com/" + props.url}className={props.style}>
    {props.name}
  </a>
  </Link>
);

export default NavLink;
