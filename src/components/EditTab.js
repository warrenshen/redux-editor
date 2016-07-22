import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { StyleSheet, css } from 'aphrodite';

import Walker from '../helpers/walker';

import EditableStory from './containers/EditableStory';

const styles = StyleSheet.create({
  container: {
    width: '712px',
    margin: '64px auto 0',
    paddingBottom: '356px',
  },
});

function onMouseUp(event) {
  const selection = window.getSelection();
  setTimeout(() => {
    if (selection.isCollapsed) {
      const caret = Walker.generateCaret(selection);
      console.log(caret);
    } else {
      const range = Walker.generateRange(selection);
      console.log(range);
    }
  }.bind(this), 25);
}

class EditTab extends Component {
  componentDidMount() {
    var container = ReactDOM.findDOMNode(this.refs.container);
    container.addEventListener('mouseup', onMouseUp);
  }

  componentWillUnmount() {
    var container = ReactDOM.findDOMNode(this.refs.container);
    container.removeEventListener('mouseup', onMouseUp);
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

export default EditTab;
