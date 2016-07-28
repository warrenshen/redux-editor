export const updateRange = (range) => {
  if (range === null) {
    return null;
  } else {
    return {
      payload: {
        active: (range !== null),
        end: (range !== null) ? range.end : null,
        start: (range !== null) ? range.start : null,
      },
      type: 'ACTION_UPDATE_RANGE',
    };
  }
};
