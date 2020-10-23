import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { Switch } from '../Switch';

storiesOf('Switch', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <Switch variant="default" />
      <Switch variant="success" />
      <Switch variant="error" />
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <Switch variant="default" />
      <Switch variant="success" />
      <Switch variant="error" />
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <Switch variant="default" />
      <Switch variant="success" />
      <Switch variant="error" />
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal" row>
      <Switch variant="default" />
      <Switch variant="success" />
      <Switch variant="error" />
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core" row>
      <Switch variant="default" />
      <Switch variant="success" />
      <Switch variant="error" />
    </ThemedBackground>
  ));
