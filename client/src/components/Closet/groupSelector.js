import React, { useState, createContext, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ModalContext } from '../../App';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({}));

export default function GroupSelector({ category }) {
  const classes = useStyles();
  const { condition, setCondition } = useContext(ModalContext);

  const handleChange = (event) => {
    setCondition((current) => {
      //   if (category in Object.keys(condition)) {

      current[category] = event.target.value;

      console.log(condition);
    });
  };

  return (
    <div>
      <FormControl>
        <InputLabel id="demo-simple-select-label">{category}</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={category} onChange={handleChange}>
          <MenuItem value={'검정색'}>검정색</MenuItem>
          <MenuItem value={'파란색'}>파란색</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
