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
      type: 'MODEL_STORY_STANDARD',
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
