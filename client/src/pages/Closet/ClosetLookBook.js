import React, { useState, useContext, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopComment from '../../components/AnalysisClothes/topComment';
import ColorChangeModal from '../../components/Closet/lookBookColorModal';
import axios from 'axios';
import { useHistory } from 'react-router';

import Paper from '@material-ui/core/Paper';
import { ModalContext } from '../../App';
import { ClothesIdContext } from '../../App';
import { ClosetTextContext } from '../../App';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import html2canvas from 'html2canvas';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // // justifyContent: 'center',
    // flexDirection: 'column',
    // alignItems: 'center',
    // width: '80vw',
    // maxWidth: '1024px',
    // minHeight: ' calc(100vh - 8.5rem)',
    // // height: '80vw',
    display: 'flex',
    paddingTop: '60px',
    paddingBottom: '56px',
    // // justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    // marginTop: '25px',
    // marginBottom: '5px',
  },
  closetImg: {
    width: '60vw',
    maxWidth: '600px',
  },

  closetContainer: {
    // backgroundColor: '#ced3e3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '340px',
    minWidth: '310px',
    width: '90vw',
    border: 'solid 4px',
    minHeight: '450px',
    position: 'relative',
  },
  btnBox: {
    display: 'flex',
    flexWrap: 'wrap',
    // flexDirection: 'column',
    alignItems: 'center',

    justifyContent: 'space-around',
    width: '350px',
  },
  leftClothesContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    // marginRight: '25px',
  },
  modalImgContainer: {
    // border: 'solid 5px',
    // width: '100%',
    // height: '100%',
    // position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '340px',
    minWidth: '310px',
    width: '90vw',
    minHeight: '450px',

    position: 'relative',
  },
  modalImgHat: {
    position: 'absolute',
    top: '40px',
    left: '30px',
    // zIndex: 2,

    width: '100px',
    height: '75px',
    // maxWidth: '80px',
    // minWidth: '70px',
    // minHeight: '90px',
    // maxHeight: '70px',
    // width: '25vw',
  },
  modalImgTop: {
    position: 'absolute',
    top: '90px',
    left: '80px',
    // zIndex: 1,
    width: '160px',
    height: '180px',

    // maxWidth: '150px',
    // minWidth: '90px',
    // minHeight: '150px',
    // width: '40vw',
  },
  modalImgBottom: {
    position: 'absolute',
    bottom: '20px',
    left: '25px',

    width: '140px',
    height: '180px',

    // maxWidth: '150px',
    // minWidth: '90px',
    // minHeight: '150px',
    // width: '40vw',
  },
  modalImgShoes: {
    position: 'absolute',
    bottom: '40px',
    right: '70px',
    width: '110px',
    height: '90px',

    // maxWidth: '90px',
    // minWidth: '70px',
    // minHeight: '90px',
    // width: '30vw',
  },
  modalImgBag: {
    position: 'absolute',
    top: '160px',
    right: '20px',
    width: '110px',
    height: '150px',

    // maxWidth: '110px',
    // minWidth: '70px',
    // minHeight: '100px',
    // width: '30vw',
  },
  lookBookBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100px',
    height: '50px',
    marginTop: '30px',
    fontFamily: 'GmarketSansMedium',
  },
  downLoadBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100px',
    height: '50px',
    marginTop: '30px',
    fontFamily: 'GmarketSansMedium',
    whiteSpace: 'pre-wrap',
  },
}));

