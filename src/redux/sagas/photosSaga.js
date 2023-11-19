import { call, put } from "redux-saga/effects";
import getPhotos from "../../config/getPhotos";
import * as type from "../types";

export default function* photosSaga(action) {
  try {
    const fetchPhotos = yield call((_) => getPhotos(action.pageNumber));
    yield put({ type: type.GET_PHOTOS_SUCCESS, photos: fetchPhotos });
  } catch (e) {
    yield put({ type: type.GET_PHOTOS_FAILED, message: e.message });
  }
}
