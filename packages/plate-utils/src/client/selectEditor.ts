import type { Location } from 'slate';

import { type Value, getEndPoint, getStartPoint, select } from '@udecode/slate';
import { type TReactEditor, focusEditor } from '@udecode/slate-react';

export interface SelectEditorOptions {
  /** Specific location if edge is not defined. */
  at?: Location;

  /** Start or end of the editor. */
  edge?: 'end' | 'start';

  /** If true, focus the React editor before selecting. */
  focus?: boolean;
}

/** Select an editor at a target or an edge (start, end). */
export const selectEditor = <V extends Value>(
  editor: TReactEditor<V>,
  { at, edge, focus }: SelectEditorOptions
) => {
  if (focus) {
    focusEditor(editor);
  }

  let location = at as Location;

  if (edge === 'start') {
    location = getStartPoint(editor, []);
  }
  if (edge === 'end') {
    location = getEndPoint(editor, []);
  }
  if (location) {
    select(editor, location);
  }
};
