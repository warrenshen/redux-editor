const initialState = {
  end: {
    block: 0,
    offset: 0,
    section: 0,
  },
  start: {
    block: 0,
    offset: 0,
    section: 0,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};