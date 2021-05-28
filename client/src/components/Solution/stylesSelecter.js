import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { solutionCounter } from '../../actions';

import axios from 'axios';
import styled from 'styled-components';

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
    <InfiniteContainer>
      <ul>
        {Array.isArray(props.styleList) &&
          props.styleList.length !== 0 &&
          props.styleList.map((listItem, index) => {
            return (
              <li key={index}>
                <input type="checkbox" id={`myCheckbox${index}`} name="style" value={`${listItem[1]}`} onClick={() => countCheckedBox()} />
                <label htmlFor={`myCheckbox${index}`}>
                  <img src={`${listItem[0]}`} alt={`${listItem[0]}`} />
                </label>
              </li>
            );
          })}
      </ul>
    </InfiniteContainer>
  );
}

export default StylesSelecter;

const InfiniteContainer = styled.div``;
// const StyleListBox = styled.ul`
//   list-style-type: none;
// `;
// const StyleListItem = styled.li`
//   display: inline-block;
// `;
// const StyledCheckbox = styled.input`
//   display: none;
// `;
// const StyledLabel = styled.label`
//   border: 1px solid #fff;
//   padding: 10px;
//   display: block;
//   position: relative;
//   margin: 10px;
//   cursor: pointer;

//   :before {
//     background-color: white;
//     color: white;
//     content: ' ';
//     display: block;
//     border-radius: 50%;
//     border: 1px solid grey;
//     position: absolute;
//     top: -5px;
//     left: -5px;
//     width: 25px;
//     height: 25px;
//     text-align: center;
//     line-height: 28px;
//     transition-duration: 0.4s;
//     transform: scale(0);
//   }
//   label img {
//     height: 100px;
//     width: 100px;
//     transition-duration: 0.2s;
//     transform-origin: 50% 50%;
//   }
//   :checked + label {
//     border-color: #ddd;
//   }
//   :checked + label:before {
//     content: '✓';
//     background-color: grey;
//     transform: scale(1);
//   }
//   :checked + label img {
//     transform: scale(0.9);
//     box-shadow: 0 0 5px #333;
//     z-index: -1;
//   }
// `;