export default function ClosetLookBook() {
  const classes = useStyles();
  const history = useHistory();
  const { lookBookColorSelect } = useContext(ModalContext);

  const { setLookBookColorModal } = useContext(ModalContext);
  const { closetImg } = useContext(ModalContext);
  const { closetClothesId } = useContext(ClothesIdContext);

  const [modifyAnchor, setModifyAnchor] = useState(null);
  const [setShareAnchor] = useState(null);
  // const { seq } = useParams();
  const { closetText } = useContext(ClosetTextContext);

  const captureRef = useRef();

  // const handleOpen = () => {
  //   setOpenModal(true);
  // };

  const handleColorChangeClick = (event) => {
    // setModalMode(event.target.id);
    setLookBookColorModal(true);
    setModifyAnchor(null);

    // console.log(lookBookColorModal);
    // console.log(modalMode);
    // console.log(closetImg);
  };

  const handleModifyClick = (event) => {
    setModifyAnchor(event.currentTarget);
  };

  // const handleShareClick = (event) => {
  //   setShareAnchor(event.currentTarget);
  // };

  const handleModifyClose = () => {
    setModifyAnchor(null);
  };

  // const handleShareClose = () => {
  //   setShareAnchor(null);
  // };

  //   const handleEraseAllButtonClick = () => {
  //     setClosetImg({
  //       hat: '',
  //       top: '',
  //       bottom: '',
  //       shoes: '',
  //       bag: '',
  //     });
  //   };

  const handleImageDownloadClick = async () => {
    // setOpenImgDownloadModal(true);

    // setTimeout(function () {
    //   setOpenImgDownloadModal(false);
    // }, 3500);
    function downloadURI(uri, name) {
      var link = document.createElement('a');
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
    }
    window.scrollTo(0, 0);
    let url = '';
    await html2canvas(captureRef.current, { useCORS: true }).then(async (canvas) => {
      url = await canvas.toDataURL('image/jpg');
      // setImgUrl(url);
      downloadURI(url, 'muindo_lookbook');
    });
    // setShareAnchor(null);
  };

  const handleUpload = async () => {
    history.push('/loading');

    // function downloadURI(uri, name) {
    //   var link = document.createElement('a');
    //   link.download = name;
    //   link.href = uri;
    //   document.body.appendChild(link);
    //   link.click();
    // }
    window.scrollTo(0, 0);
    let url = '';
    await html2canvas(captureRef.current, { useCORS: true }).then(async (canvas) => {
      url = await canvas.toDataURL('image/jpg');
      // setImgUrl(url);
      url = url.replace('data:image/png;base64,', '');
    });
    const res = await axios
      .post(
        `http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:5000/looks/upload`,
        {
          dataType: 'text',
          items: closetClothesId,
          data: {
            img: url,
          },
          tpo: closetText,
          success: function () {
            // seq = res['id'];
          },
        },

        // { headers: { 'Content-Type': 'application/json' } },
        // {
        //   headers: {
        //     Authorization:
        //       'Bearer ' +
        //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6dHJ1ZSwiaWF0IjoxNjIyODMyODkxLCJqdGkiOiI5ODQ3YmIyOC1kNTg3LTQ1ZmEtOTE1Yi1iMjIwNTI1OTFiNzAiLCJ0eXBlIjoiYWNjZXNzIiwic3ViIjoxMCwibmJmIjoxNjIyODMyODkxLCJleHAiOjE2MjU0MjQ4OTF9.yp8IslBjQNWukhJ6FzJ4q0H31rWzSqg2XMwAJ95038k',
        //   },
        // },
      )
      .catch((err) => {
        console.log(err);
        history.push('/error');
      });
    console.log(res);
    const seq = res.data.id;
    setTimeout(function () {
      history.push('/my_page_closet_detail/' + seq);
    }, 1200);
  };
  // console.log(lookBookId);
  // const shareByKakao = () => {
  //   if (window.Kakao) {
  //     const kakao = window.Kakao;
  //     if (!kakao.isInitialized()) {
  //       kakao.init(process.env.REACT_APP_KAKAO_KEY);
  //       console.log(window.Kakao.isInitialized());
  //     }
  //     kakao.Link.sendDefault({
  //       objectType: 'feed',
  //       content: {
  //         title: 'MUINDO에서 만든 룩북이 도착했어요!',
  //         description: '무지하게 패션 인싸 되고 싶은 사람들\n도와주는 곳, MUINDO',
  //         // imageUrl: 'https://ifh.cc/g/pXhGOy.jpg',
  //         // imageUrl: 'https://ifh.cc/g/GKUPxC.png',
  //         imageUrl: 'https://ifh.cc/g/6R44lA.png',
  //         link: {
  //           mobileWebUrl: 'http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com',
  //           webUrl: 'http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com',
  //         },
  //       },

  //       buttons: [
  //         {
  //           title: '나도 룩북 만들기',
  //           link: {
  //             mobileWebUrl: 'http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com',
  //             webUrl: 'http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com',
  //           },
  //         },
  //       ],
  //     });
  //   }
  // };

  return (
    <div className={classes.root}>
      {/* <ClosetModal data={modalMode} /> */}
      <ColorChangeModal />

      <div className={classes.title}>
        <TopComment comment={'룩북을 만들어보세요.'} />
      </div>
      <Paper elevation={3} className={classes.closetContainer} style={{ backgroundColor: lookBookColorSelect }}>
        <div className={classes.modalImgContainer} style={{ backgroundColor: lookBookColorSelect }} ref={captureRef}>
          <div className={classes.modalImgBottom}>
            {closetImg['bottom'] ? <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg['bottom']} id="bottom" /> : <div></div>}
          </div>
          <div className={classes.modalImgBag}>
            {closetImg['bag'] ? <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg['bag']} id="bag" /> : <div></div>}
          </div>

          <div className={classes.modalImgTop}>
            {closetImg['top'] ? <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg['top']} id="top" /> : <div></div>}
          </div>
          <div className={classes.modalImgHat}>
            {closetImg['hat'] ? <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg['hat']} id="hat" /> : <div></div>}
          </div>

          <div className={classes.modalImgShoes}>
            {closetImg['shoes'] ? <img style={{ width: '100%', height: '100%' }} alt="" src={closetImg['shoes']} id="shoes" /> : <div></div>}
          </div>
        </div>
      </Paper>

      <div className={classes.btnBox}>
        {/* <LuxuryBtn
          onClick={() => {
            history.push('/closet');
          }}
        >
          수정하기
        </LuxuryBtn> */}
        <Paper elevation={4} className={classes.lookBookBtn} onClick={handleModifyClick}>
          수정하기✍
        </Paper>
        <Menu
          id="simple-menu"
          anchorEl={modifyAnchor}
          getContentAnchorEl={null | undefined}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          keepMounted
          open={Boolean(modifyAnchor)}
          onClose={handleModifyClose}
        >
          <MenuItem
            onClick={() => {
              history.push('/closet');
              setModifyAnchor(null);
              // setClosetClothesId({
              //   hat: '',
              //   top: '',
              //   bottom: '',
              //   shoes: '',
              //   bag: '',
              // });
            }}
          >
            의상 수정하기
          </MenuItem>
          <MenuItem onClick={handleColorChangeClick}>배경 색상 변경하기</MenuItem>
        </Menu>

        {/* <Paper elevation={4} className={classes.lookBookBtn} onClick={handleShareClick}>
          공유하기💌
        </Paper> */}
        <Paper elevation={4} className={classes.downLoadBtn} onClick={handleImageDownloadClick}>
          {'  이미지\n다운로드💾'}
        </Paper>
        {/* <Menu
          id="simple-menu"
          ㅣ
          anchorEl={shareAnchor}
          getContentAnchorEl={null | undefined}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          keepMounted
          open={Boolean(shareAnchor)}
          onClose={handleShareClose}
        >
          <MenuItem onClick={handleImageDownloadClick}>이미지 다운로드 </MenuItem>
          <Helmet>
            <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
          </Helmet>

          <MenuItem onClick={shareByKakao}>카카오톡 공유하기</MenuItem>
        </Menu> */}

        {/* <LuxuryBtn onClick={handleColorChangeClick}>{'배경 색상 \n 변경하기'}</LuxuryBtn>
        <LuxuryBtn onClick={handleImageDownloadClick}>{'이미지 \n 다운로드'}</LuxuryBtn>
        <LuxuryBtn>{'카카오톡 \n공유하기'}</LuxuryBtn> */}
        <Paper elevation={4} className={classes.lookBookBtn} onClick={handleUpload}>
          컨펌받기👌
        </Paper>
      </div>
    </div>
  );
}
