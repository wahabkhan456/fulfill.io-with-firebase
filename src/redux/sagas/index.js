import { all, takeEvery } from "redux-saga/effects";
import photosSaga from "./photosSaga";
import * as type from "../types";

export default function* rootSaga() {
  yield all([takeEvery(type.GET_PHOTOS_REQUESTED, photosSaga)]);
}
