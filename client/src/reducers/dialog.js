const dialogReducer = (state = { mode: 0 }, action) => {
  switch (action.type) {
    case 'DIALOG_MODE':
      return { ...state, mode: action.mode };
    default:
      return state;
  }
};

export default dialogReducer;
