import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  content: {

  },
});

export default (props) => {
  const {
    block,
    id,
  } = props;
  return (
    <div
      className={css(styles.container)}
      data-id={id}
    >
      <p className={css(styles.content)}>
        {block.content}
      </p>
    </div>
  );
};
