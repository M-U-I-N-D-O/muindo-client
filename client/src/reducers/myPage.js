const myPageReducer = (state = { open: false, info: [] }, action) => {
  switch (action.type) {
    case 'OPEN_INFO_MODAL':
      return { ...state, open: action.open };
    case 'DETAIL_INFO':
      return { ...state, info: action.info };
    default:
      return state;
  }
};

export default myPageReducer;
