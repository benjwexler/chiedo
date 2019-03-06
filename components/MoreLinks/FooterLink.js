import css from "./MoreLinks.css";
import Link from "next/link";


const FooterLink = props => (
    <Link href={props.href}>
  <a className={css.aTag}>
   {props.text}
  
  </a>
  </Link>
);

export default FooterLink;
