import css from "./FeaturedPost.css";
import Button from "../Button/Button.js";
import Link from "next/link";

{/* <Link href={props.href}> */}

const FeaturedPost = props => (
  <div className={css.container}>
    <div className={css.sectionTitle}>
      <span className={css.firstWord}>FEATURED</span> Post
    </div>
    <Link href="/">
    <a  className={css.articleTitleContainer}>{props.title}</a>
    </Link>
  </div>
);

export default FeaturedPost;
