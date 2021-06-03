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

const useStyles = makeStyles((theme) => ({}));

export default function GroupSelector() {
  const classes = useStyles();
  const { condition, setCondition } = useContext(ModalContext);
  const { modalMode, setModalMode } = useContext(ModalContext);
  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [conditionNum, setConditionNum] = useState(10000);
  const fetch = useEffect(() => {
    try {
      // 이 부분 로컬에서 카테고리 데이터 import해서 가져오는 걸로 바꿔주기
      // axios.get('http://localhost:3000/data/closetCondition.json').then((res) => {
      // });

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

      setCategoryList(categoryArr);
      setSubCategoryList(subCategoryArr);
      setBrandList(brandArr);
    } catch (err) {
      console.log(err);
    }
  }, [condition]);

  const handleInitialize = (event) => {
    var newCondition = { ...condition };
    delete newCondition['category'];
    delete newCondition['sub_category'];
    delete newCondition['brand'];
    setConditionNum(10000);
    setCondition(newCondition);
  };

  const handleChangeCategory = (event) => {
    if (event.target.value) {
      var newCondition = { ...condition };
      newCondition['category'] = event.target.value;
      setConditionNum(categoryList.indexOf(event.target.value));
      console.log(condition);
      setCondition(newCondition);
    }
  };

  const handleChangeSubCategory = (event) => {
    if (event.target.value) {
      var newCondition = { ...condition };
      newCondition['sub_category'] = event.target.value;
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
    <div>
      <LuxuryBtn onClick={handleInitialize}>초기화</LuxuryBtn>

      <FormControl>
        <InputLabel>중분류</InputLabel>
        <Select value="category" onChange={handleChangeCategory}>
          {condition['sub_category'] || condition['brand'] ? (
            <MenuItem onClick={handleInitialize}>분류 초기화</MenuItem>
          ) : (
            categoryList.map(function (selector, i) {
              return <MenuItem value={selector}>{selector}</MenuItem>;
            })
          )}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>소분류</InputLabel>
        <Select value="sub_category" onChange={handleChangeSubCategory}>
          {conditionNum !== 10000 ? (
            subCategoryList[conditionNum].map(function (selector, i) {
              return <MenuItem value={selector}>{selector}</MenuItem>;
            })
          ) : (
            <MenuItem>중분류를 선택하세요</MenuItem>
          )}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>브랜드</InputLabel>
        <Select value="brand" onChange={handleChangeBrand}>
          {conditionNum !== 10000 ? (
            brandList[conditionNum].map(function (selector, i) {
              return <MenuItem value={selector}>{selector}</MenuItem>;
            })
          ) : (
            <MenuItem>중분류를 선택하세요</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
}

const LuxuryBtn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  max-width: 160px;
  min-width: 100px;
  width: 5vw;
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
  margin: 5px 15px 5px 15px;
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
