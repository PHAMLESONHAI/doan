import { Container } from "reactstrap"
import img1 from "../../img/logofooter.png"
import "./Footer.css"


export default function Footer() {
    return (
        <div>
            <div className="footer">
                <Container>
                <div className="row">
                    <div className=" col-md-3 col-sm-6 col-ms-12">
                        <div className="first">
                            <a href='#' className='logo1'>  <img src={img1}></img></a>
                            <p>Marshall Store Vietnam mong muốn đem đến những sản phẩm đẹp, 
                            chất lượng cùng những câu chuyện và những trải nghiệm mới mẻ cho khách hàng của mình với dịch vụ tốt nhất. </p>
                            <a href="#" className="click">Click to read more</a>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-ms-12">
                        <div className="footer-box">
                            <ul >
                                <p>Categories</p>
                                <li><a href="#">Portable Speakers</a></li>
                                <li><a href="#">Home Speakers</a></li>
                                <li><a href="#">Headphones</a></li>
                                <li><a href="#">Phụ kiện Marshall</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-ms-12">
                        <div className="footer-box">
                            <ul >
                                <p>WHY <span>MARSHALL</span></p>
                                <li><a href="#">Promotions</a></li>
                                <li><a href="#">Stores</a></li>
                                <li><a href="#">Our contacts</a></li>
                                <li><a href="#">Delivery & Return</a></li>
                                <li><a href="#">Outlet</a></li>
                            </ul>
                        </div>
                    </div >
                    <div className="col-md-3 col-sm-6 col-ms-12">
                        <div className="footer-box">
                            <ul>
                                <p>MARSHALL STORE<span>  VIETNAM</span></p>
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