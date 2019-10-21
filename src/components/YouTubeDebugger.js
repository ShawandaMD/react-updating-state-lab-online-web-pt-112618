import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleBitrate = () => {
    //... keeping everything the same except for what we are changing
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }
    )
  }

    handleResolution = () => {
      // resolution is inside of an object so to change video: {resolution: '720p'}
      this.setState({
        settings: {
          ...this.state.settings,
          video: {resolution: '720p'}
        }
      }
      )
    }

  render() {
    return(
      <div>
      <button className="bitrate" onClick={this.handleBitrate}>
      Bitrate
      </button>

      <button className="resolution" onClick={this.handleResolution}>
      Resolution
      </button>
      </div>
    )
  }
}
