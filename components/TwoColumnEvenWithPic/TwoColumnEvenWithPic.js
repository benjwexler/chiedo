import css from "./TwoColumnEvenWithPic.css";
import Button from "../Button/Button.js";

const TwoColumnEvenWithPic = props => {
  let backgroundImageCSS = { background: `url(${props.picUrl})` };

  return (
    <div style={props.style} className={`${css.WhatWeDo} ${props.flexClass}`}>
      <div style={backgroundImageCSS} className={css.pic} />
      <div className={css.halfContainer}>
        <h2 className={css.sectionTitle}>
          <span className={css.what}>{props.titleFirstWord}</span>{" "}
          {props.restOfTitle}
        </h2>

        {props.restOfText}

        <Button
          href="https://labs.chiedo.com/page/contact/"
          text="Get A Quote"
        />
      </div>
    </div>
  );
};

export default TwoColumnEvenWithPic;
