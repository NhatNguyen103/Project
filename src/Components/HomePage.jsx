import "./HomePage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBullhorn} from '@fortawesome/free-solid-svg-icons'

function HomePage() {
    return ( 
        <div className="HomePage">
            <div className="container px-3 mt-5" >
                <div className="row gx-lg-5">
                <div className="card-column col-lg-4 col-md-4 col-sm-10 mx-lg-0 mx-md-auto mx-sm-auto my-lg-0 my-md-0 my-sm-3" data-aos="fade-up" data-aos-duration="1000">
                    <div className="card intro-card intro-card-1  text-center">
                        <div className="card-header ">
                            Exhaust Fans
                            <img src="./image/image1.jpg" className="card-img-top" alt="..."/>
                            
                        </div>              
                            <div className="card-body">
                                <h5 className="card-title ">    Maximum Airflow Minimum Maintenance   </h5>
                                <p className="card-text ">Stay cool and comfortable with industrial ceiling fans and exhaust fans designed for your space</p>
                            </div>
                    </div>
                </div>
                    <div className="card-column col-lg-4 col-md-4 col-sm-10 mx-lg-0 mx-md-auto mx-sm-auto my-lg-0 my-md-0 my-sm-3" data-aos="fade-up" data-aos-duration="1200">
                        <div className="card  intro-card intro-card-2 text-center" >
                            <div className="card-header">
                                Residential Fans
                                <img src="./image/image2.png" className="card-img-top" alt="..."/>
                            </div>
                            <div className="card-body">
                            <h5 className="card-title mb-4 mt-1">Style and Comfort for your Homes</h5>
                            <p className="card-text">
                                Our exquisite residential ceiling fans is a combination of smart design and upscale performance.
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-column col-lg-4 col-md-4 col-sm-10 mx-lg-0 mx-md-auto mx-sm-auto my-lg-0 my-md-0 my-sm-3" data-aos="fade-up" data-aos-duration="1400">
                        <div className="card intro-card intro-card-3 text-center" >
                            <div className="card-header">
                                Directional Fans
                                <img src="./image/image3.png" className="card-img-top" alt="..."/>
                            </div>
                            
                            <div className="card-body">
                                <h5 className="card-title mb-4 mt-1">Control the Airflow</h5>
                                <p className="card-text">
                                    A great combination of huge airflow, low noise levels and powerful motors with an attractive look.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="industries">
                <div>
                    <h1 className="text-center industries-text">
                        FANoFAN
                        <span className="span"> in every</span>  Industry 
                    </h1>
                    <div className="container px-4 ">
                        <div className="row gx-5">
                            <div className="col-lg-7 col-md-7 col-sm-12 mt-lg-0 mt-md-0 mt-sm-5">
                                <div className="container px-0">
                                    {/* image 1 */}
                                    <div className="row gx-4 mt-5">
                                        <div className="col-lg-6 col-md-6 col-sm-10 mx-auto mt-lg-o mt-md-0 mt-sm-4">
                                            <div className="card industries-card ">
                                                <div className="card-header text-center">
                                                    <h5 className="p-0 m-0">
                                                     Education
                                                    </h5>
                                                </div>
                                                <div className="industries-card-img">
                                                    <img className="example-image card-img-top small-image" src="./image/homeimage2.png" alt="..."/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-10 mx-auto mt-lg-o mt-md-0 mt-sm-4">
                                            <div className="card industries-card ">
                                                <div className="card-header text-center">
                                                    <h5 className="p-0 m-0">
                                                        Public Spaces
                                                    </h5>
                                                </div>
                                                <div className="industries-card-img">
                                                    <img className="example-image card-img-top small-image" src="./image/homeimage3.png" alt="..."/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row gx-4 mt-5">
                                        <div className="col-lg-6 col-md-6 col-sm-10 mx-auto mt-lg-o mt-md-0 mt-sm-4">
                                            <div className="card industries-card ">
                                                <div className="card-header text-">
                                                    <h5 class="p-0 m-0">Fitness</h5>
                                                </div>
                                                <div className="industries-card-img">
                                                    <img className="example-image card-img-top small-image" src="./image/homeimage4.png" alt="..."/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-10 mx-auto mt-lg-o mt-md-0 mt-sm-4">
                                            <div className="card industries-card ">
                                                <div className="card-header text-center">
                                                    <h5 className="p-0 m-0">
                                                    Factories
                                                    </h5>
                                                </div>
                                                <div className="industries-card-img">
                                                    <img className="example-image card-img-top small-image" src="./image/homeimage5.png" alt="..."/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-12 mx-auto">
                                <div className="industries-standing-fan ">
                                    <img src="./image/homeimage1.png" className="mx-auto img-fluid" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cooling-tech">
                <div className="container px-4">
                    <div className="row gx-0">
                        <div className="col-lg-7 col-md-10 col-sm-11  mx-auto cooling-tech-img">
                            <img src="./image/5265217.svg" alt="..." className="fan"/>
                        </div>
                        <div className="col-lg-5 col-md-10 col-sm-11 mt-lg-5 mx-auto cooling-tech-text">
                            <div className=" py-5 px-3 text-justify">
                                <h4 className="text-uppercase text-center future" id="h4">
                                    The future o
                                    <span className="future">f cooling technology</span>
                                </h4>
                                <p className="pt-4">
                                    We at 
                                    <b> FANoFAN </b> 
                                    are comitted to bringing you the best and latest technology, anywhere and anytime
                                </p>
                                <p className="py-2">
                                    From factories to homes and everywhere in between, FANoFAN delivers comfort, style, and energy savings that make life
                                    and work more enjoyable.
                                </p>
                                <p className="py-2">
                                    Our fans are easy to install, effortless to maintain and deliver the same efficiency as an industry equivalent that
                                    costs more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="special-sale" >
                    <div class="container px-5">
                        <div class="row gx-5">

                            <div class="col-lg-6 col-md-10 col-sm-12 mt-lg-0 mt-md-5 mt-sm-5 mx-auto special-sale-text" >
                                <div class="p-3 " >
                                    <h2 class="py-4">
                                        SPECIAL OFFER 
                                        <FontAwesomeIcon icon={faBullhorn} />
                                    </h2>
                                        <h4 class="py-2">BARBIE DREAMTOPIA CEILING FAN</h4>
                                        <p className="n2">A fantasy land now brought alive with Usha Barbie Dreamtopia Ceiling Fans. Made with love for your kids</p>
                                        <p className="n2"><del >$150</del>  33.3% discount</p>
                                        <p className="n2">Now at an affordable price of $100</p>
                                        <p className="n2">Get more of our quality products up to a discount of 40%. </p>
                                        <p className="n2">Discounts are available for all categories of fans </p>
                                            <small className="small">*Special offers lasts 2 weeks at most  </small>
                                            
                                </div>
                            </div>
                            <div>
                            <a href="!" className="btn btn-sm btn-blue-grey mt-3 px-3 py-2">View more</a>
                            </div>
                            <div className="col-lg-6 col-md-10 col-sm-12 mt-lg-0 mt-md-5 mt-sm-5 mx-auto special-sale-img" >
                                <div className="rounded">
           
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
     );
}

export default HomePage;