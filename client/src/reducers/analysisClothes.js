const analysisClothesReducer = (state = { imgSrc: '' }, action) => {
  switch (action.type) {
    case 'ANALYSIS_CLOTHES_IMGSRC':
      return { ...state, imgSrc: action.src };
    default:
      return state;
  }
};

export default analysisClothesReducer;
