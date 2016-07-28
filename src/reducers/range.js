const inactiveState = {
  active: false,
  end: null,
  start: null,
};

export default (state = inactiveState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'ACTION_UPDATE_CARET':
      return inactiveState;
    case 'ACTION_UPDATE_RANGE':
      return {
        active: payload.active,
        end: payload.end,
        start: payload.start,
      };
    default:
      return state;
  }
};
