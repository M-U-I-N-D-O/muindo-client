import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { solutionCounter } from '../../actions';

import axios from 'axios';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

import './imageCheckBox.css';

function StylesSelecter(props) {
  const dispatch = useDispatch();

  //   const [styleList, setStyleList] = useState([]);
  //   const [page, setPage] = useState(PAGE_NUMBER);

  const countCheckedBox = () => {
    const query = 'input[name="style"]:checked';
    const selectedEls = document.querySelectorAll(query);

    dispatch(solutionCounter(selectedEls.length));
  };

  //   useEffect(() => {
  //     try {
  //       axios.get('http://localhost:3000/data/solution.json').then((response) => {
  //         console.log('page :', page);
  //         setStyleList([...styleList, ...response.data.data]);
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, [page]);

  //   const scrollToEnd = () => {
  //     console.log('마지막');
  //     setTimeout(() => {
  //       setPage(page + 1);
  //     }, 1000);
  //   };

  if (props.styleList.length === 0) return null;
  return (
    <div>
      <ul>
        {Array.isArray(props.styleList) &&
          props.styleList.length !== 0 &&
          props.styleList.map((listItem, index) => {
            return (
              <li key={index}>
                <input type="checkbox" id={`myCheckbox${index}`} name="style" value={`${listItem[1]}`} onClick={() => countCheckedBox()} />
                <label htmlFor={`myCheckbox${index}`}>
                  <Paper elevation={3}>
                    <img src={`${listItem[0]}`} alt={`${listItem[0]}`} />
                  </Paper>
                </label>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default StylesSelecter;
