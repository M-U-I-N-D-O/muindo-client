import React from 'react';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
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

import Home from './pages/Home';

import AnalysisClothes from './pages/AnalysisClothes';
import AnalysisClothesResult from './pages/AnalysisClothes/AnalysisClothesResult';
import AnalysisColor from './pages/AnalysisColor';
import Closet from './pages/Closet';
import ClosetLookBook from './pages/Closet/ClosetLookBook';
import MyPageClosetDetail from './pages/MyPage/myClosetDetail';
import MyPageClosetList from './pages/MyPage/myClosetList';

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

const ModalContext = createContext({});

function App() {
  const navMode = useSelector((state) => state.navbar.switch);
  const [openClosetModal, setOpenClosetModal] = useState(false);
  const [openClosetInfoModal, setOpenClosetInfoModal] = useState(false);
  const [lookBookColorModal, setLookBookColorModal] = useState(false);
  const [lookBookColorSelect, setLookBookColorSelect] = useState('');
  const [modalMode, setModalMode] = useState('');
  const [closetImg, setClosetImg] = useState({
    hat: '',
    top: '',
    bottom: '',
    shoes: '',
    bag: '',
  });

  const [closetClothesId, setClosetClothesId] = useState({
    hat: '',
    top: '',
    bottom: '',
    shoes: '',
    bag: '',
  });

  const [condition, setCondition] = useState({});
  const [clothesList, setClothesList] = useState([]);

  return (
    <div>
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
        }}
      >
        <Router>
          {navMode === 1 && <TopNav />}
          <Route exact path="/" component={Intro} />
          <Route exact path="/main" component={Main} />
          <Route component={LoginDialog} />
          <Route component={MyPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/confirm" component={Confirm} />

          <Route exact path="/analysis_clothes" component={AnalysisClothes} />
          <Route exact path="/analysis_clothes/result" component={AnalysisClothesResult} />
          <Route exact path="/analysis_color" component={AnalysisColor} />

          <Route exact path="/community" component={Community} />
          <Route exact path="/solution" component={Solution} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/loading" component={Progress} />
          {navMode === 1 && <BottomNav />}

          <Route exact path="/closet" component={Closet} />
          <Route exact path="/closet/look_book" component={ClosetLookBook} />
          <Route exact path="/my_page_closet_detail" component={MyPageClosetDetail} />
          <Route exact path="/my_page_closet_list" component={MyPageClosetList} />

          {/* {navMode === 1 && <Footer />} */}
        </Router>
      </ModalContext.Provider>
    </div>
  );
}
export { ModalContext };

export default App;
