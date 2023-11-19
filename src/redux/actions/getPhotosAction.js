import * as type from '../types';

export default function getPhotosAction(pageNumber) {
  return {
    type: type.GET_PHOTOS_REQUESTED,
    pageNumber
  };
}
