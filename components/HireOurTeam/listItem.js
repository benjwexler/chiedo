import css from "./HireOurTeam.css";

const listItem = props => (

     <li className={css.listItem}>
        {props.text}
     </li>
  );
  
  export default listItem;