export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUM';
import * as ApiUtil from "../util/album_api_util";

export const receiveAllAlbums = (albums) => {
  return {
    type: RECEIVE_ALL_ALBUMS,
    albums
  };
};
export const receiveAlbums = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album
  };
};

export const getAllAlbums = () => {
  return dispatch => {
    return ApiUtil.getAllAlbums().then(
      (albums) => dispatch(receiveAllAlbums(albums))
    );
  };
};