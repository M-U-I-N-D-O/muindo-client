import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import navbarReducer from './navbar';
import analysisClothesReducer from './analysisClothes';
import solutionReducer from './solution';
import dialogReducer from './dialog';
import loginReducer from './login';
import tinderReducer from './tinder';
import closetModalReducer from './closet';
import lookBookReducer from './lookBook';
import myPageReducer from './myPage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['navbar', 'login'],
};

const allReducer = combineReducers({
  navbar: navbarReducer,
  analysisClothes: analysisClothesReducer,
  solution: solutionReducer,
  dialog: dialogReducer,
  login: loginReducer,
  tinder: tinderReducer,
  closetModal: closetModalReducer,
  lookBook: lookBookReducer,
  myPage: myPageReducer,
});

export default persistReducer(persistConfig, allReducer);
