import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { Links } from '../Link';

storiesOf('Link', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal" row>
      <Links active={true} disabled={false} pathname="/home">
        Link
      </Links>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos" row>
      <Links active={true} disabled={true} pathname="/home">
        Link
      </Links>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel" row>
      <Links active={true} disabled={true} pathname="/home">
        Link
      </Links>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal" row>
      <Links active={true} disabled={true} pathname="/home">
        Link
      </Links>
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core" row>
      <Links active={true} disabled={true} pathname="/home">
        Link
      </Links>
    </ThemedBackground>
  ));
