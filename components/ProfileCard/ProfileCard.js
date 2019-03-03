import css from "./ProfileCard.css";
import Button from "../Button/Button.js";

const ProfileCard = props => (
  <div className={css.ProfileCard}>
  <img className={css.profilePic} src="https://i1.sndcdn.com/artworks-000478704579-o7peaj-t500x500.jpg"/>
  <div className={css.profileDescription}>
      <div className={css.profileName}>{props.name}</div>
      <div className={css.jobDescription}>{props.jobDescription}</div>
  </div>
</div>
);

export default ProfileCard;