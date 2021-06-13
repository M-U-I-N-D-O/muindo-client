const loginReducer = (state = { name: '', email: '' }, action) => {
  switch (action.type) {
    case 'USER_NAME':
      return { ...state, name: action.name };
    case 'USER_EMAIL':
      return { ...state, email: action.email };
    default:
      return state;
  }
};

export default loginReducer;
