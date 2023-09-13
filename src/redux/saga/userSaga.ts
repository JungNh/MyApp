import {PayloadAction} from '@reduxjs/toolkit';
import {takeEvery} from 'redux-saga/effects';
import { update } from '../userSlice';

export default function* userSaga() {
  console.log('user Saga');
  yield takeEvery(update.type, log);
}

export function* log(action: PayloadAction) {
  console.log('log Saga', action);
}
