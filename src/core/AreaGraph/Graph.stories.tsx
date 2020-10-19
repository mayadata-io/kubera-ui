import { storiesOf } from '@storybook/react';
import React from 'react';
import { ThemedBackground } from '../../utils/storybook';
import BaseArea from './BaseArea';

storiesOf('Graph/Area', module)
  // Litmus Portal
  .add('Litmus Portal', () => (
    <ThemedBackground platform="litmus-portal">
      <BaseArea />
    </ThemedBackground>
  ));
