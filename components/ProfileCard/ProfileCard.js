import css from "./ProfileCard.css";

const ProfileCard = props => (
  <div className={css.ProfileCard}>
  <img className={css.profilePic} src={props.picSrc}/>
  <div className={css.profileDescription}>
      <div className={css.profileName}>{props.name}</div>
      <div className={css.jobDescription}>{props.jobDescription}</div>
  </div>
</div>
);

export default ProfileCard;