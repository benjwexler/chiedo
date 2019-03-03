import Link from "next/link";
import css from "./Button.css";

const Button = props => (
    <Link>
     <a href={props.href} style={props.style} class={css.button}>{props.text}</a>
    </Link>
  );
  
  export default Button;