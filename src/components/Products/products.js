
import "./Products.css"
import imgs from "../../img/bn4.jpg"
import imgs1 from "../../img/bn3.jpg"
import imgs2 from "../../img/bn2.jpg"
import imgs3 from "../../img/bn1.jpg"
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
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

export default function Products(){
    
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
    );
  }