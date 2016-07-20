export const updateSelection = (start, end) => {
  return {
    payload: {
      end: end,
      start: start,
    },
    type: 'ACTION_UPDATE_SELECTION',
  };
};
