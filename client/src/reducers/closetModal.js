const closetModalReducer = (state = { open: false, mode: '', condition: { middleCategory: '', subCategory: '', brand: '' } }, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, open: action.open };
    case 'MODAL_MODE':
      return { ...state, mode: action.mode };
    case 'CATEGORY_CONDITION':
      return { ...state, condition: action.condition };
    default:
      return state;
  }
};

export default closetModalReducer;
