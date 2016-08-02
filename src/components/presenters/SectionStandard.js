import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import BlockParagraph from './BlockParagraph';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default (props) => {
  const {
    blocks,
    id,
  } = props;
  return (
    <div
      className={css(styles.container)}
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
