import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import SectionStandard from '../presenters/SectionStandard';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '712px',
    margin: '64px auto 0',
    paddingBottom: '356px',
    outline: 'none',
  },
});

class EditableStory extends Component {
  render() {
    const { sections } = this.props;
    return (
      <div
        className={css(styles.container)}
        contentEditable={true}
        ref={'story'}
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

export default connect(
  mapStateToProps
)(EditableStory);
