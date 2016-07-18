import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  display: 'flex',
  outline: 'none',
  userSelect: 'none',
});

export default class EditStory extends Component {
  render() {
    const {
      story,
    } = this.props;
    return (
      <div
        className={css(styles.container)}
        contentEditable={true}
        ref={'story'}
      >
        {'Hello world!!'}
      </div>
    );
  }
};
