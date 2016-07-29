const initialState = {
  active: true,
  block: 0,
  offset: 0,
  section: 0,
};

const inactiveState = {
  active: false,
  block: null,
  offset: null,
  section: null,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'ACTION_UPDATE_CARET':
      return {
        active: payload.active,
        block: payload.block,
        offset: payload.offset,
        section: payload.section,
      };
    case 'ACTION_UPDATE_RANGE':
      return inactiveState;
    default:
      return state;
  }
};
