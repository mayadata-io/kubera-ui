import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../../utils/storybook';
import { HeaderText } from '../Header';

storiesOf('Text/HeaderText', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <HeaderText>Header Text</HeaderText>
      <HeaderText type="bold">Header Text</HeaderText>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <HeaderText>Header Text</HeaderText>
      <HeaderText type="bold">Header Text</HeaderText>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <HeaderText>Header Text</HeaderText>
      <HeaderText type="bold">Header Text</HeaderText>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal" row>
      <HeaderText>Header Text</HeaderText>
      <HeaderText type="bold">Header Text</HeaderText>
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core" row>
      <HeaderText>Header Text</HeaderText>
      <HeaderText type="bold">Header Text</HeaderText>
    </ThemedBackground>
  ));
