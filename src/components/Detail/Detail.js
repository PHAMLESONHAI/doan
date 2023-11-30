import { Col, Container, Row } from "reactstrap"
import "./Detail.css"
import img1 from "../../img/loadetail1.png"
import img2 from "../../img/loadetail2.png"
import img3 from "../../img/loadetail3.png"
import img4 from "../../img/payment-methods.jpg"
import img5 from "../../img/canhtay.webp"
import img6 from "../../img/taiphone.webp"
import img7 from "../../img/taiphone1.png.webp"
import img8 from "../../img/loapod.webp"
import img9 from "../../img/usp04-major-iv.jpg.webp"
import img10 from "../../img/usp05-major-iv.jpg.webp"
import img11 from "../../img/usp06-major-iv.jpg.webp"
import img12 from "../../img/08-usp07-major-iv-desktop@1.41x.png.webp"



export default function Detail() {
    return (
        <div>
            <Container className="detail">

                <Row >
                    <Col sm="12" md="6" lg="12">
                        <div className="top-detail">
                            <div className="left-top-detail">
                                <p>TRANG CHỦ / TAI NGHE MARSHALL / ON-EAR / MARSHALL MAJOR 4</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="6" lg="2">
                        <div className="left-product-detail  " >
                            <ul>
                                <li><a href="#"><img src={img1}></img></a></li>
                                <li><a href="#"><img src={img2}></img></a></li>
                                <li><a href="#"><img src={img3}></img></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm="12" md="6" lg="4">
                        <div className="mid-product-detail " >
                            <ul>
                                <li><a href="#"><img src={img1}></img></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                        <div className="right-product-detail">
                            <div className="title-product-detail">
                                <h3> MARSHALL MAJOR 4</h3>
                            </div>
                            <div className="evaluate">
                                <i class="fa-solid fa-star" style={{ color: "#e2e524" }}></i>
                                <i class="fa-solid fa-star" style={{ color: "#e2e524" }}></i>
                                <i class="fa-solid fa-star" style={{ color: "#e2e524" }}></i>
                                <i class="fa-solid fa-star" style={{ color: "#e2e524" }}></i>
                                <i class="fa-solid fa-star" style={{ color: "#e2e524" }}></i>(233 đánh giá của khách hàng)
                            </div>
                            <div className="cost">
                                <del>3.890.000 đ</del> <span>2.890.000 đ</span>
                            </div>
                            <div className="color">
                                <div><p>Màu : </p></div>
                                <div className="sub-color"></div>
                            </div>
                            <div className="buy">''
                                <div className="quantity">
                                    <span className="apart">-</span><span>1</span><span className="plus">+</span>
                                </div>
                                <p className="add-cart">Thêm Vào Giỏ Hàng</p>
                                <p>Buy Now</p>
                            </div>
                            <div className="border"></div>
                            <div className="share">
                                <div className="left-share">
                                    <a href=""><i class="fa-solid fa-shuffle"></i><span>Compare</span></a>
                                    <a href=""><i class="fa-regular fa-heart"></i><span>Add to wishlist</span></a>
                                </div>
                                <Col sm="12" md="6" lg="1">
                                    <div className="right-share">
                                        <span>Share:</span>
                                        <a href=""><i class="fa-brands fa-facebook"></i></a>
                                        <a href=""><i class="fa-brands fa-twitter"></i></a>
                                        <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                                        <a href=""><i class="fa-brands fa-pinterest"></i></a>
                                        <a href=""><i class="fa-brands fa-telegram"></i></a>
                                    </div>
                                </Col>
                            </div>
                            <div className="ship">
                                <Col sm="12" md="12" lg="12">
                                    <div className="ship-above">
                                        <div className="sub-ship-left">
                                            <i class="fa-solid fa-store"></i> Nhận hàng nhanh tại store
                                            <p>Nhận ngay trong ngày</p>
                                        </div>
                                        <div className="sub-ship-right">
                                            <p>Miễn phí</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="12" md="12" lg="12">
                                    <div className="ship-below">
                                        <div className="sub-ship-left1">
                                            <i class="fa-solid fa-truck"></i> Giao hàng chuyển phát nhanh
                                            <p>Chuyển phát nhanh của chúng tôi
                                                sẽ giao hàng đến địa chỉ của bạn</p>
                                        </div>
                                        <div className="sub-ship-right">
                                            <p>Tính phí</p>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                            <div className="refund">
                                <Col sm="12" md="12" lg="12">
                                    <div className="refund-above">
                                        <div className="sub-refund-left">
                                            <i class="fa-solid fa-shield-halved"></i> Bảo hành 1 năm
                                        </div>
                                        <div className="sub-refund-right">
                                            <a href=""><p>Chi tiết</p></a>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="12" md="12" lg="12">
                                    <div className="refund-below">
                                        <div className="sub-refund-left">
                                            <i class="fa-solid fa-box"></i> Đổi trả miễn phí trong 30 ngày
                                        </div>
                                        <div className="sub-refund-right">
                                            <a href=""><p>Chi tiết</p></a>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                            <Col sm="12" md="12" lg="12">
                                <div className="pay">
                                    <span>Payment Methods:</span> <img src={img4}></img>
                                </div>
                            </Col>
                        </div>
                    </Col>
                </Row>

            </Container>
            <div className="detail1">
                <Container >
                    <Row>
                        <div className="info-product-detail">
                            <Col sm="12" md="12" lg="8">
                                <div className="info-product-detail-left">
                                    <div className="sub-info-detail">
                                        <h3>Thông tin sản phẩm</h3>
                                        <p>Tai nghe Marshall Major 4 mang thiết kế đặc trưng của <span>Marshall</span> cho khả năng chơi nhạc không dây lên đến 80 giờ liên tục, bổ sung thêm tính năng sạc không dây và thiết kế được cải tiến đem đến sự thoải mái vượt trội và tiện dụng hơn. Các dải âm được bổ sung tạo ra âm trầm mạnh mẽ, âm trung mượt mà và âm bổng tuyệt vời
                                            khiến cho khoảnh khắc thưởng nhạc trở nên trọn vẹn hơn bao giờ hết.</p>
                                    </div>
                                    <div className="sub-info-detail1">
                                        <div className="sub-info-detail1-left">
                                            <p className="title-detail1">ÂM THANH HOÀN HẢO</p>
                                            <p className="title-detail2">Tai nghe Marshall Major 4 mang âm thanh đặc trưng của Marshall. Hơn 55 năm kinh nghiệm được phát triển trên Marshall Major 4 để tạo ra chất âm bùng nổ. Driver cải tiến tạo ra âm trầm mạnh mẽ, âm trung mượt mà và âm bổng tuyệt vời khiến cho khoảnh khắc thưởng nhạc trở nên trọn vẹn hơn bao giờ hết.</p>
                                        </div>
                                        <div className="sub-info-detail1-right">
                                            <img src={img5}></img>
                                        </div>
                                    </div>
                                    <div className="sub-info-detail1">
                                        <div className="sub-info-detail1-left">
                                            <p className="title-detail1">THỜI GIAN CHƠI NHẠC LÊN TỚI 80 GIỜ</p>
                                            <p className="title-detail2">Tai nghe Marshall Major 4 cung cấp hơn 80 giờ chơi nhạc không dây liên tục với khả năng sạc nhanh – chỉ 15 phút sạc sẽ cho 15 giờ nghe. Đây là những chiếc tai nghe được thiết kế cho những chặng đường dài.</p>
                                        </div>
                                        <div className="sub-info-detail1-right">
                                            <img src={img6}></img>
                                        </div>
                                    </div>
                                    <div className="sub-info-detail1">
                                        <div className="sub-info-detail1-left">
                                            <p className="title-detail1">CÔNG NGHỆ SẠC KHÔNG DÂY</p>
                                            <p className="title-detail2">Tai nghe Marshall Major 4 có thể được sạc không dây, vì vậy việc sạc và sử dụng giờ đây dễ dàng hơn bao giờ hết. Tai nghe sẽ được đặt một cách gọn gàng trên bệ sạc và lớp silicon bên ngoài chụp tai đảm bảo giữ chắc tai nghe. Bạn sẽ tiết kiệm được thời gian tìm kiếm bộ sạc dây và dành nhiều thời gian hơn để nghe nhạc.</p>
                                        </div>
                                        <div className="sub-info-detail1-right">
                                            <img src={img7}></img>
                                        </div>
                                    </div>
                                    <div className="sub-info-detail1">
                                        <div className="sub-info-detail1-left">
                                            <p className="title-detail1">BLUETOOTH THẾ HỆ MỚI NHẤT</p>
                                            <p className="title-detail2">Loa Marshall Stanmore 31được thiết kế để đáp ứng trọn vẹn công nghệ Bluetooth trong tương lai và đã được xây dựng để cung cấp các tính năng của Bluetooth thế hệ mới nhất ngay khi chúng ra mắt. Cập nhật qua mạng (OTA) trên ứng dụng của Marshall để đảm bảo rằng loa của bạn luôn trong phiên bản phần mềm với các tính năng mới nhất. Công nghệ dẫn đầu trong tương lai này sẽ mang lại chất lượng âm thanh cao nhất có thể, đồng thời tăng phạm vi phát trực tuyến và cải thiện khả năng đồng bộ hóa âm thanh.</p>
                                        </div>
                                        <div className="sub-info-detail1-right">
                                            <img src={img8}></img>
                                        </div>
                                    </div>
                                    <Col sm="12" md="12" lg="11">

                                        <div className="usb">
                                            <div className="left-usb">
                                                <img src={img9}></img>
                                                <h4>THIẾT KẾ THOẢI MÁI</h4>
                                                <p>Thiết kế thoải mái cho mọi đối tượng được cải tiến ở Tai nghe Marshall Major 4. Dù bạn nghe nhạc bao lâu vẫn đem lại cảm giác thoải mái như lúc đầu. Đệm tai của
                                                    Marshall Major IV mềm hơn và phù hợp với nhiều hình dạng tai của người sử dụng</p>
                                            </div>
                                            <div className="mid-usb">
                                                <img src={img10}></img>
                                                <h4>NÚM ĐIỀU KHIỂN</h4>
                                                <p>Với núm điều khiển đa hướng, bạn có thể phát, tạm dừng, bỏ qua và điều chỉnh âm lượng của thiết bị, cũng như bật hoặc tắt nguồn tai nghe. Chức năng dành cho điện thoại cũng được
                                                    bao gồm để bạn có thể trả lời, từ chối hoặc kết thúc cuộc gọi bằng một vài cú nhấn nút đơn giản.</p>
                                            </div>
                                            <div className="right-usb">
                                                <img src={img11}></img>
                                                <h4>CHIA SẺ ÂM NHẠC</h4>
                                                <p>Khi tai nghe gần hết pin, bạn có thể sử dụng dây 3.5mm để tiếp tục nghe nhạc.
                                                    Và bạn cũng có thể cắm dây 3.5mm vào một tai nghe khác để cùng nghe nhạc với bạn bè.</p>
                                            </div>
                                        </div>
                                        </Col>

                                </div>
                            </Col>
                            <Col sm="12" md="6" lg="4">
                                <div className="info-product-detail-right">dsadsa</div>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>

    )
}