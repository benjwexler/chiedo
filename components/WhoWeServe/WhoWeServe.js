// import Link from "next/link";
import TwoColumnEvenWithPic from "../TwoColumnEvenWithPic/TwoColumnEvenWithPic.js";
import css from "../TwoColumnEvenWithPic/TwoColumnEvenWithPic.css";
const WhoWeServe = props => (
    <TwoColumnEvenWithPic
    picUrl="https://i1.sndcdn.com/artworks-000478704579-o7peaj-t500x500.jpg"
      titleFirstWord="WHO"
      restOfTitle="WE SERVE"
      flexClass={css.flexReverse}
      restOfText={
        <React.Fragment>
          <p className={css.paragraph}>
            <span className={css.highlightedWords}>Enterprise customers</span> hire us to build and maintain the web apps
            critical to their operations.
          </p>
          <p className={css.paragraph}>
          <span className={css.highlightedWords}>Tech startups</span> partner with us to build and maintain the web
            front-ends and back-ends at the core of their business.
          </p>
        </React.Fragment>
      }
    />

);

export default WhoWeServe;