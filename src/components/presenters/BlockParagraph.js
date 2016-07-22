import React from 'react';

export default (props) => {
  const {
    block,
    id,
  } = props;
  return (
    <div
      className={'block-paragraph'}
      data-id={id}
    >
      {block.content}
    </div>
  );
};
