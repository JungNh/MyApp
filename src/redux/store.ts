import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/rootSaga';

const sagaMidleware = createSagaMiddleware()
export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger).concat(sagaMidleware),
});

sagaMidleware.run(rootSaga)
