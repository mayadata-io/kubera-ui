import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { EditableText } from './EditableText';

storiesOf('text/EditableText', module).add('Litmus Portal', () => {
  const [valueText, setValueText] = useState('Hello World');
  // const handleChnage = (value: string) => {
  //   setValueText(value);
  // };
  return (
    <ThemedBackground platform="litmus-portal">
      <EditableText
        label="Normal text field"
        variant={'primary'}
        value={valueText}
        multiline
        onChange={(e) => setValueText(e.target.value)}
      />
    </ThemedBackground>
  );
});
