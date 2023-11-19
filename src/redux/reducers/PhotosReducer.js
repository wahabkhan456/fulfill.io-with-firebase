import * as type from '../types';

const initialState = { photos: [], loading: false, error: false };

export default function PhotosReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_PHOTOS_REQUESTED:
      return {
        ...state,
        loading: true
      };
    case type.GET_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: [...state.photos, ...action.photos]
      };
    case type.GET_PHOTOS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    default:
      return state;
  }
}
