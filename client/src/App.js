import React from 'react';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createContext, useState } from 'react';

import Intro from './pages/Intro';
import Home from './pages/Home';
import About from './pages/About';
import AnalysisClothes from './pages/AnalysisClothes';
import AnalysisClothesResult from './pages/AnalysisClothes/AnalysisClothesResult';
import AnalysisColor from './pages/AnalysisColor';
import Closet from './pages/Closet';
import ClosetLookBook from './pages/Closet/ClosetLookBook';
import ClosetForm from './pages/Closet/ClosetForm';
import Community from './pages/Community';
import Solution from './pages/Solution';
import SolutionResult from './pages/Solution/solutionResult';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Progress from './components/Progress';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const ModalContext = createContext({});
// 중앙 영역 max-width를 1024px 설정할 경우

const Container = styled.div`
  display: flex;
  padding-top: 5rem;
  padding-bottom: 3.5rem;
  justify-content: center;
  align-items: center;
  background-color: black;
  min-height: calc(100vh - 8.5rem);
  background-image: url(${'/images/home/sherlock_wall.png'});
  background-size: fill;
`;

const Container2 = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: white;
  min-height: calc(100vh - 8.5rem);
  max-width: 1024px;
  width: 80vw;
`;
// const Container = styled.div`
//   padding-top: 5rem;
//   padding-bottom: 3.5rem;
//   justify-content: center;
//   align-items: center;
// `;

function App() {
  const navMode = useSelector((state) => state.navbar.switch);
  const [openClosetModal, setOpenClosetModal] = useState(false);
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

  const [condition, setCondition] = useState({
    color: '검정색',
    // price: 33000,
  });
  const [clothesList, setClothesList] = useState('');

  return (
    //  <Container>
    //   <Route exact path="/home" component={Home} />
    //   <Route exact path="/about" component={About} />
    //   <Route exact path="/analysis_clothes" component={AnalysisClothes} />
    //   <Route exact path="/analysis_clothes/result" component={AnalysisClothesResult} />
    //   <Route exact path="/analysis_color" component={AnalysisColor} />
    //   <Route exact path="/closet" component={Closet} />
    //   <Route exact path="/community" component={Community} />
    //   <Route exact path="/solution" component={Solution} />
    //   <Route exact path="/login" component={Login} />
    //   <Route exact path="/signup" component={SignUp} />
    //   <Route exact path="/loading" component={Progress} />
    // </Container>
    <div>
      <ModalContext.Provider
        value={{
          openClosetModal,
          setOpenClosetModal,
          modalMode,
          setModalMode,
          closetImg,
          setClosetImg,
          lookBookColorModal,
          setLookBookColorModal,
          lookBookColorSelect,
          setLookBookColorSelect,
          clothesList,
          setClothesList,
          condition,
          setCondition,
        }}
      >
        <Router>
          {navMode === 1 && <Navbar />}

          <Switch>
            <Route exact path="/" component={Intro} />
            <Container>
              <Container2>
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/analysis_clothes" component={AnalysisClothes} />
                <Route exact path="/analysis_clothes/result" component={AnalysisClothesResult} />
                <Route exact path="/analysis_color" component={AnalysisColor} />
                <Route exact path="/closet" component={Closet} />
                <Route exact path="/closet/look_book" component={ClosetLookBook} />
                <Route exact path="/closet/form" component={ClosetForm} />
                <Route exact path="/community" component={Community} />
                <Route exact path="/solution" component={Solution} />
                <Route exact path="/solution/result" component={SolutionResult} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/loading" component={Progress} />
              </Container2>
            </Container>
          </Switch>

          {navMode === 1 && <Footer />}
        </Router>
      </ModalContext.Provider>
    </div>
  );
}
export { ModalContext };

export default App;
