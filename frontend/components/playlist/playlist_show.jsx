import React from 'react';
import Song from '../album/song_component';
import {Redirect} from 'react-router-dom';

class PlaylistShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPlaylist(parseInt(this.props.match.params.id));

  }
  handleDelete(playlistId) {
    return e => {
      this.props.deletePlaylist(playlistId);
      console.log(this.props.history.location);
      this.props.history.push('/browse/playlists');
    };
  }



  render(){
    let title;
    let songs;
    if (this.props.playlist) {
      title = this.props.playlist.title;
      

      songs = this.props.songs.map(song => <div>{song.title}</div>);

      return (
        <div>
          <div className="playlist-show-title">
            {title}
          </div>
          <div>
            {songs}
          </div>
          <button onClick={this.handleDelete(this.props.playlist.id)}>Delete</button>

        </div>
      );
    }else {
      return null;
    }
    // <Song component={this.props} />

  }
}

export default PlaylistShow;