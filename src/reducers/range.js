const initialState = null;

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'ACTION_UPDATE_CARET':
      return null;
    case 'ACTION_UPDATE_RANGE':
      return {
        end: payload.end,
        start: payload.start,
      };
    default:
      return state;
  }
};
