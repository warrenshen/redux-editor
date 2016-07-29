function handleBackspaceStatefully(caret, range) {
  return {
    payload: {
      caret: caret,
      range: range,
    },
    type: 'ACTION_HANDLE_BACKSPACE',
  };
};

export function handleBackspace() {
  return (dispatch, getState) => {
    const { caret, range } = getState();
    return dispatch(handleBackspaceStatefully(caret, range));
  };
};

function handleEnterStatefully(caret, range) {
  return {
    payload: {
      caret: caret,
      range: range,
    },
    type: 'ACTION_HANDLE_ENTER',
  };
};

export function handleEnter() {
  return (dispatch, getState) => {
    const { caret, range } = getState();
    return dispatch(handleEnterStatefully(caret, range));
  };
};
