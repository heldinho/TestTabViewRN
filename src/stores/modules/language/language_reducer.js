const initialState = {
  locale: 'br',
};

export const language = (state = initialState, action) => {
  switch (action.type) {
    case 'setLocale':
      return {
        ...state,
        locale: action.payload,
      };
    default:
      return state;
  }
};
