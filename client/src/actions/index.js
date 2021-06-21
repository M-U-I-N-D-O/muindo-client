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

// 옷장 모달창 열기, 닫기
export const closetModalOpen = (open) => {
  return {
    type: 'OPEN_MODAL',
    open,
  };
};

// 옷장 모달창 모드(hat,top...)
export const closetModalMode = (mode) => {
  return {
    type: 'MODAL_MODE',
    mode,
  };
};

// 옷장 TPO 텍스트
export const closetText = (text) => {
  return {
    type: 'CLOSET_TEXT',
    text,
  };
};

// 룩북 배경 색상 모달창 열기, 닫기
export const colorModalOpen = (open) => {
  return {
    type: 'OPEN_COLOR_MODAL',
    open,
  };
};

// 룩북 배경 색상
export const lookBookColor = (color) => {
  return {
    type: 'COLOR_SELECT',
    color,
  };
};

// 마이페이지 디테일페이지의 의상 정보 모달 열기, 닫기
export const infoModalOpen = (open) => {
  return {
    type: 'OPEN_INFO_MODAL',
    open,
  };
};

// 마이페이지 디테일페이지의 의상 정보 모달 열기, 닫기
export const detailInfo = (info) => {
  return {
    type: 'DETAIL_INFO',
    info,
  };
};
