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
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <div class="youtube-block">
        <div class="youtube-block__player">
          <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
        </div>
        <div class="youtube-block__title">
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
