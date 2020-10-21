import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import BaseArea from './BaseArea';

storiesOf('Graph/Area', module)
  // Litmus Portal
  .add('Kubera Chaos', () => (
    <ThemedBackground platform="kubera-chaos">
      <BaseArea />
    </ThemedBackground>
  ));
