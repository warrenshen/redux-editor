import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import SectionStandard from '../presenters/SectionStandard';

const styles = StyleSheet.create({
  display: 'flex',
  outline: 'none',
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
            key={section.id}
            blocks={section.blocks}
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
