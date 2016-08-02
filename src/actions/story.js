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

function handleCharacterStatefully(caret, range, character) {
  return {
    payload: {
      caret: caret,
      character: character,
      range: range,
    },
    type: 'ACTION_HANDLE_CHARACTER',
  };
};

export function handleCharacter(character) {
  return (dispatch, getState) => {
    const { caret, range } = getState();
    return dispatch(handleCharacterStatefully(caret, range, character));
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
