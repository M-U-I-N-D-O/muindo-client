import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ModalContext } from '../../App';
import Paper from '@material-ui/core/Paper';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { ClothesIdContext } from '../../App';
import { ClothesPriceContext } from '../../App';

// import FilterData from '../../data/closetCategorization.json';
import FilterData from '../../data/closetCategorization.json';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // paddingTop: '60px',
    // paddingBottom: '56px',
    // justifyContent: 'center',
    // marginTop: '10px',
    flexDirection: 'column',
    alignItems: 'center',
    width: '350px',
    height: '105px',
    // maxWidth: '1024px',
    // minHeight: ' calc(100vh - 8.5rem)',
    // // height: '80vw',
  },
  selector: {
    width: '90px',
    height: '35px',
    margin: '10px',
  },
  initializeBtnContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '180px',
    whiteSpace: 'pre-wrap',
    marginTop: '15px',
  },

  initializeBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80px',
    height: '45px',
    border: 'solid 1px',
    fontFamily: 'GmarketSansMedium',
    // marginRight: '10px',
  },
}));

export default function GroupSelector() {
  const classes = useStyles();
  const { condition, setCondition } = useContext(ModalContext);
  const { modalMode, setModalMode } = useContext(ModalContext);
  const [categoryList, setCategoryList] = useState([]);
  const [categoryNumList, setCategoryNumList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [subCategoryNumList, setSubCategoryNumList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [brandEngList, setBrandEngList] = useState([]);
  const [conditionNum, setConditionNum] = useState(10000);
  const { closetClothesId, setClosetClothesId } = useContext(ClothesIdContext);
  const { closetImg, setClosetImg } = useContext(ModalContext);
  const { setOpenClosetModal } = useContext(ModalContext);
  const { clothesPrice, setClothesPrice } = useContext(ClothesPriceContext);

  useEffect(() => {
    try {
      const res = FilterData;
      let result = res.filter_query;
      result = result[modalMode].middle_category;

      let categoryArr = [];
      for (var i = 0; i < result.length; i++) {
        categoryArr.push(result[i]['category']);
      }

      let subCategoryArr = [];
      for (var j = 0; j < result.length; j++) {
        subCategoryArr.push(result[j]['sub_category']);
      }
      let brandArr = [];
      for (var l = 0; l < result.length; l++) {
        brandArr.push(result[l]['brand']);
      }

      let categoryNumArr = [];
      for (var m = 0; m < result.length; m++) {
        categoryNumArr.push(result[m]['category_num']);
      }
      let subCategoryNumArr = [];
      for (var n = 0; n < result.length; n++) {
        subCategoryNumArr.push(result[n]['sub_category_num']);
      }
      let brandEngArr = [];
      for (var o = 0; o < result.length; o++) {
        brandEngArr.push(result[o]['brand_eng']);
      }

      setCategoryList(categoryArr);
      setCategoryNumList(categoryNumArr);
      setSubCategoryList(subCategoryArr);
      setSubCategoryNumList(subCategoryNumArr);
      setBrandList(brandArr);
      setBrandEngList(brandEngArr);
    } catch (err) {
      console.log(err);
    }
  }, [condition, modalMode]);

  const handleCategoryInitialize = (event) => {
    var newCondition = { ...condition };
    newCondition['middleCategory'] = '';
    newCondition['subCategory'] = '';
    newCondition['brand'] = '';

    setConditionNum(10000);
    setCondition(newCondition);
  };

  const handleImageInitialize = (event) => {
    var closetClothesIdArr = { ...closetClothesId };
    closetClothesIdArr[modalMode] = '';
    setClosetClothesId(closetClothesIdArr);
    var closetImgArr = { ...closetImg };
    closetImgArr[modalMode] = '';
    setClosetImg(closetImgArr);
    var newClothesPrice = { ...clothesPrice };
    newClothesPrice[modalMode] = 0;
    setClothesPrice(newClothesPrice);
    setModalMode('');

    setOpenClosetModal(false);
  };

  const handleChangeCategory = (event) => {
    if (event.target.value) {
      var newCondition = { ...condition };
      newCondition['middleCategory'] = event.target.value;
      setConditionNum(categoryNumList.indexOf(event.target.value));
      setCondition(newCondition);
    }
  };

  const handleChangeSubCategory = (event) => {
    if (event.target.value) {
      var newCondition = { ...condition };
      newCondition['subCategory'] = event.target.value;
      setCondition(newCondition);
    }
  };
  const handleChangeBrand = (event) => {
    if (event.target.value) {
      var newCondition = { ...condition };
      newCondition['brand'] = event.target.value;
      setCondition(newCondition);
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl className={classes.selector}>
          <InputLabel>중분류</InputLabel>
          <Select value={condition['middleCategory']} onChange={handleChangeCategory}>
            {condition['subCategory'] || condition['brand'] ? (
              <MenuItem onClick={handleCategoryInitialize}>분류 초기화</MenuItem>
            ) : (
              categoryList.map(function (selector, i) {
                return (
                  <MenuItem key={i} value={categoryNumList[i]}>
                    {selector}
                  </MenuItem>
                );
              })
            )}
          </Select>
        </FormControl>
        <FormControl className={classes.selector}>
          <InputLabel>소분류</InputLabel>
          <Select value={condition['subCategory']} onChange={handleChangeSubCategory}>
            {conditionNum !== 10000 ? (
              subCategoryList[conditionNum].map(function (selector, i) {
                return (
                  <MenuItem key={i} value={subCategoryNumList[conditionNum][i]}>
                    {selector}
                  </MenuItem>
                );
              })
            ) : (
              <MenuItem>중분류를 선택하세요</MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl className={classes.selector}>
          <InputLabel>브랜드</InputLabel>
          <Select value={condition['brand']} onChange={handleChangeBrand}>
            {conditionNum !== 10000 ? (
              brandList[conditionNum].map(function (selector, i) {
                return (
                  <MenuItem key={i} value={brandEngList[conditionNum][i]}>
                    {selector}
                  </MenuItem>
                );
              })
            ) : (
              <MenuItem>중분류를 선택하세요</MenuItem>
            )}
          </Select>
        </FormControl>
      </div>
      <div className={classes.initializeBtnContainer}>
        <Paper elevation={3} className={classes.initializeBtn} onClick={handleCategoryInitialize}>
          {'카테고리\n초기화'}
        </Paper>
        <Paper elevation={3} className={classes.initializeBtn} onClick={handleImageInitialize}>
          {' 의상\n초기화'}
        </Paper>
      </div>
    </div>
  );
}
