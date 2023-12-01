import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";

function Contact() {
    return (
        <div>
            <Navbar/>
            <HeroSection
                name="hero-contact"
                img="/Image/contact.jpg"
                title="CONTACT"
            />

            <Footer/>
        </div>
      );
}
export default Contact;