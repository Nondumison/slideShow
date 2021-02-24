import React, {Component} from 'react';

class Slider extends Component {
  state = {
    data: [],
    currentIndex: 0,
    translateValue: 0,
  };

  async componentDidMount() {
    const response = await fetch(`http://localhost:8080`);
    const json = await response.json();
    this.setState({data: json});
    console.log(this.state.data);
  }

  firstSlide = () => {
    return this.state.data;
  };
  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.data.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }));
  };

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth;
  };

  render() {
    return (
      <div className='slider'>
        <div
          className='slider-wrapper'
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s',
          }}
        >
          {this.state.data.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />

        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}

const Slide = ({image}) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100% 60%',
  };
  return <div className='slide' style={styles}></div>;
};

const LeftArrow = props => {
  return (
    <div className='backArrow arrow' onClick={props.goToPrevSlide}>
      <i>
        <img src='pictures/prev.svg'></img>
      </i>
    </div>
  );
};

const RightArrow = props => {
  return (
    <div className='nextArrow arrow' onClick={props.goToNextSlide}>
      <i>
        {' '}
        <img src='pictures/next.svg'></img>
      </i>
    </div>
  );
};
export default Slider;
