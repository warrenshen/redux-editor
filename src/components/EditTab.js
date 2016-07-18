import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    width: '712px',
    margin: '64px auto 0',
  },
});

export default function() {
  return (
    <div className={css(styles.container)}>
      {'Hello world!'}
    </div>
  );
}
