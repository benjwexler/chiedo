import css from "./FoundingWebDevs.css";
import ProfileCard from "../ProfileCard/ProfileCard.js";
import Button from "../Button/Button.js";

const FoundingWebDevs = props => (
  <div className={css.FoundingWebDevs}>
    <div className={css.sectionTitle}>OUR FOUNDING WEB DEVELOPERS</div>
    <div className={css.cardsContainer}>
      <ProfileCard name="Chiedo" jobDescription="Founder, Solutions Architect" picSrc="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-chiedo-new.jpg"/>
      <ProfileCard name="Ricardo" jobDescription="ReactJS / Front-End Master" picSrc="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-ricardo-fearing.jpg"/>
      <ProfileCard name="Eric" jobDescription="Ruby on Rails / Back-end Pro" picSrc="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-eric-duvon.jpg"/>
      <ProfileCard name="Don" jobDescription="NodeJS / Full Stack Expert" picSrc="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-don-townsend.jpg"/>
    </div>
    <Button
    href="https://labs.chiedo.com/page/contact/"
    style={{background: "#3d4952", fontSize: "13px"}}
    text="Get A Quote" />
  </div>
);

export default FoundingWebDevs;
