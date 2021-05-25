import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TopComment from '../../components/AnalysisClothes/topComment';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80vw',
    maxWidth: '1024px',
    minHeight: ' calc(100vh - 8.5rem)',
    backgroundColor: '#ececec',
    // height: '80vw',
  },
  title: {
    marginTop: '25px',
    marginBottom: '5px',
  },
  closetImg: {
    width: '60vw',
    maxWidth: '600px',
  },

  closetContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    maxWidth: '600px',
    minWidth: '90px',
    width: '66vw',
    border: 'solid 1px',
    // maxHeight: '600px',
    // minHeight: '100px',
    minHeight: '57vh',
  },
  btnBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  // clothesContainer: {
  //   display: 'flex',
  //   maxWidth: '200px',
  //   minWidth: '155px',
  //   // maxHeight: '',
  //   // minHeight: '100px',
  //   width: '10vw',
  //   minHeight: '80px',
  //   alignItems: 'center',
  //   border: 'solid 2px',
  //   margin: '20px',

  //   // padding: '3px',
  //   justifyContent: 'center',
  // },

  // clothesContainer1: {
  //   display: 'flex',
  //   maxWidth: '200px',
  //   minWidth: '100px',
  //   // maxHeight: '',
  //   // minHeight: '100px',
  //   width: '10vw',
  //   minHeight: '80px',
  //   alignItems: 'center',
  //   border: 'solid 2px',
  //   margin: '20px',
  //   fontSize: '30px',
  //   // padding: '3px',
  //   justifyContent: 'center',
  // },
  // clothesContainer2: {
  //   display: 'flex',
  //   maxWidth: '200px',
  //   minWidth: '100px',
  //   // maxHeight: '',
  //   // minHeight: '100px',
  //   width: '10vw',
  //   minHeight: '150px',
  //   alignItems: 'center',
  //   border: 'solid 2px',
  //   margin: '20px',
  //   fontSize: '30px',

  //   // padding: '3px',
  //   justifyContent: 'center',
  // },

  // clothesContainer3: {
  //   display: 'flex',
  //   maxWidth: '200px',
  //   minWidth: '100px',
  //   // maxHeight: '',
  //   // minHeight: '100px',
  //   width: '10vw',
  //   minHeight: '200px',
  //   alignItems: 'center',
  //   border: 'solid 2px',
  //   margin: '20px',
  //   fontSize: '30px',

  //   // padding: '3px',
  //   justifyContent: 'center',
  // },

  // clothesContainer4: {
  //   display: 'flex',
  //   maxWidth: '200px',
  //   minWidth: '100px',
  //   // maxHeight: '',
  //   // minHeight: '100px',
  //   width: '10vw',
  //   minHeight: '100px',
  //   alignItems: 'center',
  //   border: 'solid 2px',
  //   margin: '20px',
  //   fontSize: '30px',

  //   // padding: '3px',
  //   justifyContent: 'center',
  // },
  // clothesContainer5: {
  //   display: 'flex',
  //   maxWidth: '200px',
  //   minWidth: '100px',
  //   // maxHeight: '',
  //   // minHeight: '100px',
  //   width: '10vw',
  //   minHeight: '160px',
  //   alignItems: 'center',
  //   border: 'solid 2px',
  //   margin: '20px',
  //   fontSize: '30px',

  //   // padding: '3px',
  //   justifyContent: 'center',
  // },

  // clothesBox: {
  //   margin: '40px',
  //   fontSize: '2vw',
  //   border: 'solid 1px',
  // },
  // clothesHat: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   // padding: '20px 40px',
  //   // width: '100%',
  //   // width: '10vw',
  //   height: '10vw',
  //   maxHeight: '130px',
  //   // minHeight: '50px',
  //   // alignItems: 'center',
  //   minHeight: '80px',
  //   // border: 'solid 1px',
  //   // textAlign: 'center',
  // },
  // clothesTop: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   height: '18vw',

  //   // padding: '60px 50px',
  //   maxHeight: '250px',

  //   // border: 'solid 1px',
  // },
  // clothesBottom: {
  //   display: 'flex',
  //   justifyContent: 'center',

  //   // padding: '60px 50px',
  //   maxHeight: '300px',

  //   // border: 'solid 1px',
  // },
  // clothesShoes: {
  //   display: 'flex',
  //   justifyContent: 'center',

  //   // padding: '20px 60px',
  //   maxHeight: '130px',

  //   // border: 'solid 1px',
  // },
  // clothesBag: {
  //   display: 'flex',
  //   justifyContent: 'center',

  //   // padding: '20px 60px',
  //   maxHeight: '180px',

  //   // border: 'solid 1px',
  // },
  // d: {
  //   // display: 'flex',
  // },
  leftClothesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '25px',
  },
  hatContainer: {
    display: 'flex',
    alignItems: 'center',
    // maxWidth: '200px',
    minWidth: '70px',
    minHeight: '70px',
    width: '10vw',
    justifyContent: 'center',
    border: 'solid 2px',
    margin: '20px 0px',
  },
  topContainer: {
    display: 'flex',
    alignItems: 'center',
    // maxWidth: '200px',
    minWidth: '90px',
    minHeight: '150px',
    width: '10vw',

    justifyContent: 'center',
    border: 'solid 2px',
    margin: '20px 0px',
  },
  bottomContainer: {
    display: 'flex',
    alignItems: 'center',
    // maxWidth: '200px',
    minWidth: '90px',
    minHeight: '180px',
    width: '10vw',

    justifyContent: 'center',
    border: 'solid 2px',
    margin: '20px 0px',
  },
  shoesContainer: {
    display: 'flex',
    alignItems: 'center',
    // maxWidth: '200px',
    minWidth: '70px',
    minHeight: '90px',
    width: '10vw',

    justifyContent: 'center',
    border: 'solid 2px',
    margin: '20px 0px',
  },
  bagContainer: {
    display: 'flex',
    alignItems: 'center',
    // maxWidth: '200px',
    minWidth: '85px',
    minHeight: '100px',
    width: '10vw',

    justifyContent: 'center',
    border: 'solid 2px',
    margin: '20px 0px',
  },
}));

