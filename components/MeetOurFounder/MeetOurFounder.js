import css from "./MeetOurFounder.css";
import Button from "../Button/Button.js";

const MeetOurFounder = props => (
  <div className={css.container}>
    <img className={css.image} src={props.imgSrc} />
    <div className={css.rightHalfContainer}>
        <div className={css.tagline}>{props.tagline}</div>
        <div className={css.text}>{props.text}</div>
        <Button
          href={props.buttonHref}
          text={props.buttonText}
          style={props.buttonStyle}
          target="_blank"
        />
    </div>
  </div>
);

export default MeetOurFounder;
