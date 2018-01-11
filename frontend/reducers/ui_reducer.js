import {RECEIVE_MODAL, RECEIVE_SONG_ID, RECEIVE_LISTS_PLAYLIST} from '../actions/ui_actions';

const initialState = {
  isThreeDots: false,
  id: null,
  openListPlaylist: false,
};

const uiReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_MODAL:
      newState = Object.assign({}, state, {isThreeDots: !state.isThreeDots});
      return newState;
    case RECEIVE_SONG_ID:
      newState = Object.assign({}, state, {id: action.id});
      return newState;
    case RECEIVE_LISTS_PLAYLIST:
      newState = Object.assign({}, state, {openListPlaylist: !state.openListPlaylist});
      return newState;
    default:
      return state;

  }
};
export default uiReducer;