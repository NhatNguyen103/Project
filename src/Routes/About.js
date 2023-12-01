import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";

function About() {
    return (
        <div>
            <Navbar/>
            <HeroSection
                name="hero-about"
                img="/Image/about.jpg"
                title="ABOUT US"
            />

            <Footer/>
        </div>
      );
}

export default About;