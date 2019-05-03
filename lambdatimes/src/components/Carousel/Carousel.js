import React, { Component } from 'react';
import { carouselData } from '../../data'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const lambdaCarouselImgs = carouselData.map((elem, index) => (
    {
      src: elem.url,
      altText: `Slide ${index}`,
      caption: elem.caption
    }
  )
)

class LambdaCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next;
    this.previous = this.previous;
    this.goToIndex = this.goToIndex;
    this.onExiting = this.onExiting;
    this.onExited = this.onExited;
  }

  onExiting = () => this.animating = true;

  onExited = () => this.animating = false;

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === lambdaCarouselImgs.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? lambdaCarouselImgs.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = lambdaCarouselImgs.map(img => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={img.src}
        >
          <img src={img.src} alt={img.altText} />
          <CarouselCaption captionHeader={img.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={lambdaCarouselImgs} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default LambdaCarousel;



/*
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){

  }

  leftClick = () => {

  }

  rightClick = () => {

  }

  selectedImage = () => {
    return <img src={} style={{display: 'block'}} />
  }

  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}

*/