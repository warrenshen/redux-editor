class Walker {
  createTreeWalker(parentNode) {
    return document.createTreeWalker(
      parentNode,
      NodeFilter.SHOW_TEXT,
      (childNode) => NodeFilter.FILTER_ACCEPT,
      false
    );
  }

  findBaseOffset(baseNode, blockNode) {
    let offset = 0;
    const walker = this.createTreeWalker(blockNode);
    while (walker.nextNode() && !walker.currentNode.isEqualNode(baseNode)) {
      offset += walker.currentNode.length;
    }
    return offset;
  }

  findBlockNode(baseNode) {
    let blockNode = baseNode;
    while (!blockNode.dataset || !blockNode.dataset.id) {
      blockNode = blockNode.parentNode;
    }
    return blockNode;
  }

  generateCaret(selection, type='anchor') {
    const baseNode = selection[`${type}Node`];
    if (baseNode === null) {
      return null;
    }

    const blockNode = this.findBlockNode(baseNode);
    const sectionNode = blockNode.parentNode;

    const baseOffset = this.findBaseOffset(baseNode, blockNode);
    const caretOffset = baseOffset + selection[`${type}Offset`];

    const blockId = parseInt(blockNode.dataset.id);
    const sectionId = parseInt(sectionNode.dataset.id);

    return {
      block: blockId,
      offset: caretOffset,
      section: sectionId,
    };
  }

  generateRange(selection) {
    const anchorCaret = this.generateCaret(selection);
    const focusCaret = this.generateCaret(selection, 'focus');
    return {
      end: focusCaret,
      start: anchorCaret,
    };
  }
}

export default new Walker();
