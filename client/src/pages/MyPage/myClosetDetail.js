import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyPageDetail from '../../components/MyPage/myPageDetail';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { detailInfo } from '../../actions';

export default function MyPageClosetDetail() {
  const history = useHistory();
  const { seq } = useParams();
  const dispatch = useDispatch();

  const [myLookBookInfo, setMyLookBookInfo] = useState([]);
  const [lookBookPrice, setLookBookPrice] = useState(0);

  useEffect(() => {
    try {
      axios.get(`https://muindoooapi.azurewebsites.net/mypage/my-looks/${seq}`, {}).then((res) => {
        const detailInfoArr = [];
        detailInfoArr.push(res.data.hat, res.data.top, res.data.bottom, res.data.shoes, res.data.bag);
        const notNulDetailInfoArr = [];
        for (var i = 0; i < detailInfoArr.length; i++) {
          if (detailInfoArr[i] !== null) {
            notNulDetailInfoArr.push(detailInfoArr[i]);
          }
        }
        var clothesPrice = 0;
        for (var m = 0; m < notNulDetailInfoArr.length; m++) {
          clothesPrice += parseInt(notNulDetailInfoArr[m]['price']);
        }
        setLookBookPrice(clothesPrice);
        dispatch(detailInfo(notNulDetailInfoArr));
        setMyLookBookInfo(res.data.my_look);
      });
    } catch (err) {
      history.push('/error');
      console.log(err);
    }
  }, [history, seq, dispatch]);

  return (
    <MyPageDetail
      title="나의 룩북"
      lookBookPrice={lookBookPrice}
      myLookBookInfo={myLookBookInfo}
      page="myClosetDetail"
      goToListPath="/my_page_closet_list"
      delete="myLookBookDelete"
      solution="require"
    />
  );
}
