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

  renderCaret(caret, node) {
    if (caret.active) {
      const parentNode = node.childNodes[caret.section].childNodes[caret.block];
      const childrenNodes = parentNode.childNodes;

      let baseNode = null;
      for (let i = 0; i < childrenNodes.length && baseNode === null; i += 1) {
        if (childrenNodes[i].isContentEditable) {
          baseNode = childrenNodes[i];
        }
      }

      if (baseNode !== null) {
        baseNode.focus();
        const selection = window.getSelection();
        const range = document.createRange();

        let offset = caret.offset;
        let currentNode = baseNode;
        if (offset > 0) {
          const walker = this.createTreeWalker(baseNode);
          while (walker.nextNode() && offset >= 0) {
            currentNode = walker.currentNode;
            if (offset - currentNode.length <= 0) {
              range.setStart(currentNode, offset);
              range.setEnd(currentNode, offset);
            }
            offset -= currentNode.length;
          }
        } else {
          range.setStart(currentNode, 0);
          range.setEnd(currentNode, 0);
        }

        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }
}

export default new Walker();
