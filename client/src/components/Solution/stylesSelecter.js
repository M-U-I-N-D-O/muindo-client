import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { solutionCounter } from '../../actions';

import axios from 'axios';
import styled from 'styled-components';

import './imageCheckBox.css';

function StylesSelecter() {
  const [styleList, setStyleList] = useState([]);
  const [preItem, setPreItem] = useState(0);
  const [item, setItem] = useState(20);
  const [hitBottom, setHitBottom] = useState(false);
  const dispatch = useDispatch();

  const countCheckedBox = () => {
    const query = 'input[name="style"]:checked';
    const selectedEls = document.querySelectorAll(query);

    dispatch(solutionCounter(selectedEls.length));
  };

  const fecth = useEffect(() => {
    setHitBottom(false);

    try {
      axios.get('http://localhost:3000/data/solution.json').then((response) => {
        let result = response.data.data.slice(preItem, item);
        setPreItem(item);
        setItem(item + 20);
        setStyleList([...styleList, ...result]);
      });
    } catch (err) {
      console.log(err);
    }
  }, [hitBottom]);

  const infiniteScroll = () => {
    let styleBox = document.querySelector('.slick-list');
    let scrollHeight = styleBox.scrollHeight;
    let scrollTop = styleBox.scrollTop;
    let clientHeight = styleBox.clientHeight;

    console.log('scrollTop : ', scrollTop);
    console.log('clientHeight : ', clientHeight);
    console.log('scrollHeight : ', scrollHeight);

    if (scrollTop + clientHeight >= scrollHeight * 0.95) {
      setHitBottom(true);
      // setPreItem(item);
      // setItem(item + 20);
      // getData();
    }
  };

  useEffect(() => {
    let styleBox = document.querySelector('.slick-list');
    styleBox.addEventListener('scroll', infiniteScroll);
    return () => {
      styleBox.removeEventListener('scroll', infiniteScroll);
    };
  }, []);

  //   const getData = () => {
  //     try {
  //       axios.get('http://localhost:3000/data/solution.json').then((response) => {
  //         console.log('preItem, item :', preItem, item);
  //         let result = response.data.data.slice(preItem, item);
  //         console.log(styleList);
  //         setStyleList([...styleList, ...result]);

  //         // console.log(response.data.data);
  //         // setStyleList(response.data.data);
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   useEffect(() => {
  //     let styleBox = document.querySelector('.slick-list');
  //     styleBox.addEventListener('scroll', infiniteScroll);
  //   }, []);

  if (styleList.length === 0) return null;
  return (
    <InfiniteContainer>
      <ul>
        {Array.isArray(styleList) &&
          styleList.length !== 0 &&
          styleList.map((listItem, index) => {
            return (
              <li key={index}>
                <input type="checkbox" id={`myCheckbox${index}`} name="style" value={`${listItem[1]}`} onClick={() => countCheckedBox()} />
                <label htmlFor={`myCheckbox${index}`}>
                  <img src={`${listItem[0]}`} alt={`${listItem[0]}`} />
                </label>
              </li>
            );
          })}
        {/* <StyleListItem>
          <StyledCheckbox type="checkbox" id="myCheckbox1" name="style" value="firefox" />
          <StyledLabel htmlFor="myCheckbox1">
            <img src="http://townandcountryremovals.com/wp-content/uploads/2013/10/firefox-logo-200x200.png" alt="man-img" />
          </StyledLabel>
        </StyleListItem>
        <StyleListItem>
          <StyledCheckbox type="checkbox" id="myCheckbox2" name="style" value="chrome" />
          <StyledLabel htmlFor="myCheckbox2">
            <img src="http://tech21info.com/admin/wp-content/uploads/2013/03/chrome-logo-200x200.png" alt="man-img" />
          </StyledLabel>
        </StyleListItem>
        <StyleListItem>
          <StyledCheckbox type="checkbox" id="myCheckbox3" name="style" value="facebook" />
          <StyledLabel htmlFor="myCheckbox3">
            <img src="http://www.thebusinessofsports.com/wp-content/uploads/2010/10/facebook-icon-200x200.png" alt="man-img" />
          </StyledLabel>
        </StyleListItem> */}
      </ul>
    </InfiniteContainer>
  );
}

export default StylesSelecter;

const InfiniteContainer = styled.div`
  overflow: auto;
`;
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
