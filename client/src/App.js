import React from 'react';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createContext, useState } from 'react';
import { CookiesProvider, withCookies, useCookies } from 'react-cookie';

import Intro from './pages/Intro';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import About from './pages/About';
import TopNav from './components/Navbar/topNav';
import BottomNav from './components/Navbar/bottomNav';
import LoginDialog from './pages/LoginDialog';
import Confirm from './pages/Confirm';
import Error from './pages/Error';

import Home from './pages/Home';

import AnalysisClothes from './pages/AnalysisClothes';
import AnalysisClothesResult from './pages/AnalysisClothes/AnalysisClothesResult';
import AnalysisColor from './pages/AnalysisColor';
import Closet from './pages/Closet';
import ClosetLookBook from './pages/Closet/ClosetLookBook';
import MyPageClosetDetail from './pages/MyPage/myClosetDetail';
import MyPageClosetList from './pages/MyPage/myClosetList';
import MyPageLikeDetail from './pages/MyPage/myLikeDetail';
import MyPageLikeList from './pages/MyPage/myLikeList';

import Community from './pages/Community';
import Solution from './pages/Solution';
import SolutionResult from './pages/Solution/solutionResult';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import Footer from './components/Footer';
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
  const [openClosetModal, setOpenClosetModal] = useState(false);
  const [modalMode, setModalMode] = useState('');
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
  const [closetText, setClosetText] = useState('');

  // const [condition, setCondition] = useState({});

  const [condition, setCondition] = useState({
    middleCategory: '',
    subCategory: '',
    brand: '',
  });

  const [clothesList, setClothesList] = useState([]);

  const [lookBookColorModal, setLookBookColorModal] = useState(false);
  const [lookBookColorSelect, setLookBookColorSelect] = useState('#fff');

  const [openClosetInfoModal, setOpenClosetInfoModal] = useState(false);
  const [closetDetailInfo, setClosetDetailInfo] = useState([]);

  return (
    <CookiesProvider>
      <ModalContext.Provider
        value={{
          openClosetModal,
          setOpenClosetModal,
          modalMode,
          setModalMode,
          closetImg,
          setClosetImg,
          closetClothesId,
          setClosetClothesId,
          lookBookColorModal,
          setLookBookColorModal,
          lookBookColorSelect,
          setLookBookColorSelect,
          clothesList,
          setClothesList,
          condition,
          setCondition,
          openClosetInfoModal,
          setOpenClosetInfoModal,
          closetDetailInfo,
          setClosetDetailInfo,
        }}
      >
        <ClothesIdContext.Provider value={{ closetClothesId, setClosetClothesId }}>
          <ClothesPriceContext.Provider value={{ clothesPrice, setClothesPrice }}>
            <ClosetTextContext.Provider value={{ closetText, setClosetText }}>
              <Router>
                {navMode === 1 && <TopNav />}
                <Route exact path="/" component={Intro} />
                <Route exact path="/main" component={Main} />
                <Route component={LoginDialog} />
                <Route component={MyPage} />
                <Route exact path="/about" component={About} />
                <Route exact path="/confirm" component={Confirm} />
                <Route exact path="/error" component={Error} />

                <Route exact path="/analysis_clothes" component={AnalysisClothes} />
                <Route exact path="/analysis_clothes/result" component={AnalysisClothesResult} />
                <Route exact path="/analysis_color" component={AnalysisColor} />

                <Route exact path="/community" component={Community} />
                <Route exact path="/solution" component={Solution} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/loading" component={Progress} />
                <Route exact path="/closet" component={Closet} />
                <Route exact path="/closet/look_book" component={ClosetLookBook} />
                <Route exact path="/my_page_closet_detail/:seq" component={MyPageClosetDetail} />
                <Route exact path="/my_page_closet_list" component={MyPageClosetList} />
                <Route exact path="/my_page_like_detail/:seq" component={MyPageLikeDetail} />
                <Route exact path="/my_page_like_list" component={MyPageLikeList} />

                {navMode === 1 && <BottomNav />}

                {/* {navMode === 1 && <Footer />} */}
              </Router>
            </ClosetTextContext.Provider>
          </ClothesPriceContext.Provider>
        </ClothesIdContext.Provider>
      </ModalContext.Provider>
    </CookiesProvider>
  );
}
export { ModalContext };
export { ClothesIdContext };
export { ClothesPriceContext };
export { ClosetTextContext };

export default App;
