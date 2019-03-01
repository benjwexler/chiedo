import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import MainSection from '../components/MainSection/MainSection';
import App from '../components/App/App.js';

const Index = () => (
    <div>
 
    <Header
        imageUrl="https://labs.chiedo.com/wp-content/themes/chiedolabs/img/b-logo-white.png?ver=1.11"
    />
  
    <Navbar/>
    <MainSection 
    tagline={<div>Your New<br/>Web Developers</div>}
    description="We’re a team of web developers passionate about building stable, maintainable software for tech startups and enterprise customers."
    />
    </div>
  )
  
  export default Index