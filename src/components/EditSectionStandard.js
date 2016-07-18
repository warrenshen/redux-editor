import React from 'react';

import EditBlockStandard from './EditBlockStandard';

export default (props) => {
  const {
    blocks,
  } = props;
  return (
    <div className={'section-standard'}>
      {blocks.map((block) => (
        <EditBlockStandard
          block={block}
          key={block.id}
        />
      ))}
    </div>
  );
};
