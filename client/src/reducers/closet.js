const closetReducer = (
  state = {
    text: '',
    closetImage: { hat: '', top: '', bottom: '', shoes: '', bag: '' },
    closetPrice: { hat: 0, top: 0, bottom: 0, shoes: 0, bag: 0 },
    closetId: { hat: '', top: '', bottom: '', shoes: '', bag: '' },
  },
  action,
) => {
  switch (action.type) {
    case 'CLOSET_TEXT':
      return { ...state, text: action.text };
    case 'CLOSET_IMG':
      return { ...state, closetImage: action.image };
    case 'CLOSET_PRICE':
      return { ...state, closetPrice: action.price };
    case 'CLOSET_ID':
      return { ...state, closetId: action.id };
    default:
      return state;
  }
};

export default closetReducer;
