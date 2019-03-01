import css from "./Button.css";

const Button = props => (
     <div class={css.button}>{props.text}</div>
  );
  
  export default Button;