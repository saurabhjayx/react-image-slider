import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_images } from '../actions';

class ProjectShowcase extends Component  {
  constructor(props){
    super(props);
    this.state = {
      results:[],
      currentIndex: 0,
      translateVal: 0
    };
  }

  componentWillMount(){
    // fetch search results with query & counts
    this.props.fetch_images({
      query: this.props.query,
      count: this.props.slideCount
    })
  }

  componentWillReceiveProps(nextProps){
    if(nextProps){
      this.setState({
        results: nextProps.results
      })
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.goToNextSlide();
    }, 3000);
  }

  //method: slide next slide
  goToNextSlide = () => {
    if(this.state.currentIndex === this.props.slideCount - 1) {
      return this.setState({
        currentIndex: 0,
        translateVal: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateVal: prevState.translateVal + -(this.sliderWidth())
    }));
  }

  //calculate slide width
  sliderWidth = () => {
    return document.querySelector('.slider-item').clientWidth;
  }

  renderIndicators = (slide) => {
    let indicators = Array(this.props.slideCount).fill('');
    if(indicators.length > 0){
      return(
        <div className="indicator-wrapper">
          {
            indicators.map((ind, i) => {
              return(
                <div key={i} className={this.state.currentIndex === i ? "indicator active" : "indicator"}>
                </div>
              )
            })
          }
        </div>
      )
    }
  }

  renderSlides = () => {
    let slides = [...this.state.results];
    return(
      <React.Fragment>
        {
          slides.map((item, i) => {
            if(this.props.query === Object.keys(item)[0]){
              return(
                <div key={i}
                  className="slider-wrapper"
                  style={{
                    transform: `translateX(${this.state.translateVal}px)`,
                    transition: 'transform ease-out 0.45s'
                  }}
                >
                  {
                    item[Object.keys(item)[0]].results.map((slide, index) => {
                      return(
                        <div key={index} className="slider-item">
                          <img src={slide.urls.small} style={{width:500, height: 350}} alt={slide.user.username} />
                          <div className="slide-meta">
                            <p>{slide.user.username ? slide.user.username : 'Unsplash user'}</p>
                          </div>
                          <div className="slider-loader"></div>
                          {this.renderIndicators(slide)}
                        </div>
                      )
                    })
                  }
                </div>
              )
            }
          })
        }
      </React.Fragment>
    )
  }

  render(){
    return(
      <div className="slides">
        {this.renderSlides()}
      </div>
    );
  }
}

const mapStateToProps = ({ slider }) => {
  return { ...slider };
};

export default connect(mapStateToProps, {
  fetch_images
})(ProjectShowcase);
