import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { InputField } from '../InputField';

storiesOf('Input/InputField', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal">
      <InputField
        label="primary"
        variant="primary"
        type="password"
        disabled={false}
        onChange={(e) => e.target.value}
      />
      <InputField
        label="error"
        variant="error"
        adornment="Start"
        type="text"
        disabled={false}
        onChange={(e) => e.target.value}
      />
      <InputField
        label="success"
        variant="success"
        adornment="StartEnd"
        type="text"
        disabled={false}
        onChange={(e) => e.target.value}
      />
      <InputField
        label="primary"
        variant="primary"
        type="text"
        disabled={true}
      />
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos">
      <InputField
        label="primary"
        variant="primary"
        type="text"
        disabled={false}
        onChange={(e) => e.target.value}
      />
      <InputField
        label="error"
        variant="error"
        type="text"
        disabled={false}
        onChange={(e) => e.target.value}
      />
      <InputField
        label="success"
        variant="success"
        type="text"
        disabled={false}
        onChange={(e) => e.target.value}
      />
      <InputField
        label="primary"
        variant="primary"
        type="text"
        disabled={true}
      />
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel">
      <InputField
        label="primary"
        variant="primary"
        type="text"
        disabled={false}
        onChange={(e) => e.target.value}
      />
      <InputField
        label="error"
        variant="error"
        type="text"
        disabled={false}
        onChange={(e) => e.target.value}
      />
      <InputField
        label="success"
        variant="success"
        type="text"
        disabled={false}
        onChange={(e) => e.target.value}
      />
      <InputField
        label="primary"
        variant="primary"
        type="text"
        disabled={true}
      />
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core">
      <InputField
        label="primary"
        variant="primary"
        type="text"
        disabled={false}
        onChange={(e) => e.target.value}
      />
      <InputField
        label="error"
        variant="error"
        type="text"
        disabled={false}
        onChange={(e) => e.target.value}
      />
      <InputField
        label="success"
        variant="success"
        type="text"
        disabled={false}
        onChange={(e) => e.target.value}
      />
      <InputField
        label="primary"
        variant="primary"
        type="text"
        disabled={true}
      />
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal">
      <InputField
        label="primary"
        variant="primary"
        type="text"
        disabled={false}
        onChange={(e) => e.target.value}
      />
      <InputField
        label="error"
        variant="error"
        type="text"
        disabled={false}
        onChange={(e) => e.target.value}
      />
      <InputField
        label="success"
        variant="success"
        type="text"
        disabled={false}
        onChange={(e) => e.target.value}
      />
      <InputField
        label="primary"
        variant="primary"
        type="text"
        disabled={true}
      />
    </ThemedBackground>
  ));
