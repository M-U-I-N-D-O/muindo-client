const closetModalReducer = (state = { open: false, mode: '', text: '', clothesList: '' }, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, open: action.open };
    case 'MODAL_MODE':
      return { ...state, mode: action.mode };
    case 'CLOSET_TEXT':
      return { ...state, text: action.text };
    case 'CLOTHES_LIST':
      return { ...state, clothesList: action.clothesList };
    default:
      return state;
  }
};

export default closetModalReducer;
