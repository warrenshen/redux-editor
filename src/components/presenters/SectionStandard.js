import React from 'react';

import BlockParagraph from './BlockParagraph';

export default (props) => {
  const {
    blocks,
  } = props;
  return (
    <div className={'section-standard'}>
      {blocks.map((block) => (
        <BlockParagraph
          block={block}
          key={block.id}
        />
      ))}
    </div>
  );
};
