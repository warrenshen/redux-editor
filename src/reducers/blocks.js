export default (state = {}, action) => {
  const { payload, type } = action;
  const { caret, range } = payload;
  switch (type) {
    case 'ACTION_HANDLE_BACKSPACE':
      if (caret.active) {
        const block = state[caret.block];
        const content = block.content;
        return {
          ...state,
          [caret.block]: {
            ...block,
            content: content.slice(0, caret.offset - 1) + content.slice(caret.offset),
          },
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
