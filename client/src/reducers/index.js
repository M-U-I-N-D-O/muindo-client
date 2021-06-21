import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import navbarReducer from './navbar';
import analysisClothesReducer from './analysisClothes';
import solutionReducer from './solution';
import dialogReducer from './dialog';
import loginReducer from './login';
import closetModalReducer from './closet';
import lookBookReducer from './lookBook';
import myPageReducer from './myPage';

const persistConfig = {
  key: 'root',
  // localStorage에 저장합니다.
  // session 으로 변경해야 할 경우, 변경하기 ★ (처음 빌드시, Intro페이지 Navbar, Footer 유지문제)
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ['navbar', 'login'],
  // blacklist -> 그것만 제외합니다
};

const allReducer = combineReducers({
  navbar: navbarReducer,
  analysisClothes: analysisClothesReducer,
  solution: solutionReducer,
  dialog: dialogReducer,
  login: loginReducer,
  closetModal: closetModalReducer,
  lookBook: lookBookReducer,
  myPage: myPageReducer,
});

export default persistReducer(persistConfig, allReducer);
