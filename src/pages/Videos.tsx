import React from "react";
import { GApageView } from "../";

import YouTube, { Options } from "react-youtube";

export class Videos extends React.Component {
  componentDidMount() {
    GApageView(window.location.pathname + window.location.search);
  }
  render() {
    const opts: Options = {
      // height: "390",
      // width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <div className="general-container">
        <div className="general-container-content">
          <h1 className="general-container-content-title">VÍDEOS</h1>

          <p className="general-container-content-text">
            Olá amigos, amigas e cidadãos assisenses, eu quero cumprimentar a
            todos vocês e convidá-los para, juntos, desenvolvermos esse tão
            importante momento de nossas vidas, onde vamos definir quem são as
            pessoas que irão cuidar de nossa cidade nos próximos 4 anos.
          </p>
          <div className="general-container-video-container">
            <YouTube
              className="general-container-video-container-video"
              videoId="sNimqNAXV3U"
              opts={opts}
              onReady={this._onReady}
            />
            <YouTube
              className="general-container-video-container-video"
              videoId="VfMJwurJXcA"
              opts={opts}
              onReady={this._onReady}
            />
            <YouTube
              className="general-container-video-container-video"
              videoId="kbLcy2Z_G6U"
              opts={opts}
              onReady={this._onReady}
            />
            <YouTube
              className="general-container-video-container-video"
              videoId="UReBqG7YwWs"
              opts={opts}
              onReady={this._onReady}
            />
            <YouTube
              className="general-container-video-container-video"
              videoId="KH_Rn_X6ETk"
              opts={opts}
              onReady={this._onReady}
            />
            <YouTube
              className="general-container-video-container-video"
              videoId="nxV2gtN3zAQ"
              opts={opts}
              onReady={this._onReady}
            />
            <YouTube
              className="general-container-video-container-video"
              videoId="Pgncc49gT2o"
              opts={opts}
              onReady={this._onReady}
            />
          </div>
        </div>
      </div>
    );
  }

  _onReady(event: any) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
