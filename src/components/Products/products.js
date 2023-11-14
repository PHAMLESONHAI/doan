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
import { useState } from "react"
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

  return (
    <div>
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
      <Container className="content-shop">
        <div className="main-content-shop">
          <div className="sort-pagibar">
            <Row className="content-shop1">
              <Col md="3" sm="12" xs="12">
                <div className="view-type">
                  <label>View</label>
                  <a href="#" className="grid-type active">
                    <i class="fa-solid fa-dice-six fa-flip-both fa-sm"></i>
                  </a>
                  <a href="#" className="list-type active">
                    <i class="fa-solid fa-list-ul fa-sm"></i>
                  </a>
                </div>
              </Col>
              <Col md="9" sm="12" xs="12">
                <div className="wrap-pagibar">
                  <div className="tool-box per-page-box">
                    <label>show</label>
                    <select className="select-box">
                      <option value="9">9</option>
                      <option value="12">12</option>
                      <option value="15">15</option>
                      <option value="18">18</option>
                    </select>
                  </div>
                  <div className="tool-box sort-box">
                    <label>sort by</label>
                    <select className="select-box">
                      <option value="name">name</option>
                      <option value="price">price</option>
                    </select>
                  </div>
                  <div className="tool-box showing-box">
                    <label>showing</label>
                    <span>1 to 9 of 20 total</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="content-product-list">
            <Row className="list-product grid-view">
              <Col md="3" sm="4" xs="12">
                <div className="product-item">
                  <Card >
                    <div className="product-thumb">
                      <a href="#" className="product-thumb-link"><img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/5.jpg" /></a>
                      <div className="product-more-link">
                        <a class="addcart-link" href="#">
                        <span><i class="fa-solid fa-cart-shopping"></i></span>
                          <span>Add to cart</span></a>
                        <a class="addcart-link" href="#">
                         <span><i class="fa-solid fa-heart"></i></span>
                          <span>Add to wishlist</span></a>
                        <a class="addcart-link" href="#">
                        <span><i class="fa-solid fa-paw"></i></span>
                          <span>Add to Compare</span></a>
                        <a class="addcart-link" href="#">
                          <span><i class="fa-solid fa-eye"></i></span>
                          <span>Quick view</span></a>
                      </div>
                    </div>
                    <CardBody>
                      <CardTitle tag="h5">Card title</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                      <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>

              <Col md="3" sm="4" xs="12">
                <div className="product-item">
                  <Card >
                    <div className="product-thumb">
                      <a href="#" className="product-thumb-link"><img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/5.jpg" /></a>
                      <div className="product-more-link">
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-cart-shopping"></i>
                          <span>Add to cart</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-heart"></i>
                          <span>Add to wishlist</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-paw"></i>
                          <span>Add to Compare</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-eye"></i>
                          <span>Quick view</span></a>
                      </div>
                    </div>
                    <CardBody>
                      <CardTitle tag="h5">Card title</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                      <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>

              <Col md="3" sm="4" xs="12">
                <div className="product-item">
                  <Card >
                    <div className="product-thumb">
                      <a href="#" className="product-thumb-link"><img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/5.jpg" /></a>
                      <div className="product-more-link">
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-cart-shopping"></i>
                          <span>Add to cart</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-heart"></i>
                          <span>Add to wishlist</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-paw"></i>
                          <span>Add to Compare</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-eye"></i>
                          <span>Quick view</span></a>
                      </div>
                    </div>
                    <CardBody>
                      <CardTitle tag="h5">Card title</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                      <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>

              <Col md="3" sm="4" xs="12">
                <div className="product-item">
                  <Card >
                    <div className="product-thumb">
                      <a href="#" className="product-thumb-link"><img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/5.jpg" /></a>
                      <div className="product-more-link">
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-cart-shopping"></i>
                          <span>Add to cart</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-heart"></i>
                          <span>Add to wishlist</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-paw"></i>
                          <span>Add to Compare</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-eye"></i>
                          <span>Quick view</span></a>
                      </div>
                    </div>
                    <CardBody>
                      <CardTitle tag="h5">Card title</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                      <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>

              <Col md="3" sm="4" xs="12">
                <div className="product-item">
                  <Card >
                    <div className="product-thumb">
                      <a href="#" className="product-thumb-link"><img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/5.jpg" /></a>
                      <div className="product-more-link">
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-cart-shopping"></i>
                          <span>Add to cart</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-heart"></i>
                          <span>Add to wishlist</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-paw"></i>
                          <span>Add to Compare</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-eye"></i>
                          <span>Quick view</span></a>
                      </div>
                    </div>
                    <CardBody>
                      <CardTitle tag="h5">Card title</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                      <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>

              <Col md="3" sm="4" xs="12">
                <div className="product-item">
                  <Card >
                    <div className="product-thumb">
                      <a href="#" className="product-thumb-link"><img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/5.jpg" /></a>
                      <div className="product-more-link">
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-cart-shopping"></i>
                          <span>Add to cart</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-heart"></i>
                          <span>Add to wishlist</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-paw"></i>
                          <span>Add to Compare</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-eye"></i>
                          <span>Quick view</span></a>
                      </div>
                    </div>
                    <CardBody>
                      <CardTitle tag="h5">Card title</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                      <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>

              <Col md="3" sm="4" xs="12">
                <div className="product-item">
                  <Card >
                    <div className="product-thumb">
                      <a href="#" className="product-thumb-link"><img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/5.jpg" /></a>
                      <div className="product-more-link">
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-cart-shopping"></i>
                          <span>Add to cart</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-heart"></i>
                          <span>Add to wishlist</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-paw"></i>
                          <span>Add to Compare</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-eye"></i>
                          <span>Quick view</span></a>
                      </div>
                    </div>
                    <CardBody>
                      <CardTitle tag="h5">Card title</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                      <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>

              <Col md="3" sm="4" xs="12">
                <div className="product-item">
                  <Card >
                    <div className="product-thumb">
                      <a href="#" className="product-thumb-link"><img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/5.jpg" /></a>
                      <div className="product-more-link">
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-cart-shopping"></i>
                          <span>Add to cart</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-heart"></i>
                          <span>Add to wishlist</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-paw"></i>
                          <span>Add to Compare</span></a>
                        <a class="addcart-link" href="#">
                          <i class="fa-solid fa-eye"></i>
                          <span>Quick view</span></a>
                      </div>
                    </div>
                    <CardBody>
                      <CardTitle tag="h5">Card title</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                      <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}
