import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import EditStory from './EditStory';

const styles = StyleSheet.create({
  container: {
    width: '712px',
    margin: '64px auto 0',
    paddingBottom: '356px',
  },
});

export default function(props) {
  const {
    story,
  } = props;
  return (
    <div className={css(styles.container)}>
      <EditStory story={story} />
    </div>
  );
}
