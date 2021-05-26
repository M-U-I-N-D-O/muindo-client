const solutionReducer = (state = { gender: '', styles: {}, buttonCount: 0, modalMode: 0 }, action) => {
  switch (action.type) {
    case 'USER_GENDER':
      return { ...state, gender: action.gender };
    case 'USER_STYLES':
      return { ...state, styles: action.styles };
    case 'USER_BUTTON_CLICK':
      return { ...state, count: action.count };
    case 'USER_MODAL_MODE':
      return { ...state, modalMode: action.mode };
    default:
      return state;
  }
};

export default solutionReducer;
