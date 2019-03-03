import css from "./HireOurTeam.css";
import ListItem from "./listItem";

const HireOurTeam = props => (
  <div class={props.classNames}>
  <link rel="stylesheet" id="google-fonts-css" href="//fonts.googleapis.com/css?family=Open+Sans%3A400%2C700%2C300%2C800&amp;ver=5.0.3" type="text/css" media="all"/>
    {props.children}
    <div className={css.sectionTitle}>Hire our team to:</div>
    <div className={css.listContainer}>
      <ListItem text="Build and maintain:" />
      <ListItem text="Web applications" />
      <ListItem text="Web back-ends" />
      <ListItem text="Web front-ends" />
      <ListItem text="Custom websites" />
    </div>
  </div>
);

export default HireOurTeam;
