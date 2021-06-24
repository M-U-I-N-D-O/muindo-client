import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import MyPageList from '../../components/MyPage/myPageList';

export default function MyPageClosetList() {
  const history = useHistory();
  const [myClosetListInfo, setMyClosetListInfo] = useState([]);
  useEffect(() => {
    try {
      axios.get(`https://muindoooapi.azurewebsites.net/mypage/my-looks`, {}).then((res) => {
        setMyClosetListInfo(res.data);
      });
    } catch (err) {
      history.push('/error');
      console.log(err);
    }
  }, [history]);

  return <MyPageList myPageListTitle="나의 룩북 리스트" lookBookUrl={'/my_page_closet_detail/'} myPageListInfo={myClosetListInfo} />;
}
