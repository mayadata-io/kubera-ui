import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { ThemedBackground } from '../../utils/storybook';
import CustomText from './customText';

storiesOf('CustomText', module).add('Litmus Portal', () => {
  const [valueText, setValueText] = useState('Hello World');
  const handleChnage = (value: string) => {
    setValueText(value);
  };
  return (
    <ThemedBackground platform="litmus-portal">
      <CustomText
        value={valueText}
        id="name"
        onChangeText={handleChnage}
        isEditable={true}
        validateText={false}
        label={'test'}
        helperText={'test'}
        showHelperTextDisables={true}
      />
    </ThemedBackground>
  );
});
