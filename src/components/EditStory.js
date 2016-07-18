import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  display: 'flex',
  outline: 'none',
});

class EditStory extends Component {
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

const mapStateToProps = (state) => {
  return {
    story: state.story,
  };
};

export default connect(
  mapStateToProps
)(EditStory);
