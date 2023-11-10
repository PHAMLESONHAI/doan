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
            <Row>
              <Col sm="6" md="4" lg="3">
                <div className="view-type">
                  <label>View</label>
                  <a href="#" className="grid-type active">
                    <i class="fa-solid fa-dice-six"></i>
                  </a>
                  <a href="#" className="list-type active">
                    <i class="fa-solid fa-list-ul"></i>
                    </a>
                </div>
              </Col>
            </Row>
          </div>
          <div className="content-product-list">
          <Row className="list-product grid-view">
            <Col sm="6" md="4" lg="3">
              <div>
                <Card >
                  <img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/5.jpg" />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                    <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6" md="4" lg="3">
              <div>
                <Card >
                  <img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/17.jpg" />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                    <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6" md="4" lg="3">
              <div>
                <Card >
                  <img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/4.jpg" />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                    <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6" md="4" lg="3">
              <div>
                <Card >
                  <img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/24.jpg" />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                    <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6" md="4" lg="3">
              <div>
                <Card >

                <img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/24.jpg" />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                    <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>
            
            <Col sm="6" md="4" lg="3">
              <div>
                <Card >
                  <img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/24.jpg" />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                    <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6" md="4" lg="3">
              <div>
                <Card >
                  <img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/24.jpg" />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                    <CardText> Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>

            <Col sm="6" md="4" lg="3">
              <div>
                <Card >
                  <img alt="Sample" src="https://demo.7uptheme.net/html/necshop/images/photos/24.jpg" />
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
