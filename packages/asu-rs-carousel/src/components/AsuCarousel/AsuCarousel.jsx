import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Util
} from 'reactstrap';
import {AsuHeroImage, AsuBgHeroImage} from '../AsuHeroImage';
import bootstrap from 'asu-web-standards-bootstrap4/dist/css/bootstrap-asu.min.css';

// Needs to be set for CSS modules.
// See https://github.com/reactstrap/reactstrap/issues/1049
Util.setGlobalCssModule(bootstrap);

class AsuCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;

    const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.items.map((item, index) => {
      return (
        <CarouselItem
          tag="div"
          key={index}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <AsuHeroImage {...item}/>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        cssModule={bootstrap}
        interval={this.props.interval}
        keyboard={this.props.keyboard}
        pause={this.props.pause}
        ride={this.props.ride}
        slide={this.props.slide}
      >
        <CarouselIndicators cssModule={bootstrap} items={this.props.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl  direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl  direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

AsuCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
  ]),
  keyboard: PropTypes.bool,
   /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: PropTypes.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes.oneOf(['carousel']),
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes.bool
};

AsuCarousel.defaultProps = {
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  ride: 'carousel',
  slide: true
};

export default AsuCarousel;
