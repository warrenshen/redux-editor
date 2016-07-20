export const updateCaret = (section, block, offset) => {
  return {
    payload: {
      block: block,
      offset: offset,
      section: section,
    },
    type: 'ACTION_UPDATE_CARET',
  };
};
