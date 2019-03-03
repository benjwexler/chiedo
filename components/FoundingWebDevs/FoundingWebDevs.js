import css from "./FoundingWebDevs.css";
import ProfileCard from "../ProfileCard/ProfileCard.js";
import Button from "../Button/Button.js";

const FoundingWebDevs = props => (
  <div className={css.FoundingWebDevs}>
    <div className={css.sectionTitle}>OUR FOUNDING WEB DEVELOPERS</div>
    <div className={css.cardsContainer}>
      <ProfileCard name="Chiedo" jobDescription="Founder, Solutions Architect"/>
      <ProfileCard name="Ricardo" jobDescription="ReactJS / Front-End Master"/>
      <ProfileCard name="Eric" jobDescription="Ruby on Rails / Back-end Pro"/>
      <ProfileCard name="Don" jobDescription="NodeJS / Full Stack Expert"/>
    </div>
    <Button
    href="https://labs.chiedo.com/page/contact/"
    style={{background: "#3d4952"}}
    text="Get A Quote" />
  </div>
);

export default FoundingWebDevs;
