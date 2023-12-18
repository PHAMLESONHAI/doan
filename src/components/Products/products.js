import "./Products.css"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Card,
  Container,
  Row,
  Col,
} from 'reactstrap';
import axios from "axios"
import { useEffect, useState } from "react"
import img13 from "../../img/loax.png"
import img14 from "../../img/loa2.webp"
import img15 from "../../img/loa3.webp"
import img16 from "../../img/loa4.webp"
import img17 from "../../img/home.png"
import img18 from "../../img/home2.jpeg"
import img19 from "../../img/loa8.webp"
import img20 from "../../img/loa9.webp"
import img21 from "../../img/loa13.png"
import img22 from "../../img/loa15.png"
import img23 from "../../img/loax1.png"
import img24 from "../../img/loax3.png"
import img25 from "../../img/loax4.png"
import img27 from "../../img/person2.jpeg"
import img28 from "../../img/person3.jpeg"
import img29 from "../../img/loadetail1.png"
import img30 from "../../img/Blog1.jpg"
import img31 from "../../img/Blog2.jpg"
import img32 from "../../img/Blog3.jpeg"
import img33 from "../../img/Blog4.jpeg"





import Cardview from "../Cardview/Cardview";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const items = [
  {
    src: 'https://demo.7uptheme.net/html/necshop/images/grid/bn2.jpg',
    altText: 'Slide 1',
    caption: 'Headphone-Accessories-Audio',
    key: 1,
  },
  {
    src: 'https://demo.7uptheme.net/html/necshop/images/grid/bn3.jpg',
    altText: 'Slide 2',
    caption: 'Headphone-Accessories-Audio',
    key: 2,
  },
  {
    src: 'https://demo.7uptheme.net/html/necshop/images/grid/bn4.jpg',
    altText: 'Slide 3',
    caption: 'Headphone-Accessories-Audio',
    key: 3,
  },
  {
    src: 'https://demo.7uptheme.net/html/necshop/images/grid/bn1.jpg',
    altText: 'Slide 4',
    caption: 'Headphone-Accessories-Audio',
    key: 4,
  },
];

