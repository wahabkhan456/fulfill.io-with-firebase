import axios from './api';
import endPoint from './endpoint';

export default async function getPhotos(pageNumber) {
  const response = await axios.get(endPoint(pageNumber));
  return response.data;
}
