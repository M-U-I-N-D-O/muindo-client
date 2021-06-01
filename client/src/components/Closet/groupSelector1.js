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

export default function GroupSelector1({ kind }) {
  const classes = useStyles();
  const { condition, setCondition } = useContext(ModalContext);
  const { modalMode, setModalMode } = useContext(ModalContext);
  const [selectorList, setSelectorList] = useState([]);
  const [b, setB] = useState([]);
  const fetch = useEffect(() => {
    try {
      axios.get('http://localhost:3000/data/closetCondition.json').then((res) => {
        let result = res.data.filter_query;
        result = result[modalMode].middle_category;
        setSelectorList(result);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  // console.log(selectorList);
  console.log(selectorList);
  let a = [];
  for (var i = 0; i < selectorList.length; i++) {
    a.push(selectorList[i][kind]);
  }
  // for (var i = 0; i < selectorList.length; i++) {
  //   a.push(selectorList[i][kind]);
  // }
  // let b = [];

  // for (var j = 0; j < a.length; j++) {
  //   b.push(a[j][kind]);
  // }

  console.log(a);

  // setB(a);
  // console.log(b);
  // console.log(selectorList);
  const handleChange = (event) => {
    if (event.target.value) {
      var newCondition = { ...condition };
      newCondition[kind] = event.target.value;
      console.log(condition);
      setCondition(newCondition);
    }
  };

  return (
    <div>
      <FormControl>
        <InputLabel>{kind}</InputLabel>
        <Select value={kind} onChange={handleChange}>
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
    </div>
  );
}
