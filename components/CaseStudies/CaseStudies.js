import css from "./CaseStudies.css";
import PortfolioItem from "./PortfolioItem"

const CaseStudies = props => {
  let portfolioItems = props.caseStudiesArray.map((item, index) => {
    return (
    <PortfolioItem 
      name={item.title.rendered}
      bgImgUrl={item._embedded["wp:featuredmedia"][0].source_url}
      // linkToSite={item.meta_box.labs_linkdirectlytowebsiteurl}
      typeOfProduct={item._embedded["wp:term"][1]}
      techUsedArray={item._embedded["wp:term"][0]}
      key={index}
    />)
  })

  return <div className={css.sectionContainer}>{portfolioItems}</div>;
};

export default CaseStudies;
