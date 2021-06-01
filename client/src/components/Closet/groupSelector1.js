import React, { useState, createContext, useContext, useEffect } from 'react';
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
  const [selectorList1, setSelectorList1] = useState([]);
  const [selectorList2, setSelectorList2] = useState([]);
  const [selectorList3, setSelectorList3] = useState([]);
  const [selectorList4, setSelectorList4] = useState([]);
  const [conditionNum, setConditionNum] = useState(100);
  const fetch = useEffect(() => {
    try {
      axios.get('http://localhost:3000/data/closetCondition.json').then((res) => {
        let result = res.data.filter_query;
        result = result[modalMode].middle_category;
        setSelectorList1(result);
        setSelectorList2(result);
        setSelectorList3(result);
        setSelectorList4(result);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  // console.log(selectorList);
  console.log(selectorList1);
  let a = [];
  for (var i = 0; i < selectorList1.length; i++) {
    a.push(selectorList1[i]['category']);
  }

  let b = [];
  for (var j = 0; j < selectorList2.length; j++) {
    b.push(selectorList2[j]['sub_category']);
  }
  console.log(b);

  // let c = [];
  // for (var k = 0; k < selectorList3.length; k++) {
  //   c.push(selectorList3[k]['price']);
  // }
  // console.log(c);

  let d = [];
  for (var l = 0; l < selectorList4.length; l++) {
    d.push(selectorList4[l]['brand']);
  }
  console.log(d);

  // for (var i = 0; i < selectorList.length; i++) {
  //   a.push(selectorList[i][kind]);
  // }

  console.log(a);

  const handleChange1 = (event) => {
    if (event.target.value) {
      var newCondition = { ...condition };
      newCondition['category'] = event.target.value;
      setConditionNum(a.indexOf(event.target.value));
      console.log(condition);
      setCondition(newCondition);
    }
  };

  const handleChange2 = (event) => {
    if (event.target.value) {
      var newCondition = { ...condition };
      newCondition['sub_category'] = event.target.value;
      console.log(condition);
      setCondition(newCondition);
    }
  };
  // const handleChange3 = (event) => {
  //   if (event.target.value) {
  //     var newCondition = { ...condition };
  //     newCondition['price'] = event.target.value;
  //     console.log(condition);
  //     setCondition(newCondition);
  //   }
  // };
  const handleChange4 = (event) => {
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
        <Select value="category" onChange={handleChange1}>
          {a.map(function (selector, i) {
            return <MenuItem value={selector}>{selector}</MenuItem>;
          })}
          {/* {selectorList.map(function (selector, i) {
            selector[kind].map(function (obj, j) {
              // console.log(obj);
              return <MenuItem value="obj">{obj}</MenuItem>;
            });
          })} */}
          {/* <MenuItem value={'디스이즈네버댓'}>디스이즈네버댓</MenuItem>
          <MenuItem value={''}>미정</MenuItem> */}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>sub-category</InputLabel>
        <Select value="sub_category" onChange={handleChange2}>
          {conditionNum !== 100 ? (
            b[conditionNum].map(function (selector, i) {
              return <MenuItem value={selector}>{selector}</MenuItem>;
            })
          ) : (
            <div></div>
          )}
        </Select>
      </FormControl>
      {/* <FormControl>
        <InputLabel>price</InputLabel>
        <Select value="price" onChange={handleChange3}>
          {conditionNum !== 100 ? (
            c[conditionNum].map(function (selector, i) {
              return <MenuItem value={selector}>{selector}</MenuItem>;
            })
          ) : (
            <div></div>
          )}
        </Select>
      </FormControl> */}

      <FormControl>
        <InputLabel>brand</InputLabel>
        <Select value="brand" onChange={handleChange4}>
          {conditionNum !== 100 ? (
            d[conditionNum].map(function (selector, i) {
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
