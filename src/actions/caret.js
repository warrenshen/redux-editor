export const updateCaret = (caret) => {
  return {
    payload: {
      active: (caret !== null),
      block: (caret !== null) ? caret.block : null,
      offset: (caret !== null) ? caret.offset : null,
      section: (caret !== null) ? caret.section : null,
    },
    type: 'ACTION_UPDATE_CARET',
  };
};