function Closet() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <TopComment comment={'옷장에 옷을 넣어보세요.'} />
      </div>

      <div className={classes.closetContainer}>
        <div className={classes.leftClothesContainer}>
          <div className={classes.hatContainer}>
            <img style={{ maxHeight: '90px', width: '8.5vw', minWidth: '65px' }} alt="" src="../images/closet/closet_closed.jpg" />
            {/* <div>모자</div> */}
          </div>
          <div className={classes.topContainer}>
            <img style={{ maxHeight: '230px', width: '9vw', minWidth: '90px' }} alt="" src="../images/closet/closet_closed.jpg" />
            {/* <div>상의</div> */}
          </div>
          <div className={classes.bottomContainer}>
            <img style={{ maxHeight: '260px', width: '9vw', minWidth: '90px' }} alt="" src="../images/closet/closet_closed.jpg" />
            {/* <div>상의</div> */}
          </div>
          <div className={classes.shoesContainer}>
            <img style={{ maxHeight: '140px', width: '9vw', minWidth: '70px' }} alt="" src="../images/closet/closet_closed.jpg" />
            {/* <div>상의</div> */}
          </div>
        </div>
        <div className={classes.rightClothesContainer}>
          <div className={classes.bagContainer}>
            <img style={{ maxHeight: '190px', width: '9vw', minWidth: '85px' }} alt="" src="../images/closet/closet_closed.jpg" />
            {/* <div>가방</div> */}
          </div>
        </div>
      </div>
      <div className={classes.btnBox}>
        <LuxuryBtn>모두 지우기</LuxuryBtn>
        <LuxuryBtn>{'이미지 \n 다운로드'}</LuxuryBtn>
        <LuxuryBtn>{'커뮤니티 \n등록'}</LuxuryBtn>
        <LuxuryBtn>{'카카오톡 \n공유하기'}</LuxuryBtn>
      </div>
    </div>
  );
}

export default Closet;

const LuxuryBtn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  max-width: 190px;
  min-width: 170px;
  width: 8vw;
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  font-size: 15px;
  letter-spacing: 0.3em;
  color: rgba(223, 190, 106, 0.7);
  border-radius: 0;
  padding: 15px 20px 15px 20px;
  transition: all 0.7s ease-out;
  cursor: pointer;
  white-space: pre-wrap;
  text-align: center;
  background: linear-gradient(270deg, rgba(223, 190, 106, 0.8), rgba(146, 111, 52, 0.8), rgba(34, 34, 34, 0), rgba(34, 34, 34, 0));
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 30px 15px 30px 20px;
  border: none;
  border: 1px solid rgba(223, 190, 106, 0.3);
  :hover {
    color: #fff;
    border: 1px solid rgba(223, 190, 106, 0);
    color: $white;
    background-position: 99% 50%;
  }
  :disabled {
    background-position: 1% 50%;
    color: rgba(223, 190, 106, 0.7);
    border: 1px solid rgba(223, 190, 106, 0.3);
    cursor: default;
  }
`;
