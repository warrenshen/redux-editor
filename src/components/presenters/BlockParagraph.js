import React from 'react';

export default (props) => {
  const {
    block,
  } = props;
  return (
    <div className={'block-paragraph'}>
      {block.content}
    </div>
  );
};