export default function Products() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  const imgy = [
    img29
  ]
  const imgx = [
    img13, img20, img23, img19
  ]
  const img = [
    img22, img21, img15, img16
  ]
  const url = `https://6525460267cfb1e59ce6fe2b.mockapi.io/Student`
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(url)
      .then(function (reponse) {
        console.log(reponse)
        setData(reponse.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (

    <div>
      <div className="Header-menu">
        <Header />
      </div>
      <Container>
        <Row>

          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
          <div className="text-home">
            <div className="t-h-left">
              <h5>Sản phẩm hot</h5>
            </div>
            <div className="t-h-right">
              <button>Xem tất cả > </button>
            </div>
          </div>



          {data.slice(0, 4).map((item, index) => {
            return (
              <Cardview item={item} key={index} img={img[index]} />
            )
          })}
          <Container>
            <div className="banner-homev1">
              <div className="b-hv1-left">
                <img src={img17}></img>
              </div>
              <div className="b-hv1-right">
                <h2>LOA DI ĐỘNG</h2>
                <p>Mang âm thanh đặc trưng của Marshall đi khắp mọi nơi bằng
                  loa di động và giữ cho âm nhạc của bạn tiếp tục hàng giờ liền.</p>
                <button>Xem thêm > </button>
              </div>
            </div>
          </Container>
          <div className="product-home">
            <div className="t-h-left">
              <h5>SẢN PHẨM MỚI LOA DI ĐỘNG</h5>
            </div>
            <div className="t-h-right">
              <button>Xem tất cả > </button>
            </div>
          </div>
          {data.slice(0, 4).map((item, index) => {
            return (
              <Cardview item={item} key={index} img={imgx[index]} />
            )
          })}
          <Container>
            <div className="banner-homev2">
              <div className="sub-banner-homev2">
                <div className="b-hv1-left">
                  <img src={img24}></img>
                </div>
                <div className="b-hv1-right text">
                  <h2>LOA NGHE TRONG NHÀ</h2>
                  <p>Đắm chìm trong âm nhạc của bạn và
                    trải nghiệm âm thanh sân khấu lớn trong sự thoải mái tại nhà của bạn.</p>
                  <button>Xem thêm > </button>
                </div>
              </div>
              <Row className="sub-banner-homev3">
                {data.slice(0, 4).map((item, index) => {
                  return (
                    <Cardview item={item} key={index} img={imgx[index]} />
                  )
                })}
              </Row>
            </div>
          </Container>
          <div className="headphone">
            <div className="headphone1">
              <div className="headphoneabove">
                <div className="sub-banner-homev2">
                  <div className="b-hv1-left1">
                    <img src={img25}></img>
                  </div>
                  <div className="b-hv1-right text1">
                    <h2>Tai nghe Marshall</h2>
                    <p> CHO CHÚNG TÔI ĐÔI TAI CỦA BẠN VÀ CHÚNG TÔI SẼ GIÚP BẠN NGHE MỘT BÀI NHẠC</p>
                    <button>Xem tất cả > </button>
                  </div>
                </div>
              </div>
              <div className="headphonebelow">
                <div className="headphonebelow1">
                  <a href="#"><img src={img27}></img></a>
                  <h5>
                    IN-EAR HEADPHONES
                  </h5>
                  <div className="headphonetext">
                    <button>Xem thêm</button>
                  </div>
                </div>
                <div className="headphonebelow1">
                  <a href="#"><img src={img27}></img></a>

                  <h5>
                    ON-EAR HEADPHONES
                  </h5>
                  <div className="headphonetext">
                    <button>Xem thêm</button>
                  </div>

                </div>
                <div className="headphonebelow1">
                  <a href="#"><img src={img28}></img></a>
                  <h5>
                    OVER-EAR HEADPHONES
                  </h5>
                  <div className="headphonetext">
                    <button>Xem thêm</button>
                  </div>

                </div>
              </div>
            </div>

            {data.slice(0, 1).map((item, index) => {
              return (
                <Cardview item={item} key={index} img={imgy[index]} />
              )
            })}

          </div>
          <div className="news"> <h3>Tin Tức</h3></div>
          <Col sm="12" md="6" lg="4">
            <div className="blogabove">
              <a href="#"> <img src={img30}></img></a>
              <div className="blog-text">
                <div className="blog-text-left">
                  <p>Marshall Store Vietnam</p>
                </div>
                <div className="blog-text-right">
                  <ul>
                    <li className="card-li"><a href="#"><i class="fa-solid fa-share-nodes"></i></a>
                      <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-pinterest"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-telegram"></i></a></li>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="blogbelow">
              <p className="blogbelow1"> Chưa phân loại   /   17 Th12 2023</p>
              <a href="#"><h5>Review tai nghe Marshall Major 4.</h5></a>
              <p className="blogbelow2">Tổng quan về Marshall Major 4 -Marshall</p>
              <a href="#"> <p className="blogbelow3">Continue Reading</p></a>
            </div>
          </Col>
          <Col sm="12" md="6" lg="4">
            <div className="blogabove">
              <a href="#"> <img src={img31}></img></a>
              <div className="blog-text">
                <div className="blog-text-left">
                  <p>Marshall Store Vietnam</p>
                </div>
                <div className="blog-text-right">
                  <ul>
                    <li className="card-li"><a href="#"><i class="fa-solid fa-share-nodes"></i></a>
                      <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-pinterest"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-telegram"></i></a></li>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="blogbelow">
              <p className="blogbelow1"> Chưa phân loại   /   17 Th12 2023</p>
              <a href="#"><h5>Review Marshall Woburn 3 – Một chiếc loa dành cho Gia đình</h5></a>
              <p className="blogbelow2">Tổng quan về Marshall Major 4 -Marshall</p>
              <a href="#"> <p className="blogbelow3">Continue Reading</p></a>
            </div>
          </Col>
          <Col sm="12" md="6" lg="4">
            <div className="blogabove">
              <a href="#"> <img src={img32}></img></a>
              <div className="blog-text">
                <div className="blog-text-left">
                  <p>Marshall Store Vietnam</p>
                </div>
                <div className="blog-text-right">
                  <ul>
                    <li className="card-li"><a href="#"><i class="fa-solid fa-share-nodes"></i></a>
                      <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-pinterest"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-telegram"></i></a></li>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="blogbelow">
              <p className="blogbelow1"> Chưa phân loại   /   17 Th12 2023</p>
              <a href="#"><h5>Review tai nghe Marshall Major 4.</h5></a>
              <p className="blogbelow2">Tổng quan về Marshall Major 4 -Marshall</p>
              <a href="#"> <p className="blogbelow3">Continue Reading</p></a>
            </div>
          </Col>
          <Col sm="12" md="6" lg="4">
            <div className="blogabove">
              <a href="#"> <img src={img33}></img></a>
              <div className="blog-text">
                <div className="blog-text-left">
                  <p>Marshall Store Vietnam</p>
                </div>
                <div className="blog-text-right">
                  <ul>
                    <li className="card-li"><a href="#"><i class="fa-solid fa-share-nodes"></i></a>
                      <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-pinterest"></i></a></li>
                      <li><a href=""><i class="fa-brands fa-telegram"></i></a></li>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
            <div className="blogbelow">
              <p className="blogbelow1"> Chưa phân loại   /   17 Th12 2023</p>
              <a href="#"><h5>How to choose a HI-FI stereo system.</h5></a>
              <p className="blogbelow2">Tổng quan về Marshall Major 4 -Marshall</p>
              <a href="#"> <p className="blogbelow3">Continue Reading</p></a>
            </div>
          </Col>


        </Row>
      </Container>
      <div className="footer-menu">
        <Footer />
      </div>
    </div>
  );
}
