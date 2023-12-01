import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";

function Cart() {
    return (
        <div>
            <Navbar/>
            <HeroSection
                name="hero-about"
                img="/Image/about.jpg"
                title="Cart"
            />

            <Footer/>
        </div>
      );
}

export default Cart;