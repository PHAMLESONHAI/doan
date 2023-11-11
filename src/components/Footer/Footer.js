import { Container } from "reactstrap"
import img1 from "../../img/logoheadphone.png"
import "./Footer.css"
import img2 from"../../img/logobank (1).png"
import img3 from"../../img/logobank (2).png"
import img4 from"../../img/logobank (3).png"
import img5 from"../../img/logobank (4).png"
import img6 from"../../img/logobank (5).png"

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <Container>
                <div className="row">
                    <div className=" col-md-3 col-sm-6 col-ms-12">
                        <div className="first">
                            <a href='#' className='logo1'>  <img src={img1}></img><h1 > SoundG</h1></a>
                            <p>About <span >SoundG</span></p>
                            <a href="#" className="click">Click to read more</a>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-ms-12">
                        <div className="footer-box">
                            <ul >
                                <p>QUESTIONS?</p>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Customer Service / FAQ's</a></li>
                                <p>INFORMATION?</p>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Read Our Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-ms-12">
                        <div className="footer-box">
                            <ul >
                                <p>WHY <span>SOUNDG</span></p>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">30 day returns</a></li>
                                <li><a href="#">Official stockist of all brands</a></li>
                                <li><a href="#">Secure checkout</a></li>
                                <li><a href="#">The best customer service</a></li>
                            </ul>
                        </div>
                    </div >
                    <div className="col-md-3 col-sm-6 col-ms-12">
                        <div className="footer-box">
                            <ul>
                                <p>CONTACT <span>NECSHOP</span></p>
                                <li ><i class="fa-solid fa-location-dot"></i>8901 Marmora Road,
                                    Glasgow, D04 89GR.</li>
                                <li ><i class="fa-solid fa-phone"></i>+1 800 559 6580
                                    +1 504 889 9898</li>
                                <li ><i class="fa-solid fa-envelope"></i>mail@demolink.org</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="border">
                    
                </div>

                <div  className="  icon1">
                    <Container>
                    <div className="row">
                       
                        <div className="left ">
                            <div className="sub-left">
                                <a href="#"> <i class="fa-brands fa-facebook"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                <a href="#"><i class="fa-brands fa-pinterest"></i></a>
                                <a href="#"><i class="fa-brands fa-google"></i></a>
                            </div>
                        </div>
                        </div>
                    </Container>
                </div>
                <div className="footer1">
                    <div className="row">
                    <div >
                        <div className="left">
                            <p className="copyright"><a href="#">SoundG</a>©2016.  </p>
                        <ul className="footermenu">
                            <li><a href="#"> PRIVACY POLICY</a></li>
                            <li><a href="#"> ABOUT US</a></li>
                            <li><a href="#"> BLOG</a></li>
                            <li><a href="#"> CONTACTS</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                </Container>
            </div>
        </div>
    )
}