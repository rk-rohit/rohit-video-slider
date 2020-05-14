import React, { Component } from "react";
import Carousel from "rohit-react-slider";
import uuidv4 from "uuid";
import { config } from "react-spring";
import leftArrow from "../assest/left-arrow.png"
import rightArrow from "../assest/right-arrow.png"
import Pagination from "./pagination";
import VideoCard from './VideoCard';
class VideoLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goToSlide: 0,
      offsetRadius: 3,
      showNavigation: false,
      config: config.gentle,
      childFun: null,
      activeSlide : 0
    };
  }

  slides = [
    {
      key: uuidv4(),
      content: <VideoCard alt="1" videoLink="trailer_hd.mp4" poster="10-2500x1667.jpg" posterTitle="See what Leena Barua thinks."/>
    },
    {
      key: uuidv4(),
      content: <VideoCard alt="2" videoLink="trailer_hd.mp4" poster="1001-5616x3744.jpg" posterTitle="See what Mark thinks."/>
    },
    {
      key: uuidv4(),
      content: <VideoCard alt="3" videoLink="trailer_hd.mp4" poster="1002-4312x2868.jpg"/>
    },
    {
      key: uuidv4(),
      content: <VideoCard alt="4" videoLink="trailer_hd.mp4" poster="1004-5616x3744.jpg"/>
    },
    {
      key: uuidv4(),
      content: <VideoCard alt="5" videoLink="trailer_hd.mp4" poster="1011-5472x3648.jpg"/>
    },
    {
      key: uuidv4(),
      content: <VideoCard alt="6" videoLink="trailer_hd.mp4" poster="1024-1920x1280.jpg"/>
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  nextSlide = (action)=> {
    if (this.state.childFun) {
      this.state.childFun.moveSlide(action)
      let slideIndex = this.state.childFun && this.state.childFun.getCurrentSlide() + action
      slideIndex = slideIndex > this.slides.length-1 ? 0 : (slideIndex < 0 ? this.slides.length-1 : slideIndex)
      this.setState({
        activeSlide : slideIndex
      })
    }
  }

  goToSlide = (index) => {
    this.setState({
      goToSlide: index,
      activeSlide: index
    })
  }

  render() {
    return (
      <div className="video-carousel position-relative">
        <h1>Create Videos</h1>
        <p>Select a number</p>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
          onRef={e=>this.setState({childFun: e})}
        />
        <button onClick={()=>this.nextSlide(-1)} className="prev-btn"> <img src={leftArrow} /></button>
        <button onClick={()=>this.nextSlide(1)}  className="next-btn"> <img src={rightArrow} /></button>
        <h1 style={{marginTop: 0}}>Live Classes</h1>
        <p>Select a number</p>
        <Pagination slides={this.slides} activeSlide={this.state.activeSlide} goToSlide={this.goToSlide}/>
      </div>
    );
  }
}

export default VideoLibrary