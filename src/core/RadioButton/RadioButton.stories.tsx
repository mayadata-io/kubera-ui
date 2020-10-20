import React from 'react';
import RadioButton from '../RadioButton';
import { storiesOf } from '@storybook/react';
import { ThemedBackground } from '../../../src/utils/storybook';

// label[0] = content[0]
storiesOf('RadioButton', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <RadioButton>Target cluster</RadioButton>
      <RadioButton disabled={true}>Target cluster</RadioButton>
      <RadioButton disabled={true} checked={true}>
        Target cluster
      </RadioButton>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <RadioButton>Target cluster</RadioButton>
      <RadioButton disabled={true}>Target cluster</RadioButton>
      <RadioButton disabled={true} checked={true}>
        Target cluster
      </RadioButton>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <RadioButton>Target cluster</RadioButton>
      <RadioButton disabled={true}>Target cluster</RadioButton>
      <RadioButton disabled={true} checked={true}>
        Target cluster
      </RadioButton>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal" row>
      <RadioButton>Target cluster</RadioButton>
      <RadioButton disabled={true}>Target cluster</RadioButton>
      <RadioButton disabled={true} checked={true}>
        Target cluster
      </RadioButton>
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core" row>
      <RadioButton>Target cluster</RadioButton>
      <RadioButton disabled={true}>Target cluster</RadioButton>
      <RadioButton disabled={true} checked={true}>
        Target cluster
      </RadioButton>
    </ThemedBackground>
  ));
