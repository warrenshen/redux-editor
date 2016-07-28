import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import { updateCaret } from '../../actions/caret';
import { updateRange } from '../../actions/range';

import Walker from '../../helpers/walker';

import EditableStory from './EditableStory';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100vw',
    minHeight: '100vh',
    paddingTop: '64px',
    boxSizing: 'border-box',
  },
});

class EditTab extends Component {
  constructor(props) {
    super(props);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  componentDidMount() {
    var container = ReactDOM.findDOMNode(this.refs.container);
    container.addEventListener('mouseup', this.onMouseUp);
  }

  componentWillUnmount() {
    var container = ReactDOM.findDOMNode(this.refs.container);
    container.removeEventListener('mouseup', this.onMouseUp);
  }

  onMouseUp(event) {
    const {
      onCaretChange,
      onRangeChange,
    } = this.props;
    const selection = window.getSelection();
    setTimeout(() => {
      if (selection.isCollapsed) {
        const caret = Walker.generateCaret(selection);
        onCaretChange(caret);
      } else {
        const range = Walker.generateRange(selection);
        onRangeChange(range);
      }
    }, 25);
  }

  render() {
    const {
      story,
    } = this.props;
    return (
      <div
        className={css(styles.container)}
        ref={'container'}
      >
        <EditableStory story={story} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCaretChange: (caret) => dispatch(updateCaret(caret)),
    onRangeChange: (range) => dispatch(updateRange(range)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditTab);
