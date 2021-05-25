const solutionReducer = (state = { gender: '', styles: {}, buttonCount: 0 }, action) => {
  switch (action.type) {
    case 'USER_GENDER':
      return { ...state, gender: action.gender };
    case 'USER_STYLES':
      return { ...state, styles: action.styles };
    case 'USER_BUTTON_CLICK':
      return { ...state, count: action.count };
    default:
      return state;
  }
};

export default solutionReducer;
