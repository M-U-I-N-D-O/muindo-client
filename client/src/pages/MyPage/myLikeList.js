import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router';
import MyPageList from '../../components/MyPage/myPageList';

export default function MyPageLikeList() {
  const history = useHistory();
  const [myLikeListInfo, setMyLikeListInfo] = useState([]);
  useEffect(() => {
    try {
      axios.get(`http://elice-kdt-ai-track-vm-distribute-12.koreacentral.cloudapp.azure.com:5000/mypage/thumbs`, {}).then((res) => {
        setMyLikeListInfo(res.data);
      });
    } catch (err) {
      history.push('/error');
      console.log(err);
    }
  }, []);

  return <MyPageList myPageListTitle="저장한 룩북 리스트" lookBookUrl={'/my_page_like_detail/'} myPageListInfo={myLikeListInfo} />;
}
