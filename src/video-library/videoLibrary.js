import React, { Component } from "react";
import Carousel from "rohit-react-slider";
import uuidv4 from "uuid";
import { config } from "react-spring";
import "../../node_modules/video-react/dist/video-react.css"
import { Player, BigPlayButton } from 'video-react';

const Pagination = ({slides, activeSlide, goToSlide}) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {
          slides && slides.map((item, index)=>{
            return <li 
                    className={
                      index == activeSlide ? "page-item active" : "page-item"
                    }
                    onClick={()=>goToSlide(index)}
                    key={index}
                  >
                    <a className="page-link" href="#">{index + 1}</a>
                  </li>
          })
        }
      </ul>
    </nav>
  )
}

const VideoCard = ({
  alt,
  poster
})=> {
  return (
    <div className="card" style={{width: "500px", height: "300px", margin: "0 auto"}}>
      <div className="card-body">
        <Player
          playsInline
          poster={poster}
          src={require("../assest/trailer_hd.mp4")}
          alt={alt}
        >
          <BigPlayButton position="center" />
        </Player>
      </div>
    </div>
  )
}

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
      <div style={{ width: "65%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
          onRef={e=>this.setState({childFun: e})}
        />
        <button onClick={()=>this.nextSlide(-1)}> Prev</button>
        <button onClick={()=>this.nextSlide(1)}> Next</button>
        <Pagination slides={this.slides} activeSlide={this.state.activeSlide} goToSlide={this.goToSlide}/>
      </div>
    );
  }
}

export default VideoLibrary