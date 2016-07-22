import React from 'react';

import BlockParagraph from './BlockParagraph';

export default (props) => {
  const {
    blocks,
    id,
  } = props;
  return (
    <div
      className={'section-standard'}
      data-id={id}
    >
      {blocks.map((block) => (
        <BlockParagraph
          block={block}
          id={block.id}
          key={block.id}
        />
      ))}
    </div>
  );
};
