const lookBookReducer = (state = { open: false, color: '#fff' }, action) => {
  switch (action.type) {
    case 'OPEN_COLOR_MODAL':
      return { ...state, open: action.open };
    case 'COLOR_SELECT':
      return { ...state, color: action.color };
    default:
      return state;
  }
};

export default lookBookReducer;
