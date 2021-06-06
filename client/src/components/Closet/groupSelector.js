import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import { ModalContext } from '../../App';
import axios from 'axios';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// import FilterData from '../../data/closetCategorization.json';
import FilterData from '../../data/closetCategorization.json';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // paddingTop: '60px',
    // paddingBottom: '56px',
    // justifyContent: 'center',
    marginTop: '15px',
    flexDirection: 'column',
    alignItems: 'center',
    width: '250px',
    height: '95px',
    // maxWidth: '1024px',
    // minHeight: ' calc(100vh - 8.5rem)',
    // // height: '80vw',
  },
  selector: {
    width: '80px',
  },
}));

export default function GroupSelector() {
  const classes = useStyles();
  const { condition, setCondition } = useContext(ModalContext);
  const { modalMode, setModalMode } = useContext(ModalContext);
  const { clothesList, setClothesList } = useContext(ModalContext);

  const [categoryList, setCategoryList] = useState([]);
  const [categoryNumList, setCategoryNumList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [subCategoryNumList, setSubCategoryNumList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [brandEngList, setBrandEngList] = useState([]);
  const [conditionNum, setConditionNum] = useState(10000);
  const fetch = useEffect(() => {
    try {
      const res = FilterData;
      console.log(res);
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
        brandEngArr.push(result[o]['brand']);
      }

      // let categoryNumArr = [];
      // for (var m = 0; m < result.length; m++) {
      //   categoryNumArr.push(result[m]['category_num']);
      // }

      setCategoryList(categoryArr);
      setCategoryNumList(categoryNumArr);
      setSubCategoryList(subCategoryArr);
      setSubCategoryNumList(subCategoryNumArr);
      setBrandList(brandArr);
      setBrandEngList(brandEngArr);
    } catch (err) {
      console.log(err);
    }
  }, [condition]);

  const handleInitialize = (event) => {
    var newCondition = { ...condition };
    newCondition['middleCategory'] = '';
    newCondition['subCategory'] = '';
    newCondition['brand'] = '';
    setConditionNum(10000);
    setCondition(newCondition);
  };

  const handleChangeCategory = (event) => {
    if (event.target.value) {
      var newCondition = { ...condition };
      newCondition['middleCategory'] = event.target.value;
      setConditionNum(categoryNumList.indexOf(event.target.value));
      console.log(condition);
      setCondition(newCondition);
    }
  };

  const handleChangeSubCategory = (event) => {
    if (event.target.value) {
      var newCondition = { ...condition };
      newCondition['subCategory'] = event.target.value;
      console.log(condition);
      setCondition(newCondition);
    }
  };
  const handleChangeBrand = (event) => {
    if (event.target.value) {
      var newCondition = { ...condition };
      newCondition['brand'] = event.target.value;
      console.log(condition);
      setCondition(newCondition);
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl className={classes.selector}>
          <InputLabel>중분류</InputLabel>
          <Select value="category" onChange={handleChangeCategory}>
            {condition['subCategory'] || condition['brand'] ? (
              <MenuItem onClick={handleInitialize}>분류 초기화</MenuItem>
            ) : (
              categoryList.map(function (selector, i) {
                return <MenuItem value={categoryNumList[i]}>{selector}</MenuItem>;
              })
            )}
          </Select>
        </FormControl>
        <FormControl className={classes.selector}>
          <InputLabel>소분류</InputLabel>
          <Select value="sub_category" onChange={handleChangeSubCategory}>
            {conditionNum !== 10000 ? (
              subCategoryList[conditionNum].map(function (selector, i) {
                return <MenuItem value={subCategoryNumList[conditionNum][i]}>{selector}</MenuItem>;
              })
            ) : (
              <MenuItem>중분류를 선택하세요</MenuItem>
            )}
          </Select>
        </FormControl>
        <FormControl className={classes.selector}>
          <InputLabel>브랜드</InputLabel>
          <Select value="brand" onChange={handleChangeBrand}>
            {conditionNum !== 10000 ? (
              brandList[conditionNum].map(function (selector, i) {
                return <MenuItem value={brandEngList[conditionNum[i]]}>{selector}</MenuItem>;
              })
            ) : (
              <MenuItem>중분류를 선택하세요</MenuItem>
            )}
          </Select>
        </FormControl>
      </div>
      <LuxuryBtn onClick={handleInitialize}>초기화</LuxuryBtn>
    </div>
  );
}

const LuxuryBtn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  max-width: 70px;
  min-width: 60px;
  width: 10vw;
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  font-size: 13px;
  letter-spacing: 0.2em;
  color: rgba(223, 190, 106, 0.7);
  border-radius: 0;
  padding: 5px 5px 5px 5px;
  transition: all 0.7s ease-out;
  cursor: pointer;
  white-space: pre-wrap;
  text-align: center;
  background: linear-gradient(270deg, rgba(223, 190, 106, 0.8), rgba(146, 111, 52, 0.8), rgba(34, 34, 34, 0), rgba(34, 34, 34, 0));
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 15px 0px;
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
