const tinderReducer = (state = { infoToggle: true }, action) => {
  switch (action.type) {
    case 'TINDER_INFO':
      return { ...state, infoToggle: action.turn };
    default:
      return state;
  }
};
export default tinderReducer;
