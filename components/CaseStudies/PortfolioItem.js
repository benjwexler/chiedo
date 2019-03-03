import css from "./CaseStudies.css";
import Link from "next/link";

const PortfolioItem = props => (
    <Link href="https://www.husel.com/">
  <a target="_blank" className={css.itemContainer}>
    <div className={css.textContainer}>
      <h4 className={css.itemTitle}>BirgeWate Collegeedeeeeeeeeeeeeeeeefrhnf8in</h4>
      <div className={css.techUsedContainer}>
        <div>web-app</div>
        <div>php</div>
      </div>
    </div>
  </a>
  </Link>
);

export default PortfolioItem;
