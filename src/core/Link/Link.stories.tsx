import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import { Links } from '../Link';

storiesOf('Link', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal">
      <Links disabled={false} target="_blank" pathname="/home">
        Link
      </Links>
    </ThemedBackground>
  ))

  // Kubera Chaos
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos">
      <Links disabled={false} pathname="/home">
        Link
      </Links>
    </ThemedBackground>
  ))

  // Kubera Propel
  .add('Kubera Propel', () => (
    <ThemedBackground platform="kubera-propel">
      <Links disabled={false} pathname="/home">
        Link
      </Links>
    </ThemedBackground>
  ))

  // Kubera Portal
  .add('Kubera Portal', () => (
    <ThemedBackground platform="kubera-portal">
      <Links disabled={false} pathname="/home">
        Link
      </Links>
    </ThemedBackground>
  ))

  // Kubera Core
  .add('Kubera Core', () => (
    <ThemedBackground platform="kubera-core">
      <Links disabled={true} pathname="/home">
        Link
      </Links>
    </ThemedBackground>
  ));
