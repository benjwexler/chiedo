import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import MainSection from "../components/MainSection/MainSection";
import HireOurTeam from "../components/HireOurTeam/HireOurTeam";
import HireOurTeamCss from "../components/HireOurTeam/HireOurTeam.css";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import WhoWeServe from "../components/WhoWeServe/WhoWeServe";
import FoundingWebDevs from "../components/FoundingWebDevs/FoundingWebDevs";
import StartupCulture from "../components/StartupCulture/StartupCulture";
import FeaturedPost from "../components/FeaturedPost/FeaturedPost";
import cssMiscellaneous from "../css-miscellaneous/css-miscellaneous.css";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import PortfolioItem from "../components/CaseStudies/PortfolioItem";
import Head from "next/head";

const Index = () => (
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
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossorigin="anonymous"
      />
    </Head>
    <style jsx global>{`
      body {
        font-family: "Open Sans", sans-serif;
        color: #2c343b;
        background-color: #f2f2f2;
        box-sizing: "border-box";
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
      classNames={`${HireOurTeamCss.FullWidth} ${HireOurTeamCss.hireOurTeam}`}
    />
    <WhatWeDo />
    <FoundingWebDevs />
    <WhoWeServe />
    <div className={cssMiscellaneous.startupCultureFeaturedPostContainer}>
      <StartupCulture />
      <FeaturedPost title="How to Upgrade PHP in a MAMP Environment" />
    </div>

    <CaseStudies>
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
      <PortfolioItem />
    </CaseStudies>
  </div>
);

export default Index;
