import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import {
  handleBackspace,
  handleEnter,
} from '../../actions/story';

import SectionStandard from '../presenters/SectionStandard';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '712px',
    margin: '0 auto',
    paddingBottom: '356px',
    outline: 'none',
  },
});

class EditableStory extends Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyDown(event) {
    event.preventDefault();
    event.stopPropagation();
    const {
      which,
    } = event;
    const {
      onBackspaceDown,
    } = this.props;
    if (which === 8) {
      onBackspaceDown();
    }
  }

  onKeyPress(event) {
    event.preventDefault();
    event.stopPropagation();
    const {
      which,
    } = event;
    const {
      onEnterPress,
    } = this.props;
    if (which === 13) {
      onEnterPress();
    }
  }

  componentDidMount() {
    var container = ReactDOM.findDOMNode(this.refs.container);
    container.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    var container = ReactDOM.findDOMNode(this.refs.container);
    container.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    const { sections } = this.props;
    return (
      <div
        className={css(styles.container)}
        contentEditable={true}
        ref={'container'}
      >
        {sections.map((section) => (
          <SectionStandard
            blocks={section.blocks}
            id={section.id}
            key={section.id}
          />
        ))}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const {
    blocks,
    sectionIds,
    sections,
  } = state.story;
  return {
    sections: sectionIds.map((sectionId) => {
      const section = Object.assign({}, sections[sectionId]);
      section.blocks = section.blockIds.map((blockId) => blocks[blockId]);
      return section;
    }),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBackspaceDown: () => dispatch(handleBackspace()),
    onEnterPress: () => dispatch(handleEnter()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableStory);
