import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import BaseRadial from './BaseRadial';

storiesOf('Graph/Radial', module)
  // Litmus Portal
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos">
      <BaseRadial />
    </ThemedBackground>
  ));
