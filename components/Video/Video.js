// import Link from "next/link";
import css from "./Video.css";

const Video = props => (
  <div className={css.videoWrapper}>
    <video autoPlay loop muted className={css.video}>
      <source type="video/mp4" src={props.src} />
    </video>
  </div>
);

export default Video;
