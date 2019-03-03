import Link from "next/link";
import css from "./MainSection.css";
import Video from "../Video/Video.js";
import Button from "../Button/Button.js";

const MainSection = props => (
  <div className={css.MainSection}>
    <Video src="https://labs.chiedo.com/wp-content/themes/chiedolabs/vid/promo.mp4?v=2" />
    <div className={css.content}>
      <div className={css.inner}>
        <h1 className={css.tagline}>{props.tagline}</h1>
        <p className={css.description}>{props.description}</p>
        <Button
        href="https://labs.chiedo.com/page/contact/"
        text="Get A Quote"/>
      </div>
    </div>
  </div>
);

export default MainSection;
