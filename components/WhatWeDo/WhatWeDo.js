// import Link from "next/link";
import TwoColumnEvenWithPic from "../TwoColumnEvenWithPic/TwoColumnEvenWithPic.js";
import css from "../TwoColumnEvenWithPic/TwoColumnEvenWithPic.css";
const WhatWeDo= props => (
    <TwoColumnEvenWithPic
    picUrl="https://i1.sndcdn.com/artworks-000478704579-o7peaj-t500x500.jpg"
      titleFirstWord="WHAT"
      restOfTitle="WE D0"
      flexClass={css.flexNormal}
      restOfText={
        <React.Fragment>
          <p className={css.paragraph}>We build and maintain:</p>
          <p className={css.paragraph}>
            Web Front-ends with HTML, CSS, and a library called React.
          </p>
          <p className={css.paragraph}>
            Web Back-ends using NodeJS, Ruby on Rails, PHP, MySQL, AWS, and
            Heroku.
          </p>
          <p className={css.paragraph}>
            Custom Websites from the ground up as opposed to using pre-existing
            templates.
          </p>
        </React.Fragment>
      }
    />

);

export default WhatWeDo;