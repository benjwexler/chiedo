// npm modules & utils

import React, { Component } from "react";
import Head from "next/head";
import { connect } from "react-redux";
import { fetchData} from "../redux/store";

// components

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import MainSection from "../components/MainSection/MainSection";
import HireOurTeam from "../components/HireOurTeam/HireOurTeam";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import WhoWeServe from "../components/WhoWeServe/WhoWeServe";
import FoundingWebDevs from "../components/FoundingWebDevs/FoundingWebDevs";
import StartupCulture from "../components/StartupCulture/StartupCulture";
import FeaturedPost from "../components/FeaturedPost/FeaturedPost";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import MeetOurFounder from "../components/MeetOurFounder/MeetOurFounder";
import MoreLinks from "../components/MoreLinks/MoreLinks";

// CSS

import cssMiscellaneous from "../css-miscellaneous/css-miscellaneous.css";
import HireOurTeamCss from "../components/HireOurTeam/HireOurTeam.css";

class Index extends Component {
  static async getInitialProps({ store }) {
    const featuredPost = await store.dispatch(
      fetchData(
        "http://labs.chiedo.com/wp-json/wp/v2/posts?orderby=date&&per_page=1",
        "featuredPost"
      )
    );
    const caseStudies = await store.dispatch(
      fetchData(
        "http://labs.chiedo.com/wp-json/wp/v2/case-studies?_embed",
        "caseStudies"
      )
    );

    return { featuredPost, caseStudies };
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
        <WhoWeServe />
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
            title={this.props.featuredPost.title.rendered}
            href={this.props.featuredPost.link}
          />
        </div>

        <CaseStudies caseStudiesArray={this.props.caseStudies} />
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
              Copyright 2019 © Chiedo Labs, LLC.
            </div>
          </div>
          <MoreLinks />
        </div>
      </div>
    );
  }
}

// export default Index;
export default connect(state => state)(Index);
