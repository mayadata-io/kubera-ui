import RadioGroup from '@material-ui/core/RadioGroup';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../../src/utils/storybook';
import { RadioButton } from '../RadioButton';

storiesOf('RadioButton', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal">
      <RadioGroup row>
        <RadioButton value="1">Target cluster</RadioButton>
        <RadioButton value="2">Target cluster</RadioButton>
        <RadioButton value="3">Target cluster</RadioButton>
        <RadioButton disabled={true} checked={true}>
          Target cluster
        </RadioButton>
      </RadioGroup>
      <RadioButton value="1">Target cluster</RadioButton>
      <RadioButton value="2">Target cluster</RadioButton>
      <RadioButton value="3">Target cluster</RadioButton>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos">
      <RadioGroup row>
        <RadioButton value="1">Target cluster</RadioButton>
        <RadioButton value="2">Target cluster</RadioButton>
        <RadioButton value="3">Target cluster</RadioButton>
        <RadioButton disabled={true} checked={true}>
          Target cluster
        </RadioButton>
      </RadioGroup>
      <RadioButton value="1">Target cluster</RadioButton>
      <RadioButton value="2">Target cluster</RadioButton>
      <RadioButton value="3">Target cluster</RadioButton>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel">
      <RadioGroup row>
        <RadioButton value="1">Target cluster</RadioButton>
        <RadioButton value="2">Target cluster</RadioButton>
        <RadioButton value="3">Target cluster</RadioButton>
        <RadioButton disabled={true} checked={true}>
          Target cluster
        </RadioButton>
      </RadioGroup>
      <RadioButton value="1">Target cluster</RadioButton>
      <RadioButton value="2">Target cluster</RadioButton>
      <RadioButton value="3">Target cluster</RadioButton>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal">
      <RadioGroup row>
        <RadioButton value="1">Target cluster</RadioButton>
        <RadioButton value="2">Target cluster</RadioButton>
        <RadioButton value="3">Target cluster</RadioButton>
        <RadioButton disabled={true} checked={true}>
          Target cluster
        </RadioButton>
      </RadioGroup>
      <RadioButton value="1">Target cluster</RadioButton>
      <RadioButton value="2">Target cluster</RadioButton>
      <RadioButton value="3">Target cluster</RadioButton>
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core">
      <RadioGroup row>
        <RadioButton value="1">Target cluster</RadioButton>
        <RadioButton value="2">Target cluster</RadioButton>
        <RadioButton value="3">Target cluster</RadioButton>
        <RadioButton disabled={true} checked={true}>
          Target cluster
        </RadioButton>
      </RadioGroup>
      <RadioButton value="1">Target cluster</RadioButton>
      <RadioButton value="2">Target cluster</RadioButton>
      <RadioButton value="3">Target cluster</RadioButton>
    </ThemedBackground>
  ));
