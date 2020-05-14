import React, { Component } from "react";
import Carousel from "rohit-react-slider";
import uuidv4 from "uuid";
import { config } from "react-spring";
import "../../node_modules/video-react/dist/video-react.css"
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
      content: <VideoCard alt="1" poster="https://i.picsum.photos/id/1024/1920/1280.jpg"/>
    },
    {
      key: uuidv4(),
      content: <VideoCard alt="2" poster="https://i.picsum.photos/id/1004/5616/3744.jpg"/>
    },
    {
      key: uuidv4(),
      content: <VideoCard alt="3" poster="https://i.picsum.photos/id/1002/4312/2868.jpg"/>
    },
    {
      key: uuidv4(),
      content: <VideoCard alt="4" poster="https://i.picsum.photos/id/1011/5472/3648.jpg"/>
    },
    {
      key: uuidv4(),
      content: <VideoCard alt="5" poster="https://i.picsum.photos/id/10/2500/1667.jpg"/>
    },
    {
      key: uuidv4(),
      content: <VideoCard alt="6" poster="https://i.picsum.photos/id/1001/5616/3744.jpg"/>
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
      const slideIndex = this.state.childFun && this.state.childFun.getCurrentSlide() + action
      this.setState({
        activeSlide : slideIndex >= this.slides.length ? 0 : slideIndex
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