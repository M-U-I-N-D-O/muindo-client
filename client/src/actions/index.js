// header 네비게이션 바
export const navbarMode = (number) => {
  return {
    type: 'NAV_MODE',
    number,
  };
};
// bottom 네비게이션 버튼 활성화
export const bottomNavMode = (number) => {
  return {
    type: 'BOTTOM_BUTTON_MODE',
    number,
  };
};

// dialog (로그인, 마이페이지)
export const dialogMode = (mode) => {
  return {
    type: 'DIALOG_MODE',
    mode,
  };
};

// 사용자 로그인 정보
export const userName = (name) => {
  return {
    type: 'USER_NAME',
    name,
  };
};
export const userEmail = (email) => {
  return {
    type: 'USER_EMAIL',
    email,
  };
};
export const closeTinderInfo = (turn) => {
  return {
    type: 'TINDER_INFO',
    turn,
  };
};
// 셜록의 돋보기
export const analysisResultImg = (src) => {
  return {
    type: 'ANALYSIS_CLOTHES_IMGSRC',
    src,
  };
};

// 모리아티 솔루션
export const solutionGender = (gender) => {
  return {
    type: 'USER_GENDER',
    gender,
  };
};
export const solutionStyles = (styles) => {
  return {
    type: 'USER_STYLES',
    styles,
  };
};
export const solutionCounter = (count) => {
  return {
    type: 'USER_BUTTON_CLICK',
    count,
  };
};
export const solutionModalMode = (mode) => {
  return {
    type: 'USER_MODAL_MODE',
    mode,
  };
};
