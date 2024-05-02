import { useEditorRef } from '@udecode/plate-core';
import { type TElement, removeNodes } from '@udecode/slate';
import { findNodePath } from '@udecode/slate-react';

export const useRemoveNodeButton = ({ element }: { element: TElement }) => {
  const editor = useEditorRef();

  return {
    props: {
      onClick: () => {
        const path = findNodePath(editor, element);

        removeNodes(editor, { at: path });
      },
      onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
      },
    },
  };
};
