import React from 'react';
import {Link} from 'react-router-dom';

class Discover extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllPlaylist({user_id: this.props.currentUserId});
  }



  render() {
    let playlist;
    if (this.props.playlists) {
    const playlistImg = "https://s3.amazonaws.com/ampafy-seeds/Screen+Shot+2018-01-12+at+12.28.18+PM.png";
      playlist = this.props.playlists.map((play, idx) =>(

// onHover
        <li key={idx} className="single-playlist">
          <Link className="img-hover-cont" to={`/browse/playlist/${play.id}`}>
          <div className="img-div" style={{backgroundImage: `url(${playlistImg})`}}>
          </div>
          <img className="img-hover-div-playlist" src="https://t3.ftcdn.net/jpg/00/32/16/22/240_F_32162248_LHZW62byX72nRhfHAcxBgKMBaN6pb9wn.jpg" />
          </Link>
            <h1 className="alb-title">{play.title}</h1>
      </li>

    ));
    }
    return(
      <div className="outer-playlist" >
        <div className="inner-playlists">
          {playlist}
        </div>
      </div>
    );
  }

}

export default Discover;
