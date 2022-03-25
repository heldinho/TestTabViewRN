export const setLocale = payload => {
  return dispatch => {
    dispatch({ type: 'setLocale', payload });
  };
};
