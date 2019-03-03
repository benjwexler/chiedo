import css from "./CaseStudies.css";

const CaseStudies = props => (
  <div className={css.sectionContainer}>
  {props.children}
  </div>
);

export default CaseStudies;
