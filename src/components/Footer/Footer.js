import { Container } from "reactstrap"
import img1 from "../../img/logoheadphone.png"
import "./Footer.css"
export default function Footer() {

    return (
        <div>
            <Container className="footer">
            <div className="row">
                <div className="first col-md-3 col-sm-6 col-ms-12">
                    <a href='#' className='logo1'>  <img src={img1}></img><h1 > SoundG</h1></a>
                    <p>About SoundG</p>
                    <a href="#" className="click">Click to read more</a>
                </div>
                <ul className="col-md-3 col-sm-6 col-ms-12">
                    <p>QUESTIONS?</p>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Customer Service / FAQ's</a></li>
                    <p>INFORMATION?</p>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Read Our Blog</a></li>
                </ul>
                <ul className="col-md-3 col-sm-6 col-ms-12">
                    <p>WHY <span>SOUNDG</span></p>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">30 day returns</a></li>
                    <li><a href="#">Official stockist of all brands</a></li>
                    <li><a href="#">Secure checkout</a></li>
                    <li><a href="#">The best customer service</a></li>
                </ul>
                <ul className="col-md-3 col-sm-6 col-ms-12">
                    <p>CONTACT <span>NECSHOP</span></p>
                    <li><i class="fa-solid fa-location-dot"></i>8901 Marmora Road,
                        Glasgow, D04 89GR.</li>
                    <li><i class="fa-solid fa-phone"></i>+1 800 559 6580
                        +1 504 889 9898</li>
                    <li><i class="fa-regular fa-envelope"></i>mail@demolink.org</li>
                </ul>
                </div>
                <div className="border"></div>
                <div className="icon1">
                    <div className="left">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-pinterest"></i>
                    <i class="fa-brands fa-google"></i>                   
                    </div>       
                    <label>NEWSLETTER</label>
                    <div className="right">
                    <input type="text"></input><button>Subcribe</button>
                </div>
                </div>
                <div className="footer1">
                <div className="left col-md-6 col-sm-6 col-xs-12 ">
                    <ul>
                        <li><a href="#">SOUNDG<span> © 2016.</span></a></li>
                        <li><a href="#"> PRIVACY POLICY</a></li>
                        <li><a href="#"> ABOUT US</a></li>
                        <li><a href="#"> BLOG</a></li>
                        <li><a href="#"> CONTACTS</a></li>
                    </ul>
                </div>
                <div className="right col-md-6 col-sm-6 col-xs-12 ">

                </div>
                </div>
            </Container>
        </div>
    )
}