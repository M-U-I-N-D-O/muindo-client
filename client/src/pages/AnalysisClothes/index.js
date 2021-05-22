import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import TopComment from '../../components/AnalysisClothes/topComment';

function AnalysisClothes() {
  const history = useHistory();
  // fileUrl = 파일객체
  // imgFile = file이라는 이름의 arument에 file객체를 담고, API서버(flask)로 POST요청
  // 두 정보모두 state, redux에 저장할 필요가 있다면, 변경할 것
  const [fileUrl, setFileUrl] = useState(null);
  const [imgFile, setImgFile] = useState(null);

  function processImage(event) {
    if (event.target.files.length !== 0) {
      const imageFile = event.target.files[0];
      setImgFile(imageFile);
      const imageUrl = URL.createObjectURL(imageFile);
      console.log('imageFile :', imageFile);
      console.log(imageUrl);
      setFileUrl(imageUrl);
    }
  }

  function handleFilePost() {
    const formData = new FormData();
    console.log('imgFile :', imgFile);
    formData.append('file', imgFile);

    // return axios.post("/api/upload", formData).then(res => {
    //   alert('성공')
    // }).catch(err => {
    //   alert('실패')
    // })
  }
  return (
    <Container>
      <TopComment />
      <ImageContainer>
        <ImageBox>
          {fileUrl && <img src={fileUrl} alt={`${fileUrl}`} />}
        </ImageBox>
      </ImageContainer>

      <ButtonContainer>
        {fileUrl === null && (
          <div style={{ padding: '2vh' }}>
            <LuxuryLabelBtn htmlFor="input-file">
              이미지 등록하기
            </LuxuryLabelBtn>
            <input
              type="file"
              id="input-file"
              accept="image/*"
              onChange={processImage}
              style={{ display: 'none' }}
            />
          </div>
        )}

        {fileUrl !== null && (
          <>
            <div>
              <LuxuryBtn
                onClick={() => {
                  setFileUrl(null);
                }}
              >
                이미지 삭제하기
              </LuxuryBtn>
            </div>
            <div>
              <LuxuryBtn
                onClick={() => {
                  handleFilePost();
                  history.push('/loading');
                  setTimeout(function () {
                    history.push('/analysis_clothes/result');
                  }, 3000);
                }}
              >
                이미지 분석하기
              </LuxuryBtn>
            </div>
          </>
        )}
      </ButtonContainer>
    </Container>
  );
}

export default AnalysisClothes;

const Container = styled.div`
  padding: 2vh 2vw;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2vh;
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 50vh;
  border: 2px solid black;
  overflow: hidden;
`;
const ButtonContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const LuxuryLabelBtn = styled.label`
  display: inline-block;
  width: 15vw;
  box-sizing: border-box;
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  font-size: 0.625rem;
  letter-spacing: 0.3em;
  color: rgba(223, 190, 106, 0.7);
  border-radius: 0;
  padding: 15px 20px 15px 20px;
  transition: all 0.7s ease-out;
  background: linear-gradient(
    270deg,
    rgba(223, 190, 106, 0.8),
    rgba(146, 111, 52, 0.8),
    rgba(34, 34, 34, 0),
    rgba(34, 34, 34, 0)
  );
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 0.625rem;
  border: none;
  border: 1px solid rgba(223, 190, 106, 0.3);
  :hover {
    color: #fff;
    border: 1px solid rgba(223, 190, 106, 0);
    color: $white;
    background-position: 99% 50%;
  }
`;

const LuxuryBtn = styled.button`
  display: inline-block;
  box-sizing: border-box;
  width: 15vw;
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  font-size: 0.625rem;
  letter-spacing: 0.3em;
  color: rgba(223, 190, 106, 0.7);
  border-radius: 0;
  padding: 15px 20px 15px 20px;
  transition: all 0.7s ease-out;
  background: linear-gradient(
    270deg,
    rgba(223, 190, 106, 0.8),
    rgba(146, 111, 52, 0.8),
    rgba(34, 34, 34, 0),
    rgba(34, 34, 34, 0)
  );
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 0.625rem;
  border: none;
  border: 1px solid rgba(223, 190, 106, 0.3);
  :hover {
    color: #fff;
    border: 1px solid rgba(223, 190, 106, 0);
    color: $white;
    background-position: 99% 50%;
  }
`;
