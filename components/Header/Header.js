import Link from "next/link";
import css from "./Header.css";

const Header = props => (
  <div className={css.header}>
  <link rel="stylesheet" id="google-fonts-css" href="//fonts.googleapis.com/css?family=Open+Sans%3A400%2C700%2C300%2C800&amp;ver=5.0.3" type="text/css" media="all"/>
    <Link href="">
      <a>
        <img className={css.headerImage} src={props.imageUrl} />
      </a>
    </Link>
  </div>
);

export default Header;
