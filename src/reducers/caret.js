const initialState = {
  block: 0,
  offset: 0,
  section: 0,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'ACTION_UPDATE_CARET':
      return {
        block: payload.block,
        offest: payload.offset,
        section: payload.section,
      };
    case 'ACTION_UPDATE_RANGE':
      return null;
    default:
      return state;
  }
};
