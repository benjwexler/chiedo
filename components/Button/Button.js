import Link from "next/link";
import css from "./Button.css";

const Button = props => (
    <Link href={props.href}>
     <a style={props.style} className={css.button}>{props.text}</a>
    </Link>
  );
  
  export default Button;