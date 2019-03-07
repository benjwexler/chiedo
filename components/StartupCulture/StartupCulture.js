import css from "./StartupCulture.css";
import Button from "../Button/Button.js";

const StartupCulture = props => (
  <div className={css.container}>
    <img className={css.image} src={props.imgSrc} />
    <div className={css.rightHalfContainer}>
        <div className={css.tagline}>{props.tagline}</div>
        <div className={css.text}>{props.text}</div>
        <Button
          href={props.buttonHref}
          text={props.buttonText}
          style={props.buttonStyle}
        />
    </div>
  </div>
);

export default StartupCulture;
