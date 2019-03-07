// npm modules & utils

import React, { Component } from "react";
import { Provider } from 'react-redux';
import redux from 'redux';
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import {reducer, fetchData, itemsFetchDataSuccess} from '../redux/store.js';
import configureStore from '../redux/store.js';
import { connect, mapState } from 'react-redux'
import withRedux from 'next-redux-wrapper'

// Components

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import MainSection from "../components/MainSection/MainSection";
import HireOurTeam from "../components/HireOurTeam/HireOurTeam";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import WhoWeServe from "../components/WhoWeServe/WhoWeServe2";
import FoundingWebDevs from "../components/FoundingWebDevs/FoundingWebDevs";
import StartupCulture from "../components/StartupCulture/StartupCulture";
import FeaturedPost from "../components/FeaturedPost/FeaturedPost";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import MeetOurFounder from "../components/MeetOurFounder/MeetOurFounder";
import MoreLinks from "../components/MoreLinks/MoreLinks";
import Head from "next/head";


import cssMiscellaneous from "../css-miscellaneous/css-miscellaneous.css"
import HireOurTeamCss from "../components/HireOurTeam/HireOurTeam.css"



console.log("trying to merge this to become new master - ")

class Index extends Component {

  

  

//   Page.getInitialProps = async ({ store }) => {
//     await store.dispatch(fetchItems());
// };

  static async getInitialProps ({store, isServer, pathname, query} )  {

    // console.log(store)

    // console.log(process.browser) //If false request is from server

    console.log(store)

       let data = await store.dispatch(fetchData("https://public-api.wordpress.com/rest/v1/sites/samwcoding.wordpress.com/posts"))
  //  data.then(({ data }) => data)
  //   console.log("??????")
  //   console.log(data)
  //   console.log("??????")

  return {data: data}

  

  }


    // console.log(this.state.caseStudies)
    // const caseStudiesRes = await fetch(
    //   "https://beta.chiedo.com/wp-json/wp/v2/case-studies?_embed"
    // );
    // const caseStudies = await caseStudiesRes.json();

    // const featuredPostsRes = await fetch(
    //   "https://beta.chiedo.com/wp-json/wp/v2/posts?orderby=date&&per_page=1"
    // );
    // const featuredPosts = await featuredPostsRes.json();

   
    // return {
    //   caseStudies: caseStudies,
    //   featuredPosts: featuredPosts[0],
    // };
  
  
  componentDidMount(){
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <Head>
          <title>
            Chiedo Labs: Custom Web Development - Node.js | React | Rails | PHP
          </title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link
            rel="shortcut icon"
            href="https://labs.chiedo.com/wp-content/themes/chiedolabs/favicon.ico?v=2"
          />
        
        </Head>
        <style jsx global>{`
          body {
            font-family: "Open Sans", sans-serif;
            color: #2c343b;
            background-color: #f2f2f2;
            box-sizing: "border-box";
            overflow-x: hidden;
          }
        `}</style>
        <Header imageUrl="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/b-logo-white.png?ver=1.11" />

        <Navbar />
        <MainSection
          tagline={
            <div>
              Your New
              <br />
              Web Developers
            </div>
          }
          description="We’re a team of web developers passionate about building stable, maintainable software for tech startups and enterprise customers."
        />
        <HireOurTeam
          classNames={`${HireOurTeamCss.FullWidth} ${
            HireOurTeamCss.hireOurTeam
          }`}
        />
        <WhatWeDo />
        <FoundingWebDevs />
        <WhoWeServe 
        />
        <div className={cssMiscellaneous.startupCultureFeaturedPostContainer}>
          <StartupCulture 
            imgSrc="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/img-ricardo-monicle.jpg"
              tagline="Start-up Culture, Corporate-Grade Service."
              text="We create an atmosphere that fosters creativity and professionalism. In this way, we allow our team to hone your vision with our digital strategy and build realities that will take your business to the next level."
              buttonHref="https://labs.chiedo.com/page/contact/"
              buttonText="Get A Quote"
              buttonStyle={{ fontSize: "13px" }}
          />
          <FeaturedPost
            // title={this.props.featuredPosts.title.rendered}
            // href={this.props.featuredPosts.link}
          />
        </div>

        {/* <CaseStudies caseStudiesArray={this.props.caseStudies} /> */}
        <div className={cssMiscellaneous.bottomSectionContainer}>
          <div className={cssMiscellaneous.founderCopyrightContainer}>
            <MeetOurFounder
              imgSrc="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/chiedo-sitting-small.png"
              tagline="Meet Our Founder"
              text="If you need new web developers or want to talk about your tech startup, let's connect on LinkedIn and meet for lunch or coffee!"
              buttonHref="https://www.linkedin.com/in/chiedo/"
              buttonText="CONNECT ON LINKEDIN"
              buttonStyle={{ fontSize: "13px" }}
            />

            <div className={cssMiscellaneous.copyrightFooter}>
            <Link href="/test">
            <a>
              Copyright 2019 © Chiedo Labs, LLC.
              </a>
              </Link>
            </div>
          </div>
          <MoreLinks />
        </div>
      </div>
    );
  }
}

// Index.getInitialProps = () => {
//   // console.log(process.browser)
//   // store.dispatch(fetchData("https://beta.chiedo.com/wp-json/wp/v2/posts?orderby=date&&per_page=1"));

//   // if(!process.browser) {
//   //   return store.dispatch(fetchData("https://beta.chiedo.com/wp-json/wp/v2/posts?orderby=date&&per_page=1"));
//   // } else {
//   //   store.getStore()
//   // }
 
// }

//   Index.getInitialProps = async ({ store }) => {
//     await store.dispatch(fetchData("https://beta.chiedo.com/wp-json/wp/v2/posts?orderby=date&&per_page=1"))


// // static async getInitialProps = ({store, isServer, pathname, query} ) => {

//   // console.log(store)

//   // console.log(process.browser) //If false request is from server

   

// }

// Index.getInitialProps = ({ store }) => store.dispatch(fetchData("https://beta.chiedo.com/wp-json/wp/v2/posts?orderby=date&&per_page=1"));
// console.log(store)
export default connect(state => state )(Index);
// export default withRedux(store)(Index);


