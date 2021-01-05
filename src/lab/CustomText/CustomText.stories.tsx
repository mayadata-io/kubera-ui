import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { ThemedBackground } from '../../utils/storybook';
import CustomText from './customText';

storiesOf('text/CustomText', module)
  .add('Litmus Portal', () => {
    const [valueText, setValueText] = useState('Hello World');
    const handleChnage = (value: string) => {
      setValueText(value);
    };
    return (
      <ThemedBackground platform="litmus-portal">
        <CustomText
          value={valueText}
          onChangeText={handleChnage}
          isEditable={true}
          validateText={false}
          label={'test'}
          helperText={'test'}
          showHelperTextDisabled={true}
          width={'10rem'}
        />
        <CustomText
          value={valueText}
          onChangeText={handleChnage}
          isEditable={true}
          validateText={false}
          label={'test'}
          helperText={'test'}
          showHelperTextDisabled={false}
          width={'10rem'}
          multiline
        />
        <CustomText
          value={valueText}
          onChangeText={handleChnage}
          isEditable={true}
          validateText={false}
          width={'10rem'}
        />
      </ThemedBackground>
    );
  })
  .add('Kubera Chaos', () => {
    const [valueText, setValueText] = useState('Hello World');
    const handleChnage = (value: string) => {
      setValueText(value);
    };
    return (
      <ThemedBackground platform="kubera-chaos">
        <CustomText
          value={valueText}
          onChangeText={handleChnage}
          isEditable={true}
          validateText={false}
          label={'test'}
          helperText={'test'}
          showHelperTextDisabled={true}
          width={'10rem'}
        />
        <CustomText
          value={valueText}
          onChangeText={handleChnage}
          isEditable={true}
          validateText={false}
          label={'test'}
          helperText={'test'}
          showHelperTextDisabled={false}
          width={'10rem'}
          multiline
        />
        <CustomText
          value={valueText}
          onChangeText={handleChnage}
          isEditable={true}
          validateText={false}
          width={'10rem'}
        />
      </ThemedBackground>
    );
  })
  .add('Kubera Propel', () => {
    const [valueText, setValueText] = useState('Hello World');
    const handleChnage = (value: string) => {
      setValueText(value);
    };
    return (
      <ThemedBackground platform="kubera-propel">
        <CustomText
          value={valueText}
          onChangeText={handleChnage}
          isEditable={true}
          validateText={false}
          label={'test'}
          helperText={'test'}
          showHelperTextDisabled={true}
          width={'10rem'}
        />
        <CustomText
          value={valueText}
          onChangeText={handleChnage}
          isEditable={true}
          validateText={false}
          label={'test'}
          helperText={'test'}
          showHelperTextDisabled={false}
          width={'10rem'}
          multiline
        />
        <CustomText
          value={valueText}
          onChangeText={handleChnage}
          isEditable={true}
          validateText={false}
          width={'10rem'}
        />
      </ThemedBackground>
    );
  })
  .add('Kubera Portal', () => {
    const [valueText, setValueText] = useState('Hello World');
    const handleChnage = (value: string) => {
      setValueText(value);
    };
    return (
      <ThemedBackground platform="kubera-portal">
        <CustomText
          value={valueText}
          onChangeText={handleChnage}
          isEditable={true}
          validateText={false}
          label={'test'}
          helperText={'test'}
          showHelperTextDisabled={true}
          width={'10rem'}
        />
        <CustomText
          value={valueText}
          onChangeText={handleChnage}
          isEditable={true}
          validateText={false}
          label={'test'}
          helperText={'test'}
          showHelperTextDisabled={false}
          width={'10rem'}
          multiline
        />
        <CustomText
          value={valueText}
          onChangeText={handleChnage}
          isEditable={true}
          validateText={false}
          width={'10rem'}
        />
      </ThemedBackground>
    );
  })
  .add('Kubera Core', () => {
    const [valueText, setValueText] = useState('Hello World');
    const handleChnage = (value: string) => {
      setValueText(value);
    };
    return (
      <ThemedBackground platform="kubera-core">
        <CustomText
          value={valueText}
          onChangeText={handleChnage}
          isEditable={true}
          validateText={false}
          label={'test'}
          helperText={'test'}
          showHelperTextDisabled={true}
          width={'10rem'}
        />
        <CustomText
          value={valueText}
          onChangeText={handleChnage}
          isEditable={true}
          validateText={false}
          label={'test'}
          helperText={'test'}
          showHelperTextDisabled={false}
          width={'10rem'}
          multiline
        />
        <CustomText
          value={valueText}
          onChangeText={handleChnage}
          isEditable={true}
          validateText={false}
          width={'10rem'}
        />
      </ThemedBackground>
    );
  });
