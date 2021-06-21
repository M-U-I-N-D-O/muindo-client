const myPageReducer = (state = { infoModal: false, info: [] }, action) => {
  switch (action.type) {
    case 'OPEN_INFO_MODAL':
      return { ...state, infoModal: action.infoModal };
    case 'DETAIL_INFO':
      return { ...state, info: action.info };
    default:
      return state;
  }
};

export default myPageReducer;
