import React, { useState, useCallback, useContext, useEffect, useRef } from 'react';

import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { ModalContext } from '../../App';
import AnalysisClothesResult from '../../pages/AnalysisClothes/AnalysisClothesResult';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1vw',
    // maxWidth: '1024px',
    // minHeight: ' calc(100vh - 8.5rem)',
    // backgroundColor: '#ececec',
    height: '10vh',
  },
}));

export default function ColorSelect() {
  const classes = useStyles();

  const { lookBookColorSelect, setLookBookColorSelect } = useContext(ModalContext);

  const [color, setColor] = useColor('hex', '#ffffff');

  setLookBookColorSelect(color['hex']);
  //   console.log(lookBookColorModal['hex']);

  return <ColorPicker width={400} height={200} color={color} onChange={setColor} hideHSV dark />;
}
