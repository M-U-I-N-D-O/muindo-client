// header 네비게이션 바
export const navbarMode = (number) => {
  return {
    type: 'NAV_MODE',
    number,
  };
};

// 셜록의 돋보기
export const analysisResultImg = (src) => {
  return {
    type: 'ANALYSIS_CLOTHES_IMGSRC',
    src,
  };
};
