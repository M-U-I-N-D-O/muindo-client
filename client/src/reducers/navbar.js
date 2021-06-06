const navbarReducer = (state = { switch: 0, button: -1 }, action) => {
  switch (action.type) {
    case 'NAV_MODE':
      return { ...state, switch: action.number };
    case 'BOTTOM_BUTTON_MODE':
      return { ...state, button: action.number };
    default:
      return state;
  }
};

export default navbarReducer;
