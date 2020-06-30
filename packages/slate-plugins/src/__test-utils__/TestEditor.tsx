import * as React from 'react';
import { useState } from 'react';
import { EditablePlugins, SlatePlugin } from '@udecode/core';
import { createEditor, Node } from 'slate';
import { withHistory } from 'slate-history';
import { Slate, withReact } from 'slate-react';
import { SlateDocument } from '../common';
import { pipe } from '../common/utils';

export const TestEditor = ({
  children,
  initialValue = [],
  plugins = [],
}: {
  children: any;
  editor?: any;
  initialValue?: Node[];
  plugins?: SlatePlugin[];
  withPlugins?: any;
}) => {
  const [value, setValue] = useState(initialValue);

  const editorWithPlugins = pipe(createEditor(), withReact, withHistory);

  return (
    <Slate
      editor={editorWithPlugins}
      value={value}
      onChange={(newValue) => {
        setValue(newValue as SlateDocument);
      }}
    >
      {children}
      <EditablePlugins plugins={plugins} />
    </Slate>
  );
};
