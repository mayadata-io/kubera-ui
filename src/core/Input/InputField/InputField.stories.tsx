import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../../utils/storybook';
import { InputField } from '../InputField';

storiesOf('Input/InputField', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <InputField
        label="primary"
        variant="primary"
        error={false}
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="error"
        variant="error"
        error={true}
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="success"
        variant="success"
        error={false}
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="disabled"
        variant="primary"
        error={false}
        disabled={true}
        handleChange={() => console.log('change')}
      />
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <InputField
        label="primary"
        variant="primary"
        error={false}
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="error"
        variant="error"
        error={true}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="success"
        variant="success"
        error={false}
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="disabled"
        variant="primary"
        error={false}
        disabled={true}
        handleChange={() => console.log('change')}
      />
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <InputField
        label="primary"
        variant="primary"
        error={false}
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="error"
        variant="error"
        error={true}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="success"
        variant="success"
        error={false}
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="disabled"
        variant="primary"
        error={false}
        disabled={true}
        handleChange={() => console.log('change')}
      />
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core" row>
      <InputField
        label="primary"
        variant="primary"
        error={false}
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="error"
        variant="error"
        error={true}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="success"
        variant="success"
        error={false}
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="disabled"
        variant="primary"
        error={false}
        disabled={true}
        handleChange={() => console.log('change')}
      />
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal" row>
      <InputField
        label="primary"
        variant="primary"
        error={false}
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="error"
        variant="error"
        error={true}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="success"
        variant="success"
        error={false}
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="disabled"
        variant="primary"
        error={false}
        disabled={true}
        handleChange={() => console.log('change')}
      />
    </ThemedBackground>
  ));
