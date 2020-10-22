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
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="primary"
        variant="primary"
        disabled={true}
        handleChange={() => console.log('change')}
      />
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos">
      <InputField
        label="primary"
        variant="primary"
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
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="primary"
        variant="primary"
        disabled={true}
        handleChange={() => console.log('change')}
      />
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel">
      <InputField
        label="primary"
        variant="primary"
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
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="primary"
        variant="primary"
        disabled={true}
        handleChange={() => console.log('change')}
      />
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core">
      <InputField
        label="primary"
        variant="primary"
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
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="primary"
        variant="primary"
        disabled={true}
        handleChange={() => console.log('change')}
      />
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal">
      <InputField
        label="primary"
        variant="primary"
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
        disabled={false}
        handleChange={() => console.log('change')}
      />
      <InputField
        label="primary"
        variant="primary"
        disabled={true}
        handleChange={() => console.log('change')}
      />
    </ThemedBackground>
  ));
