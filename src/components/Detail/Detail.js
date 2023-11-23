import { Col, Container, Row } from "reactstrap"
import "./Detail.css"
import img1 from "../../img/loadetail1.png"
import img2 from "../../img/loadetail2.png"
import img3 from "../../img/loadetail3.png"
import img4 from "../../img/loadetail4.png"
import img5 from "../../img/loadetail5.png"

export default function Detail() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm="12" md="6" lg="8">
                        <div className="top-detail">
                            <div className="left-top-detail">
                                <p>TRANG CHỦ / TAI NGHE MARSHALL / ON-EAR / MARSHALL MAJOR 4</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="main-detail">
                    <Col sm="12" md="6" lg="3">
                        <div className="left-product-detail">
                            <ul>
                                <li><a href="#"><img src={img1}></img></a></li>
                                <li><a href="#"><img src={img2}></img></a></li>
                                <li><a href="#"><img src={img3}></img></a></li>
                                <li><a href="#"><img src={img4}></img></a></li>
                                <li><a href="#"><img src={img5}></img></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm="12" md="6" lg="3">
                        <div className="mid-product-detail">
                            <ul>
                                <li><a href="#"><img src={img1}></img></a></li>
                                <li><a href="#"><img src={img2}></img></a></li>
                                <li><a href="#"><img src={img3}></img></a></li>
                                <li><a href="#"><img src={img4}></img></a></li>
                                <li><a href="#"><img src={img5}></img></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm="12" md="6" lg="6">

                    </Col>
                </Row>
            </Container>
        </div>
    )
}