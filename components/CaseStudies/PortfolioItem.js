import css from "./CaseStudies.css";
import Link from "next/link";


const PortfolioItem = props => {

  // let typeOfProduct = props.typeOfProduct.map((item, index) => {
  //   return <div key={index}>{item.name}</div>
  // })

<<<<<<< HEAD
  // let techUsedDivs = props.techUsedArray.map((item, index) => {
  //   return <div key={index}>{item.name}</div>
  // })

=======
  let techUsedDivs = props.techUsedArray.map((item, index) => {
    return <div key={index}>{item.name}</div>
  })
  // Link href={props.linkToSite}>
>>>>>>> fe0818ba7b25fc63da16f8fdd2cbaa247b86b76b
  return (
    <Link href="/">
  <a style={{background: `url(${props.bgImgUrl}) center no-repeat`, backgroundSize: "100%"}} target="_blank" className={css.itemContainer}>
    <div className={css.textContainer}>
      <h4 className={css.itemTitle}>{props.name}</h4>
      <div className={css.techUsedContainer}>
        {/* {typeOfProduct}
        {techUsedDivs} */}
      </div>
    </div>
  </a>
  </Link>
  )
}

export default PortfolioItem;
