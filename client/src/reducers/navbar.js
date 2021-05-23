const navbarReducer = (state = { switch: 0 }, action) => {
  switch (action.type) {
    case 'NAV_MODE':
      return { ...state, switch: action.number };
    default:
      return state;
  }
};

export default navbarReducer;
