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
  import "./Cardview.css"
export default function Cardview(props){

    return(
       
            <Col md="3" sm="6" xs="12">
                <div className="product-item">
                  <Card >
                    <div className="product-thumb">
                      <a href="#" className="product-thumb-link"><img alt="Sample" src={props.img} /></a>
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
                      <CardTitle tag="h6">{props.item.Name}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted" tag="h6"><span className="pricev1">{props.item.Price}</span> <span className="price">{props.item.Price}</span></CardSubtitle>
                    </CardBody>
                  </Card>
                </div>
              </Col>
        
    )
}