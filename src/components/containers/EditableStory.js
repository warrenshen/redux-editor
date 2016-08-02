import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import {
  handleBackspace,
  handleCharacter,
  handleEnter,
} from '../../actions/story';

import Walker from '../../helpers/walker';

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
    this.node = null;
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this.refs.container);
    this.node.addEventListener('keydown', this.onKeyDown);
    this.node.addEventListener('keypress', this.onKeyPress);
    Walker.renderCaret(this.props.caret, this.node);
  }

  componentDidUpdate() {
    Walker.renderCaret(this.props.caret, this.node);
  }

  componentWillUnmount() {
    this.node.removeEventListener('keydown', this.onKeyDown);
    this.node.removeEventListener('keypress', this.onKeyPress);
  }

  onKeyDown(event) {
    event.stopPropagation();
    const {
      which,
    } = event;
    const {
      onBackspaceDown,
    } = this.props;
    if (which === 8) {
      event.preventDefault();
      onBackspaceDown();
    }
  }

  onKeyPress(event) {
    event.stopPropagation();
    const {
      which,
    } = event;
    const {
      onCharacterPress,
      onEnterPress,
    } = this.props;
    if (which === 13) {
      event.preventDefault();
      onEnterPress();
    } else {
      event.preventDefault();
      const character = String.fromCharCode(which);
      onCharacterPress(character);
    }
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
    caret,
    range,
    story,
  } = state;
  const {
    blocks,
    sectionIds,
    sections,
  } = story;
  return {
    caret: caret,
    range: range,
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
    onCharacterPress: (character) => dispatch(handleCharacter(character)),
    onEnterPress: () => dispatch(handleEnter()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditableStory);
