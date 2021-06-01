import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ModalContext } from '../../App';
import axios from 'axios';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({}));

export default function GroupSelector1() {
  const classes = useStyles();
  const { condition, setCondition } = useContext(ModalContext);
  const { modalMode, setModalMode } = useContext(ModalContext);
  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [conditionNum, setConditionNum] = useState(100);
  const fetch = useEffect(() => {
    try {
      axios.get('http://localhost:3000/data/closetCondition.json').then((res) => {
        let result = res.data.filter_query;
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
      });
    } catch (err) {
      console.log(err);
    }
  }, [condition]);

  const handleInitialize = (event) => {
    var newCondition = { ...condition };
    delete newCondition['category'];
    delete newCondition['sub_category'];
    delete newCondition['brand'];
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
      <FormControl>
        <InputLabel>category</InputLabel>
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
        <InputLabel>sub-category</InputLabel>
        <Select value="sub_category" onChange={handleChangeSubCategory}>
          {conditionNum !== 100 ? (
            subCategoryList[conditionNum].map(function (selector, i) {
              return <MenuItem value={selector}>{selector}</MenuItem>;
            })
          ) : (
            <div></div>
          )}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>brand</InputLabel>
        <Select value="brand" onChange={handleChangeBrand}>
          {conditionNum !== 100 ? (
            brandList[conditionNum].map(function (selector, i) {
              return <MenuItem value={selector}>{selector}</MenuItem>;
            })
          ) : (
            <div></div>
          )}
        </Select>
      </FormControl>
    </div>
  );
}
