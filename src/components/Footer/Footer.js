import { Col, Container, Row } from "reactstrap"
import img1 from "../../img/logofooter.png"
import "./Footer.css"


export default function Footer() {
    return (
        <div>
            <div className="footer">
                <Container>
                    <Row>
                            <div className="address-footer">
                            <Col sm="12" md="6" lg="3">
                                <div className="address-footer1">
                                    <h5>Hà Nội Store</h5>
                                    <p>Số 11 Đường Ven Sông Lừ, P. Kim Liên, Q. Đống Đa, TP. Hà Nội</p>
                                </div>
                                </Col>
                                <Col sm="12" md="6" lg="3">
                                <div className="address-footer1">
                                    <h5>Hà Nội Store</h5>
                                    <p>Số 11 ngõ 41 Đông Tác, P.  Kim Liên, Q. Đống Đa, TP. Hà Nội</p>
                                </div>
                                </Col>
                                <Col sm="12" md="6" lg="3">
                                <div className="address-footer1">
                                    <h5>Hồ Chí Minh Store</h5>
                                    <p>Số 62 Đường Hoa Cau, Phường 7, Q. Phú Nhuận, TP. HCM</p>
                                </div>
                                </Col>
                                <Col sm="12" md="6" lg="3">
                                <div className="address-footer1">
                                    <h5>Hồ Chí Minh Store</h5>
                                    <p>Đường Đông Hưng Thuận 2, p, Tân Hưng Thuận, Quận 12. TP. HCM</p>
                                </div>
                                </Col>
                            </div>
                        
                    </Row>
                    <div className="border"></div>
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