import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopComment from '../../components/AnalysisClothes/topComment';
import ColorChangeModal from '../../components/Closet/lookBookColorModal';
import axios from 'axios';
import { useHistory } from 'react-router';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import html2canvas from 'html2canvas';
import { colorModalOpen } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import url from '../../url';

axios.defaults.baseURL = url;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: '60px',
    paddingBottom: '56px',
    flexDirection: 'column',
    alignItems: 'center',
  },
  closetImg: {
    width: '60vw',
    maxWidth: '600px',
  },
  closetContainer: {
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
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '350px',
  },
  modalImgContainer: {
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
    width: '100px',
    height: '75px',
  },
  modalImgTop: {
    position: 'absolute',
    top: '90px',
    left: '80px',
    width: '160px',
    height: '180px',
  },
  modalImgBottom: {
    position: 'absolute',
    bottom: '20px',
    left: '25px',
    width: '140px',
    height: '180px',
  },
  modalImgShoes: {
    position: 'absolute',
    bottom: '40px',
    right: '70px',
    width: '110px',
    height: '90px',
  },
  modalImgBag: {
    position: 'absolute',
    top: '160px',
    right: '20px',
    width: '110px',
    height: '150px',
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
  const dispatch = useDispatch();
  const history = useHistory();
  const captureRef = useRef();

  const text = useSelector((state) => state.closet.text);
  const BackgroundColor = useSelector((state) => state.lookBook.color);
  const img = useSelector((state) => state.closet.closetImage);
  const id = useSelector((state) => state.closet.closetId);
  const [modifyAnchor, setModifyAnchor] = useState(null);

  const handleColorChangeClick = (event) => {
    dispatch(colorModalOpen(true));
    setModifyAnchor(null);
  };

  const handleModifyClick = (event) => {
    setModifyAnchor(event.currentTarget);
  };

  const handleModifyClose = () => {
    setModifyAnchor(null);
  };

  const handleImageDownloadClick = async () => {
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
      downloadURI(url, 'muindo_lookbook');
    });
  };

  const handleUpload = async () => {
    history.push('/loading');
    window.scrollTo(0, 0);
    let url = '';
    await html2canvas(captureRef.current, { useCORS: true }).then(async (canvas) => {
      url = await canvas.toDataURL('image/jpg');
      url = url.replace('data:image/png;base64,', '');
    });
    const res = await axios
      .post(`/looks/upload`, {
        dataType: 'string',
        items: id,
        data: {
          img: url,
        },
        tpo: text,
        success: function () {},
      })
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

  return (
    <div className={classes.root}>
      <ColorChangeModal />

      <div className={classes.title}>
        <TopComment comment={'룩북을 만들어보세요.'} />
      </div>

      <Paper elevation={3} className={classes.closetContainer} style={{ backgroundColor: BackgroundColor }}>
        <div className={classes.modalImgContainer} style={{ backgroundColor: BackgroundColor }} ref={captureRef}>
          <div className={classes.modalImgBottom}>
            {img['bottom'] ? <img style={{ width: '100%', height: '100%' }} alt="" src={img['bottom']} id="bottom" /> : <div></div>}
          </div>
          <div className={classes.modalImgBag}>
            {img['bag'] ? <img style={{ width: '100%', height: '100%' }} alt="" src={img['bag']} id="bag" /> : <div></div>}
          </div>

          <div className={classes.modalImgTop}>
            {img['top'] ? <img style={{ width: '100%', height: '100%' }} alt="" src={img['top']} id="top" /> : <div></div>}
          </div>
          <div className={classes.modalImgHat}>
            {img['hat'] ? <img style={{ width: '100%', height: '100%' }} alt="" src={img['hat']} id="hat" /> : <div></div>}
          </div>
          <div className={classes.modalImgShoes}>
            {img['shoes'] ? <img style={{ width: '100%', height: '100%' }} alt="" src={img['shoes']} id="shoes" /> : <div></div>}
          </div>
        </div>
      </Paper>

      <div className={classes.btnBox}>
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
            }}
          >
            의상 수정하기
          </MenuItem>
          <MenuItem onClick={handleColorChangeClick}>배경 색상 변경하기</MenuItem>
        </Menu>

        <Paper elevation={4} className={classes.downLoadBtn} onClick={handleImageDownloadClick}>
          {'  이미지\n다운로드💾'}
        </Paper>
        <Paper elevation={4} className={classes.lookBookBtn} onClick={handleUpload}>
          컨펌받기👌
        </Paper>
      </div>
    </div>
  );
}
