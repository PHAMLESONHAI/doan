import { Col, Container, Row } from "reactstrap";
import "./Blogs.css"
import img1 from "../../img/Blog1.jpg"
import img2 from "../../img/blogs1.jpg"
import img3 from "../../img/blogs3.webp"
import img4 from "../../img/blogs4.jpg"
import img5 from "../../img/blogs5.jpg"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Blogs() {

    return (
        <div>
            <div className="header-menu">
                <Header />
            </div>
            <Container>
                
                <Row>
                    <div className="main-blogs">
                        <div className="text-blogs">
                            <h2> Review tai nghe Marshall Major 4. </h2>
                            <p>Posted by Marshall Store Vietnam</p>
                            <img src={img1}></img>
                        </div>
                        <div className="text-blogs1">
                            <h5>Tổng quan về Marshall Major 4</h5>
                            <p>-Marshall, hãng sản xuất nhạc cụ Vương quốc Anh, đã tạo được sự chú ý đặc biệt khi cho ra đời những mẫu tai nghe đình đám. Mới đây
                                nhất là chiếc tai nghe Marshall Major 4 ,hôm nay mình sẽ mở hộp và đưa ra 1 vài đánh giá để các bạn tham khảo</p>
                            <p>-Vỏ hộp Marshall Major 4 khá bắt mắt với thiết kế đơn giản,nhỏ gọn,tinh tế
                                . Sản phẩm có 2 màu: Black (đen chữ trắng,Headband bọc da), Brown (Nâu) .</p>
                        </div>
                        <div className="text-blogs">
                            <img src={img2}></img>
                        </div>
                        <div className="text-blogs1">
                            <p>-Dưới đây là phiên bản Black, mở bên trong hộp người dùng sẽ nhìn thấy ngay toàn bộ những gì
                                mà nhà sản xuất muốn nhấn mạnh ở chiếc tai nghe này. 2 tông màu đen & trắng được sử dụng tạo sự sang trọng .</p>
                            <p>-Marshall Major 4 khá nhẹ, vẻ bề ngoài thiết kế thiên về xu hướng cổ điển
                                . Headband của chiếc tai nghe là một miếng da trơn được khâu tỉ mỉ tạo cho ta cảm giác rất mềm và êm ái!</p>
                        </div>
                        <div className="text-blogs">
                            <img src={img3}></img>
                        </div>
                        <div className="text-blogs1">
                            <h5>Cảm giác đeo Marshall Major 4</h5>
                            <p>-Phần headband được bọc một lớp da mềm mịn và rất êm, đeo lên không có cảm giác bị đau đầu hay cấn.</p>
                            <p>-Trọng lượng tai nghe khá nhẹ nên cho dù có đeo lâu cũng không bị nặng đầu.</p>
                            <p>-Tai nghe phù hợp với mọi kiểu hay kích thước đầu của người trưởng thành từ nhỏ đến lớn bởi phần earcup có
                                thể dễ dàng linh hoạt kéo ra kéo vào, nên bạn nào có đầu to quá thì cũng không cần phải lo lắng là đeo không vừa đâu nhé.</p>
                            <p>-Đây là tai nghe kiểu onear, phần pad tai mềm mại như tay bạn gái, êm ái, không bị khô cứng khi áp sát vào tai.</p>
                            <p>-Và có thể nói Major 4 là một chiếc tai nghe Bluetooth chụp tai cho cảm giác đeo rất sướng và cực kỳ thoải mái.</p>
                            <p>-Đặt tai nghe lên tai bạn có thể thấy được sự êm ái & mềm mại đến từ hai
                                driver và Headband .Ngoài ra khả năng cách âm của tai nghe rất tốt, khi đặt lên tai, bạn không thể nghe bất kì tiếng ồn nào xung quanh nữa và hãy nhắm mắt lại, để bắt đầu trải nghiệm được đắm chìm trong thế giới của âm thanh.</p>
                        </div>
                        <div className="text-blogs">
                            <img src={img4}></img>
                        </div>
                        <div className="text-blogs1">
                            <h5>Chất lượng âm thanh Major 4</h5>
                            <p>-Dải Bass: Thử với Hotel California (live) của Eagle, Make Your Move(Album version) mình thấy được sự chi tiết đến không ngờ khi bạn có thể nghe được từng tiếng ghi-tar vang lên trong trẻo.Dải bass đã thể hiện được ưu điểm tiếng bass xuống sâu khi âm trống xuất hiện , SUB BASS rung từng nhịp trong lồng ngực, mid bass & upper bass rất chi tiết, tròn, ấm, âm hình khiến bạn cảm thấy “từng khối từng khối” âm thanh đang đập vào màng tai của mình.</p>
                            <p>-Dải MID : Trong bài (Mẹ Yêu Con-Anh Thơ) mình thấy ở LOW MID và HIGH MID rất tròn và sâu, từng tiếng hát, tiếng lấy hơi của ca sĩ, , tiếng ngân đều đượ
                                c hiện rõ trong bản nhạc, dải MID được cải thiện bởi âm trường, khi bạn thấy sự vang vọng âm thanh trong không gian.</p>
                            <p>-Dải Treble : Với độ tái tạo âm thanh cực tốt thì dù âm treble không
                                phải là 1 thế mạnh của Marshall Major 4 nhưng cũng được kéo lên để ngang hàng với dải Treble ở mức độ âm sâu hơn, MID TREBLE và HIGH TREBLE thể hiện rất tốt trong tổng thể âm của bản nhạc, sự xuất hiện của HIGH TREBLE làm cho âm treble trong trẻo đến tinh khiết khi nghe bài hát của bạn.</p>
                        </div>
                        <div className="text-blogs">
                            <img src={img5}></img>
                        </div>
                        <div className="text-blogs1">
                            <h5>Chất lượng âm thanh Major 4</h5>
                            <p>-Dải Bass: Thử với Hotel California (live) của Eagle, Make Your Move(Album version) mình thấy được sự chi tiết đến không ngờ khi bạn có thể nghe được từng tiếng ghi-tar vang lên trong trẻo.Dải bass đã thể hiện được ưu điểm tiếng bass xuống sâu khi âm trống xuất hiện , SUB BASS rung từng nhịp trong lồng ngực, mid bass & upper bass rất chi tiết, tròn, ấm, âm hình khiến bạn cảm thấy “từng khối từng khối” âm thanh đang đập vào màng tai của mình.</p>
                            <p>-Dải MID : Trong bài (Mẹ Yêu Con-Anh Thơ) mình thấy ở LOW MID và HIGH MID rất tròn và sâu, từng tiếng hát, tiếng lấy hơi của ca sĩ, , tiếng ngân đều đượ c hiện rõ trong bản nhạc, dải MID được cải thiện bởi âm trường, khi bạn thấy sự vang vọng âm thanh trong không gian.</p>
                            <p>-Dải Treble : Với độ tái tạo âm thanh cực tốt thì dù âm treble không phải là 1 thế mạnh của Marshall Major 4 nhưng cũng được kéo lên để ngang hàng với dải Treble ở mức độ âm sâu hơn, MID TREBLE và HIGH TREBLE thể hiện rất tốt trong tổng thể âm của bản nhạc, sự xuất hiện của HIGH TREBLE làm cho âm treble trong trẻo đến tinh khiết khi nghe bài hát của bạn.</p>
                        </div>
                    </div>
                    <div className="border"></div>
                    <div className="icon2">
                        <a href=""><i class="fa-brands fa-facebook"></i></a>
                        <a href=""><i class="fa-brands fa-twitter"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href=""><i class="fa-brands fa-pinterest"></i></a>
                        <a href=""><i class="fa-brands fa-telegram"></i></a></div>
                </Row>
            </Container>
            <div className="footer-menu">
                <Footer />
            </div>
        </div >
    )
}