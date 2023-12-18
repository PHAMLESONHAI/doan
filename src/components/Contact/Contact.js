import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap"
import "./Contact.css"
import img1 from"../../img/messenger.svg"
import img2 from"../../img/phone.svg"
import img3 from"../../img/zalo.png"
import img4 from"../../img/email.svg"

export default function Contact() {

    return (
        <div>
            <Container>
                <Row>
                    <div className="address-footer">
                        <Col sm="12" md="6" lg="3">
                            <div className="address-footer1">
                                <h5>Hà Nội Store</h5>
                                <p>Số 11 Đường Ven Sông Lừ, P. Kim Liên, Q. Đống Đa, TP. Hà Nội</p>
                                <p>Phone: 0928 759 555</p>
                                <p>Email: onemax.sound@gmail.com</p>
                            </div>
                        </Col>
                        <Col sm="12" md="6" lg="3">
                            <div className="address-footer1">
                                <h5>Hà Nội Store</h5>
                                <p>Số 11 ngõ 41 Đông Tác, P.  Kim Liên, Q. Đống Đa, TP. Hà Nội</p>
                                <p>Phone: 0928 759 555</p>
                                <p>Email: onemax.sound@gmail.com</p>
                            </div>
                        </Col>
                        <Col sm="12" md="6" lg="3">
                            <div className="address-footer1">
                                <h5>Hồ Chí Minh Store</h5>
                                <p>Số 62 Đường Hoa Cau, Phường 7, Q. Phú Nhuận, TP. HCM</p>
                                <p>Phone: 0928 759 555</p>
                                <p>Email: onemax.sound@gmail.com</p>
                            </div>
                        </Col>
                        <Col sm="12" md="6" lg="3">
                            <div className="address-footer1">
                                <h5>Hồ Chí Minh Store</h5>
                                <p>Đường Đông Hưng Thuận 2, p, Tân Hưng Thuận, Quận 12. TP. HCM</p>
                                <p>Phone: 0928 759 555</p>
                                <p>Email: onemax.sound@gmail.com</p>
                            </div>
                        </Col>
                    </div>
                    <div className="main-contact">
                        <div className="contact-left">
                            <Form>
                                <Row>
                                    <Col sm="12" md="6" lg="6">
                                        <FormGroup>
                                            <Input
                                                id="exampleEmail"
                                                placeholder="Fisrt Name"
                                                type="email"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="12" md="6" lg="6">
                                        <FormGroup>
                                            <Input
                                                id="examplePassword"
                                                placeholder="Last Name"
                                                type="password"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Input
                                        id="exampleAddress"
                                        placeholder="Email"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">
                                        Text Area
                                    </Label>
                                    <Input
                                        id="exampleText"
                                        name="text"
                                        type="textarea"
                                    />
                                </FormGroup>
                                <button>Send Messge</button>

                            </Form></div>
                        <div className="contact-right">
                            <h5>Phản ánh dịch vụ</h5>
                            <div className="complan"> 
                            <div className="complan-left">
                            <img src={img1}></img>
                            </div>
                            <div className="complan-right">
                                <p>Messenger</p>
                            </div>
                            </div>
                            <div className="complan"> 
                            <div className="complan-left">
                            <img src={img2}></img>
                            </div>
                            <div className="complan-right">
                                <p>092 6562 888</p>
                            </div>
                            </div>
                            <div className="complan"> 
                            <div className="complan-left">
                            <img src={img3}></img>
                            </div>
                            <div className="complan-right">
                                <p>Zalo</p>
                            </div>
                            </div>
                            <div className="complan"> 
                            <div className="complan-left">
                            <img src={img4}></img>
                            </div>
                            <div className="complan-right">
                                <p>Email: onemax.sound@gmail.com</p>
                            </div>
                            </div>
                            <div className="border"></div>
                        <div className="icon2">
                        <a href=""><i class="fa-brands fa-facebook"></i></a>
                        <a href=""><i class="fa-brands fa-twitter"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href=""><i class="fa-brands fa-pinterest"></i></a>
                        <a href=""><i class="fa-brands fa-telegram"></i></a></div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}