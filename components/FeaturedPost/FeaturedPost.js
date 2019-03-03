import css from "./FeaturedPost.css";
import Button from "../Button/Button.js";

const FeaturedPost = props => (
  <div className={css.container}>
    <div className={css.sectionTitle}>
      <span className={css.firstWord}>FEATURED</span> Post
    </div>
    <h4 className={css.articleTitleContainer}>{props.title}</h4>
  </div>
);

export default FeaturedPost;
