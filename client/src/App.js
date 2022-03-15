import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createContext, useState } from 'react';

import Intro from './pages/Intro';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import About from './pages/About';
import TopNav from './components/Navbar/topNav';
import BottomNav from './components/Navbar/bottomNav';
import LoginDialog from './pages/LoginDialog';
import Confirm from './pages/Confirm';
import Error from './pages/Error';
import Closet from './pages/Closet';
import ClosetLookBook from './pages/Closet/ClosetLookBook';
import MyPageClosetDetail from './pages/MyPage/myClosetDetail';
import MyPageClosetList from './pages/MyPage/myClosetList';
import MyPageLikeDetail from './pages/MyPage/myLikeDetail';
import MyPageLikeList from './pages/MyPage/myLikeList';

import Progress from './components/Progress';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

import useLocalStorage from '../src/hook/useLocalStorage';

const ModalContext = createContext({});
const ClothesIdContext = createContext({});
const ClothesPriceContext = createContext({});
const ClosetTextContext = createContext({});

function App() {
  const navMode = useSelector((state) => state.navbar.switch);
  const [closetImg, setClosetImg] = useLocalStorage('closetImg', {
    hat: '',
    top: '',
    bottom: '',
    shoes: '',
    bag: '',
  });
  const [closetClothesId, setClosetClothesId] = useLocalStorage('closetClothesId', {
    hat: '',
    top: '',
    bottom: '',
    shoes: '',
    bag: '',
  });
  const [clothesPrice, setClothesPrice] = useState({
    hat: 0,
    top: 0,
    bottom: 0,
    shoes: 0,
    bag: 0,
  });

  const [condition, setCondition] = useState({
    middleCategory: '',
    subCategory: '',
    brand: '',
  });

  return (
    <ModalContext.Provider
      value={{
        closetImg,
        setClosetImg,
        closetClothesId,
        setClosetClothesId,
        condition,
        setCondition,
      }}
    >
      <ClothesIdContext.Provider value={{ closetClothesId, setClosetClothesId }}>
        <ClothesPriceContext.Provider value={{ clothesPrice, setClothesPrice }}>
          <Router>
            {navMode === 1 && <TopNav />}
            <Route exact path="/" component={Intro} />
            <Route exact path="/main" component={Main} />
            <Route component={LoginDialog} />
            <Route component={MyPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/confirm" component={Confirm} />
            <Route exact path="/error" component={Error} />

            <Route exact path="/loading" component={Progress} />
            <Route exact path="/closet" component={Closet} />
            <Route exact path="/closet/look_book" component={ClosetLookBook} />
            <Route exact path="/my_page_closet_detail/:seq" component={MyPageClosetDetail} />
            <Route exact path="/my_page_closet_list" component={MyPageClosetList} />
            <Route exact path="/my_page_like_detail/:seq" component={MyPageLikeDetail} />
            <Route exact path="/my_page_like_list" component={MyPageLikeList} />

            {navMode === 1 && <BottomNav />}
          </Router>
        </ClothesPriceContext.Provider>
      </ClothesIdContext.Provider>
    </ModalContext.Provider>
  );
}
export { ModalContext };
export { ClothesIdContext };
export { ClothesPriceContext };
export { ClosetTextContext };

export default App;
