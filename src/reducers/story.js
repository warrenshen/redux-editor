import blocks from './blocks';

const initialState = {
  blockIncrement: 0,
  blocks: {
    0: {
      centered: false,
      content: 'Write your story here.',
      id: 0,
      section: 0,
      source: '',
      type: 'MODEL_BLOCK_PARAGRAPH',
    },
  },
  sectionIds: [0],
  sectionIncrement: 0,
  sections: {
    0: {
      blockIds: [0],
      id: 0,
      type: 'MODEL_SECTION_STANDARD',
    },
  },
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'ACTION_HANDLE_BACKSPACE':
      return state;
    case 'ACTION_HANDLE_ENTER':
      return state;
    default:
      return state;
  }
};
