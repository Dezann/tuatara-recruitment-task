import React, { Component } from "react";
import YouTube from "react-youtube";
import "./YoutubePlayerBlock.scss";

class YoutubePlayerBlock extends Component {
  state = {};
  render() {
    const opts = {
      height: "100%",
      width: "100%",
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      <div className="youtube-block">
        <div className="youtube-block__player">
          <YouTube videoId="-rAeqN-Q7x4" opts={opts} onReady={this._onReady} />
        </div>
        <div className="youtube-block__title">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    );
  }
  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default YoutubePlayerBlock;
